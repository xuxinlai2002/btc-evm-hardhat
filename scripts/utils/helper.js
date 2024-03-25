const fs = require('fs')
const path = require('path')
const { ethers, upgrades } = require("hardhat");

exports.deployContract = async (contractName, account, ...args) => {
    const factory = await ethers.getContractFactory(contractName, account);
    var contract = await factory.deploy(...args);

    await contract.deployed()

    return contract;
}

exports.deployProxyContract = async (contractName, account, ...args) => {
    const factory = await ethers.getContractFactory(contractName, account);
    const contract = await upgrades.deployProxy(factory, args);
    
    await contract.deployed();
    
    return contract;
}

exports.isContractTransferSuccess = async (txObj) => {
    let repObj = await txObj.wait();
    if (repObj.status == 1) {
        return true
    }
    return false;
}

exports.writeConfig = async (fromFile, toFile, key, value) => {

    let fromFullFile = path.resolve(getConfigPath(), './' + fromFile + '.json')
    let contentText = fs.readFileSync(fromFullFile, 'utf-8');
    let data = JSON.parse(contentText);
    data[key] = value;

    let toFullFile = path.resolve(getConfigPath(), './' + toFile + '.json')
    fs.writeFileSync(toFullFile, JSON.stringify(data, null, 4), { encoding: 'utf8' }, err => { })

}

exports.readConfig = async (fromFile, key) => {

    let fromFullFile = path.resolve(getConfigPath(), './' + fromFile + '.json')
    let contentText = fs.readFileSync(fromFullFile, 'utf-8');
    let data = JSON.parse(contentText);
    return data[key];

}

const getConfigPath = () => {
    //return "scripts/config"
    return path.resolve(__dirname, '..') + "/config"
}
