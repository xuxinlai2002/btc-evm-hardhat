require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require("hardhat-tracer");
// require("hardhat-gas-reporter");
// require('@openzeppelin/hardhat-upgrades');
// require("@nomiclabs/hardhat-ganache");
require("dotenv").config();

// const { ProxyAgent, setGlobalDispatcher } = require("undici");
// const proxyAgent = new ProxyAgent('http://127.0.0.1:1081'); // change to yours
// setGlobalDispatcher(proxyAgent);

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity:{
    compilers:[
      {
       version:"0.8.13",
       settings: { optimizer: { enabled: true, runs: 200 } },
      },
      {
        version:"0.8.9",
        settings: { optimizer: { enabled: true, runs: 200 } },
       }
  ]
  },
  networks:{
    polygonMumbai: {
      url: `https://polygon-mumbai-pokt.nodies.app`,
      accounts: [
        "0xa6392433fe30f2bf8564228240eddd41c7ad12ab5332438254054896790ceebe",
        "0xbb568983fe7440b0197b6c990f4249fe83a07d03c7433d82c9d49f8f1e0fea3e",
        "0xadc22517f2de0093429e5365b042da0ec9299353943db0f0cc104743c69104cf",
        "0xada29a473e2b777403e7d2dc3876c5be03ca6b60d97e37e9bd335b1ce05a2680",
        "0xd1179d8889a1c7697d753528571b05d6d95e687ebfa12f03741f7f3d5909870b"
      ]
    },
    hardhat:{
      chainId:100,
      accounts: [
        {privateKey:"0xcb93f47f4ae6e2ee722517f3a2d3e7f55a5074f430c9860bcfe1d6d172492ed0",balance:"10000000000000000000000"},
        {privateKey:"0xf143b04240e065984bc0507eb1583234643d64c948e1e0ae2ed4abf7d7aed06a",balance:"10000000000000000000000"},
        {privateKey:"0x49b9dd4e00cb10e691abaa1de4047f9c9d98b72b9ce43e1e12959b22f56a0289",balance:"10000000000000000000000"},
        {privateKey:"0xa6392433fe30f2bf8564228240eddd41c7ad12ab5332438254054896790ceebe",balance:"10000000000000000000000"},
      ],
      blockGasLimit: 8000000
    },

    localhost: {
      url: "http://127.0.0.1:8545",
    },

    arbitrumOne: {
      url: `https://arb1.arbitrum.io/rpc`,
      chainId:42161,
      accounts: [
        "0xa6392433fe30f2bf8564228240eddd41c7ad12ab5332438254054896790ceebe"
      ]
    
    },

    // mumbai:{
    //   url: "https://polygon-mumbai.blockpi.network/v1/rpc/410ce73ca9c8eed378ea7f12ccc75189e04ddc77",
    //   accounts: [`${process.env.PK}`],
    //   gasPrice:2000000000
    // },

    // goerli:{
    //   url:"https://goerli.blockpi.network/v1/rpc/public",
    //   accounts: [`${process.env.PK}`],
    //   gasPrice:500
    // },

    // polygon:{
    //   url:"https://polygon.blockpi.network/v1/rpc/2f4a5449f8f37607cf884bad80c108d3fd7d88b3",
    //   // url:"https://polygon.blockpi.network/v1/rpc/public",
    //   // url:"https://polygon.llamarpc.com",
    //   accounts: [`${process.env.PK}`],
    //   gasPrice:180000000000
    // },

    // polygon_uat:{
    //   // url:"https://polygon.blockpi.network/v1/rpc/public",
    //   // url:"https://polygon.llamarpc.com",
    //   // url:"http://192.168.3.30:8545",
    //   // url:"HTTP://127.0.0.1:7545",
    //   url:"https://polygon.blockpi.network/v1/rpc/2f4a5449f8f37607cf884bad80c108d3fd7d88b3",
    //   accounts: [`${process.env.PK}`],
    //   gasPrice:80000000000
    // },

    // polygon_uat_dev:{
    //   // url:"https://polygon.blockpi.network/v1/rpc/public",
    //   // url:"https://polygon.llamarpc.com",
    //   url:"https://polygon.blockpi.network/v1/rpc/2f4a5449f8f37607cf884bad80c108d3fd7d88b3",
    //   accounts: [`${process.env.PK}`],
    //   gasPrice:110000000000
    // },  

    // ethereum:{
    //   // url:"https://ethereum.blockpi.network/v1/rpc/public",
    //   // url:"https://ethereum.blockpi.network/v1/rpc/08477cf97ef1a6e042db5304ee957d2598d739b5",
    //   url:"https://eth-mainnet.g.alchemy.com/v2/bCy-dNQogPRmiiArmblIlEn8ViU_ns7D",
    //   accounts: [`${process.env.PK}`],
    //   gasPrice:14000000000,
    //   timeout: 1000000
    // },

    // sepolia:{
    //   url:"https://ethereum-sepolia.blockpi.network/v1/rpc/public",
    //   accounts: [`${process.env.PK}`],
    //   gasPrice:100000000  
    // },
    
    // ethFork:{
    //   url:"http:/192.168.31.228:8645",
    //   accounts:[`${process.env.PK}`],
    //   gasPrice:45000000000,
    //   timeout: 1000000
    // }

  },
  etherscan:{

    apiKey: {
      arbitrumOne: "DHZDN4JKE82N3DVJREKNHRD4JPCCUN7E6N"
    }
    //bsc
    // apiKey: "I5ZF72517II2FRPQRRHMWGN7PHCFGD3NNF"
    //eth
    // apiKey: "R3CRF4YGIPI8MH6M37TTQHEH1B5SF4BI63"
    // polygon
    
    //base
    // apiKey: "92575c4a-2830-4a7c-a40f-d7c6ed460934",
    //arbitrum
    //apiKey: "65PSNHIK3HDV9K88DNZQAM9GN8ZVCT288B"
  }
};
