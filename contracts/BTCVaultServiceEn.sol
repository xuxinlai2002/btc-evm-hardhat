// SPDX-License-Identifier: BSD-3-Clause-Clear
pragma solidity >=0.8.13 <0.9.0;

import "fhevm/lib/TFHE.sol";

contract BTCVaultServiceEn  {

    euint32 private preImage;
    address private owner;
    //uint32 private preImage;
    
    constructor(){
        owner = msg.sender;
    }

    function ripemd160Test(bytes memory _data) public pure returns (bytes20) {
        return ripemd160(_data);
    }


    function sha256Test(bytes memory _data) public pure returns (bytes32) {
        return sha256(_data);
    }

    function setPreImage(bytes calldata _rawData) external {
        preImage = TFHE.asEuint32(_rawData);
    }

    function getEnPreImage() view external returns(euint32){
        return preImage;
    }

    function getDePreImage() view external returns(uint32){

        return TFHE.decrypt(preImage);
    }

    


}