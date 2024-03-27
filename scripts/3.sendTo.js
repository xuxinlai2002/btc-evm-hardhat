const { ethers } = require("hardhat");
const {
    readConfig,
	writeConfig
} = require('./utils/helper.js')

const main = async () => {
    const [deployer] = await ethers.getSigners();

    const usdcAddress = await readConfig("config","USDC");
    const vaultAddress = await readConfig("config","BTCVaultService");

    let BTCVault = await ethers.getContractFactory("BTCVaultService")
    BTCVault = BTCVault.connect(deployer);
    BTCVault = BTCVault.attach(vaultAddress);

    const usdcDepostAmount = ethers.utils.parseUnits("2", 6);

    const rest = await BTCVault.sendTo(usdcAddress, "0x676A37eC9DC13f95133Fa86dBC053370a9417d8B", usdcDepostAmount);
    console.log("sendTo", rest);
}

main();