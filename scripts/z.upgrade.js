const { ethers, upgrades, getChainId } = require('hardhat');
const {
    readConfig
} = require('./utils/helper')

const main = async () => {

    const [deployer] = await ethers.getSigners()
    console.log("adddress", deployer.address);

    let vaultAddress = await readConfig("config", "BTCVaultService");

    const vaultService = await ethers.getContractFactory('BTCVaultService', deployer)

    // let planetServiceAddress = await readConfig("5","PLANET_SERVICE_ADDRESS");
    // console.log("planet Service Address :",planetServiceAddress);

    await upgrades.upgradeProxy(
        vaultAddress,
        vaultService, { from: deployer.address }
    );

    console.log('Bridge upgraded pool Service Address');

}



main();

