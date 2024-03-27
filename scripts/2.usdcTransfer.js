const { ethers } = require("hardhat");
const {
    readConfig,
	writeConfig
} = require('./utils/helper.js')

const main = async () => {
    const [deployer] = await ethers.getSigners();

    const usdcAddress = await readConfig("config","USDC");
    const vaultAddress = await readConfig("config","BTCVaultService");

    let USDC = await ethers.getContractFactory("USDC")
    USDC = USDC.connect(deployer);
    USDC = USDC.attach(usdcAddress);

    const usdcDepostAmount = ethers.utils.parseUnits("2", 6);

    const rest = await USDC.connect(deployer).transfer(vaultAddress, usdcDepostAmount);
    console.log("transfer", rest);
}

main();