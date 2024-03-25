const { ethers } = require("hardhat");
const chai = require('chai')
const { expect, assert } = chai

const {
  deployContract,
  deployProxyContract,
  isContractTransferSuccess
} = require('../scripts/utils/helper')

// import { createInstances } from "./instance";
// import { getSigners } from "./signers";
// import { createTransaction } from "./utils";
// import { deployEncryptedERC20Fixture } from "./encryptedERC20/EncryptedERC20.fixture";

describe("BTCVaultService", function () {
  var totalSupply = 100000000000000;

  const usdcDepostAmount = ethers.utils.parseUnits("2", 6);

  let deployer;
  let USDC;
  let BTCVaultContract;

  // let btcVaultContract:any;
  // let instances:any;

  before(async function () {
    [deployer] = await ethers.getSigners();
    console.log("deployer address", deployer.address);

    USDC = await deployContract("USDC", deployer, totalSupply);

    BTCVaultContract = await deployProxyContract("BTCVaultService", deployer);
    console.log("BTCVaultService Address", BTCVaultContract.address);

    
    // const btcVaultServiceFactory = await ethers.getContractFactory("BTCVaultService");
    // btcVaultContract = await btcVaultServiceFactory.connect(signers.alice).deploy();
    // await btcVaultContract.waitForDeployment();

    // let btcVaultContractAddress = await btcVaultContract.getAddress();

    // console.log("xxl btcVaultContract.address ",btcVaultContractAddress);
    // instances = await createInstances(btcVaultContractAddress, ethers, signers);

  });

  it("send usdc to pool", async function() {
    const isSucess = await isContractTransferSuccess(
      await USDC.connect(deployer).transfer(BTCVaultContract.address, usdcDepostAmount)
    );
    if(isSucess) {
      let amount = await USDC.connect(deployer).balanceOf(BTCVaultContract.address);
      assert.equal(usdcDepostAmount.toString(), amount.toString());
    }
  });

  // it("generateRandoms", async function() {
  //   await BTCVaultContract.generateRandoms(1);
  // })

  it("setOptionData", async function() {
    const rest = await BTCVaultContract.setOptionData(1, 3000, 10, 1711360859, 1711361000);
    console.log("setOptionData",rest.hash);
  })


  it("getOptionData", async function() {
    const rest = await BTCVaultContract.getOptionData(0);
    console.log("getOptionData",rest);
  })

  
  // it("sha256 and ripemd160", async function () {

  //   let aliceSecretHex = "35c598ad69edfdc8895fb3c37cede88331f34f7349233ed579ffa3275cd04eac";
  //   var aliceSecretBuf = Buffer.from(aliceSecretHex,"hex")
  //   let sha256DataHex = await btcVaultContract.sha256Test(aliceSecretBuf);

  //   console.log("xxl result 0000 :",sha256DataHex);

  //   var sha256DataBuf = Buffer.from("86b95349ebcbc0f9083ffee8df587345a480927328bcc460acc8ddfc19290f9c","hex")
  //   let ripemd160Hex = await btcVaultContract.ripemd160Test(sha256DataBuf);
  //   console.log("xxl result 0000 :",ripemd160Hex);

  // });

  // it("encrypt and decrypt", async function () {

  //   console.log("xxl 00000 ");

  //   // let aliceSecretHex = "35c598ad69edfdc8895fb3c37cede88331f34f7349233ed579ffa3275cd04eac";
  //   // var aliceSecretBuf = Buffer.from(aliceSecretHex,"hex")
  //   // await btcVaultContract.setPreImage(aliceSecretBuf);

  //   //  let rawImage = await btcVaultContract.getEnPreImage();
  //   //  console.log("xxl rawImage :",rawImage); 

  // });

  // it("generate randoms", async function () {

  //   console.log("xxl 00000 ");
  //   await btcVaultContract.generateRandoms(10);

  // });


});
