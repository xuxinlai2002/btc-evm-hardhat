// SPDX-License-Identifier: BSD-3-Clause-Clear
pragma solidity >=0.8.13 <0.9.0;

/* solhint-disable reason-string */
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import  "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";

// import "fhevm/lib/TFHE.sol";
import "hardhat/console.sol";

contract BTCVaultService is Initializable, UUPSUpgradeable, ReentrancyGuardUpgradeable {

    uint256   constant MAX_POPULATION = 10;
    uint256[] private  randoms;
    address   private  owner;
    uint32    private  currentNonce;
    
    enum CoinType {
        BTC,ETH,USDC,USDT,WETH,WBTC,DAI
    }
    
    enum OptionStatus {
        PENDING,FINISH
    }

    struct OptionData{
        CoinType coinType;
        uint256 strikePrice;
        uint256 stakingDuration;
        uint256 lockTimestamp;
        uint256 endTimestamp;
        uint256 nonce;
        bytes20 preImageHash;
        address owner;
        OptionStatus status;
    }

    mapping(uint256 => OptionData)  private  nonceOptionDataMap;
    mapping(uint256 => bytes32)     private  noncePreImageMap;

    modifier onlyOwner{
        require(msg.sender == owner, "only owner");
        _;
    }
    
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
        currentNonce = 0;
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyOwner {}

    function initialize() public initializer {
        __UUPSUpgradeable_init();
        owner = msg.sender;
        randoms = new uint256[](MAX_POPULATION);
    }

    function ripemd160Test(bytes memory _data) public view returns (bytes20) {

        // euint8 aa = TFHE.asEuint8(0);
        // console.log("xxl sol ");
        // console.logBytes(_data);
        // return ripemd160(_data);
    }

    //
    function sha256Test(bytes memory _data) public pure returns (bytes32) {
        return sha256(_data);
    }

    // CoinType coinType;
    // uint256 strikePrice;
    // uint256 stakingDuration;
    // uint256 lockTimestamp;
    // uint256 endTimestamp;
    // uint256 nonce;
    // bytes20 preImageHash;
    function setOptionData(
        CoinType coinType,
        uint256 strikePrice,
        uint256 stakingDuration,
        uint256 lockTimestamp,
        uint256 endTimestamp) external onlyOwner {

        bytes32 b32Random = bytes32(generateRandoms());
        bytes32 sha256Data = sha256(abi.encodePacked(b32Random));
        bytes20 ripemd160Data = ripemd160(abi.encodePacked(sha256Data));

        // 
        nonceOptionDataMap[currentNonce].coinType = coinType;
        nonceOptionDataMap[currentNonce].strikePrice = strikePrice;
        nonceOptionDataMap[currentNonce].stakingDuration = stakingDuration;
        nonceOptionDataMap[currentNonce].lockTimestamp = lockTimestamp;
        nonceOptionDataMap[currentNonce].endTimestamp = endTimestamp;
        nonceOptionDataMap[currentNonce].nonce = currentNonce;
        nonceOptionDataMap[currentNonce].preImageHash = ripemd160Data;
        nonceOptionDataMap[currentNonce].owner = msg.sender;
        nonceOptionDataMap[currentNonce].status = OptionStatus.PENDING;
        
    }

    function getOptionData(uint256 nonce) external view returns(OptionData memory ){
        return nonceOptionDataMap[nonce];
    }

    // function getPreImageHash() {

    //     uint256 nRand = getRandom();
    //     conosle.log("xxl sol nRand %d",nRand);
    //     bytes32 bRand = bytes32(nRand);
    //     conosle.logBytes32(bRand);

    // }

    // TODO random need to be more safety ,be vrf or from solana rust
    function getRandom() internal returns (uint256 randmon) {

        require(randoms.length > 0, "no random left");
 
        // generate random hash and use it to pick a number between 0 and ran'dmon.length
        uint256 randomIndex = uint256(
                                keccak256(
                                    abi.encodePacked(
                                        msg.sender, 
                                        block.timestamp, 
                                        block.coinbase, 
                                        gasleft(),
                                        currentNonce
                                    )
                                )
                            ) % randoms.length;
 
        // use current index or grab an old one
        randmon = (randoms[randomIndex] != 0) ? randoms[randomIndex] : randomIndex;
 
        // fill array position with value
        uint256 lastPos = randoms.length - 1;
        randoms[randomIndex] = (randoms[lastPos] == 0) ? lastPos : randoms[lastPos];
 
        // shrink randoms array
        randoms.pop();
    }

    // 
    function generateRandoms() internal returns(uint256){

        uint256 randomHash = uint256(
                                keccak256(
                                    abi.encodePacked(
                                        msg.sender, 
                                        block.timestamp, 
                                        block.coinbase, 
                                        gasleft(),
                                        currentNonce
                                    )
                                )
                            );
        return randomHash;

        // for (uint256 i = 0; i < count; i++) {

        //     randomHash = (randomHash > block.number) ? (randomHash - block.number) : (block.number - randomHash);
        //     randoms[i] = randomHash ;
        //     console.log("xxl sol randoms is %d",randomHash);
        
        // }

    }




}