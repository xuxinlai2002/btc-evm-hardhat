import { expect } from "chai";
import { ethers } from "hardhat";

import { createInstances } from "./instance";
import { getSigners } from "./signers";
import { createTransaction } from "./utils";
import { deployEncryptedERC20Fixture } from "./encryptedERC20/EncryptedERC20.fixture";

describe("BTCVaultService", function () {


  let btcVaultContract:any;
  let signers:any;
  let instances:any;

  before(async function () {
    signers = await getSigners(ethers);

    const btcVaultServiceFactory = await ethers.getContractFactory("BTCVaultService");
    btcVaultContract = await btcVaultServiceFactory.connect(signers.alice).deploy();
    await btcVaultContract.waitForDeployment();

    let btcVaultContractAddress = await btcVaultContract.getAddress();

    // console.log("xxl btcVaultContract.address ",btcVaultContractAddress);
    // instances = await createInstances(btcVaultContractAddress, ethers, signers);

  });

  it("sha256 and ripemd160", async function () {

    let aliceSecretHex = "35c598ad69edfdc8895fb3c37cede88331f34f7349233ed579ffa3275cd04eac";
    var aliceSecretBuf = Buffer.from(aliceSecretHex,"hex")
    let sha256DataHex = await btcVaultContract.sha256Test(aliceSecretBuf);

    console.log("xxl result 0000 :",sha256DataHex);

    var sha256DataBuf = Buffer.from("86b95349ebcbc0f9083ffee8df587345a480927328bcc460acc8ddfc19290f9c","hex")
    let ripemd160Hex = await btcVaultContract.ripemd160Test(sha256DataBuf);
    console.log("xxl result 0000 :",ripemd160Hex);

  });

  it("encrypt and decrypt", async function () {

    console.log("xxl 00000 ");

    // let aliceSecretHex = "35c598ad69edfdc8895fb3c37cede88331f34f7349233ed579ffa3275cd04eac";
    // var aliceSecretBuf = Buffer.from(aliceSecretHex,"hex")
    // await btcVaultContract.setPreImage(aliceSecretBuf);

    //  let rawImage = await btcVaultContract.getEnPreImage();
    //  console.log("xxl rawImage :",rawImage); 

  });

  it("generate randoms", async function () {

    console.log("xxl 00000 ");
    await btcVaultContract.generateRandoms(10);

  });


});
