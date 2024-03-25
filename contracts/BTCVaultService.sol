// SPDX-License-Identifier: BSD-3-Clause-Clear
pragma solidity >=0.8.13 <0.9.0;

import "fhevm/lib/TFHE.sol";
import "hardhat/console.sol";

contract BTCVaultService  {

    uint256   constant MAX_POPULATION = 10;
    uint256[] private  randoms = new uint256[](MAX_POPULATION);
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

    constructor(){
        owner = msg.sender;
        currentNonce = 0;
    }

    modifier onlyOwner() {
        //nft owner check
        require(owner == msg.sender,"owner is not correct");
        _;
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
        uint256 endTimestamp) external returns(uint256,bytes20){

        // 
        nonceOptionDataMap[currentNonce].coinType = coinType;
        nonceOptionDataMap[currentNonce].strikePrice = strikePrice;
        nonceOptionDataMap[currentNonce].stakingDuration = stakingDuration;
        nonceOptionDataMap[currentNonce].lockTimestamp = lockTimestamp;
        nonceOptionDataMap[currentNonce].endTimestamp = endTimestamp;
        nonceOptionDataMap[currentNonce].nonce = currentNonce;
        nonceOptionDataMap[currentNonce].owner = msg.sender;
        nonceOptionDataMap[currentNonce].status = OptionStatus.PENDING;
        
        //

        //
        currentNonce ++ ;

    }

    function getOptionData(uint256 nonce) external view returns(OptionData memory ){

        return nonceOptionDataMap[nonce];
    }

    function getPreImageHash(){

        let nRand = getRandom();
        conosle.log("xxl sol nRand %d",nRand);
        let bRand = bytes32(nRand);
        conosle.logBytes32(bRand);

    }

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
    function generateRandoms(uint256 count) external onlyOwner{

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
 
        for (uint256 i = 0; i < count; i++) {

            randomHash = (randomHash > block.number) ? (randomHash - block.number) : (block.number - randomHash);
            randoms[i] = randomHash ;
            console.log("xxl sol randoms is %d",randomHash);
        
        }

    }




}