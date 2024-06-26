/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { NonPayableOverrides } from "../../common";
import type {
  BTCVaultServiceEn,
  BTCVaultServiceEnInterface,
} from "../../contracts/BTCVaultServiceEn";
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getDePreImage",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEnPreImage",
    outputs: [
      {
        internalType: "euint32",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "ripemd160Test",
    outputs: [
      {
        internalType: "bytes20",
        name: "",
        type: "bytes20",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_rawData",
        type: "bytes",
      },
    ],
    name: "setPreImage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "sha256Test",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600180546001600160a01b03191633179055610513806100326000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80632e7bafa6116100505780632e7bafa6146100b45780639b5af2f4146100d1578063c13be6ea146100e657600080fd5b8063086ecbfa1461006c5780631d27f4b8146100a2575b600080fd5b61007f61007a366004610310565b6100f9565b6040516bffffffffffffffffffffffff1990911681526020015b60405180910390f35b6000545b604051908152602001610099565b6100bc610138565b60405163ffffffff9091168152602001610099565b6100e46100df3660046103c1565b61014a565b005b6100a66100f4366004610310565b610190565b600060038260405161010b9190610457565b602060405180830381855afa158015610128573d6000803e3d6000fd5b50506040515160601b9392505050565b60006101456000546101e8565b905090565b61018982828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506101f392505050565b6000555050565b60006002826040516101a29190610457565b602060405180830381855afa1580156101bf573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906101e29190610473565b92915050565b60006101e282610200565b60006101e2826002610264565b6040516301693b9160e61b815260048101829052600090605d90635a4ee44090602401602060405180830381865afa158015610240573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e29190610473565b600080838360f81b60405160200161027d92919061048c565b60408051601f1981840301815290829052630964a5d960e31b82529150605d90634b252ec8906102b19084906004016104d3565b602060405180830381865afa1580156102ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f29190610473565b949350505050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561032257600080fd5b813567ffffffffffffffff8082111561033a57600080fd5b818401915084601f83011261034e57600080fd5b813581811115610360576103606102fa565b604051601f8201601f19908116603f01168101908382118183101715610388576103886102fa565b816040528281528760208487010111156103a157600080fd5b826020860160208301376000928101602001929092525095945050505050565b600080602083850312156103d457600080fd5b823567ffffffffffffffff808211156103ec57600080fd5b818501915085601f83011261040057600080fd5b81358181111561040f57600080fd5b86602082850101111561042157600080fd5b60209290920196919550909350505050565b60005b8381101561044e578181015183820152602001610436565b50506000910152565b60008251610469818460208701610433565b9190910192915050565b60006020828403121561048557600080fd5b5051919050565b6000835161049e818460208801610433565b7fff00000000000000000000000000000000000000000000000000000000000000939093169190920190815260010192915050565b60208152600082518060208401526104f2816040850160208701610433565b601f01601f1916919091016040019291505056fea164736f6c6343000816000a";

type BTCVaultServiceEnConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BTCVaultServiceEnConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BTCVaultServiceEn__factory extends ContractFactory {
  constructor(...args: BTCVaultServiceEnConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      BTCVaultServiceEn & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BTCVaultServiceEn__factory {
    return super.connect(runner) as BTCVaultServiceEn__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BTCVaultServiceEnInterface {
    return new Interface(_abi) as BTCVaultServiceEnInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BTCVaultServiceEn {
    return new Contract(address, _abi, runner) as unknown as BTCVaultServiceEn;
  }
}
