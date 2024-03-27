const { ethers } = require("hardhat");

const {
    deployContract,
    deployProxyContract,
    readConfig,
    writeConfig
} = require('../scripts/utils/helper')

const main = async () => {
    const totalSupply = 100000000000000;

    const [deployer] = await ethers.getSigners();
    console.log("deployer address", deployer.address);

    const USDC = await deployContract("USDC", deployer, totalSupply);

    const BTCVaultContract = await deployProxyContract("BTCVaultService", deployer);

    console.log("USDC", USDC.address);
    console.log("BTCVaultService", BTCVaultContract.address);

    // let usdcAddress = await readConfig("config","USDC");


	await writeConfig("config", "config", "USDC", USDC.address);
	await writeConfig("config", "config", "BTCVaultService", BTCVaultContract.address);

}

main();