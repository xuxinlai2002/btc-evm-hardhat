const { ethers } = require("hardhat");
const {
    readConfig,
	writeConfig
} = require('../scripts/utils/helper.js')

const main = async () => {
    const [deployer] = await ethers.getSigners();

    const vaultAddress = await readConfig("config","BTCVaultService");

    let BTCVault = await ethers.getContractFactory("BTCVaultService")
    BTCVault = BTCVault.connect(deployer);
    BTCVault = BTCVault.attach(vaultAddress)

    const coinType = 0;
    const strikePrice = 3500;
    const stakingDuration = 1;
    const lockTimestamp = parseInt(new Date().getTime() / 1000 + 5 * 60);
    const endTimestamp = parseInt(new Date().getTime() / 1000 + 10 * 60);

    // const result = await BTCVault.setOptionData(coinType, strikePrice, stakingDuration, lockTimestamp, endTimestamp);
    // console.log("setOptionData",result);

    const result = await BTCVault.getOptionData(0);
    console.log("getOptionData",result);
}

main();