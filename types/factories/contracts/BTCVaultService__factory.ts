/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { NonPayableOverrides } from "../../common";
import type {
  BTCVaultService,
  BTCVaultServiceInterface,
} from "../../contracts/BTCVaultService";
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
    inputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "generateRandoms",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "getOptionData",
    outputs: [
      {
        components: [
          {
            internalType: "enum BTCVaultService.CoinType",
            name: "coinType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "strikePrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stakingDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lockTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes20",
            name: "preImageHash",
            type: "bytes20",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "enum BTCVaultService.OptionStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct BTCVaultService.OptionData",
        name: "",
        type: "tuple",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum BTCVaultService.CoinType",
        name: "coinType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "strikePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stakingDuration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lockTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTimestamp",
        type: "uint256",
      },
    ],
    name: "setOptionData",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes20",
        name: "",
        type: "bytes20",
      },
    ],
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
  "0x600a60808181526101e06040529060a0610140803683375050815161002b92600092506020019061005a565b5034801561003857600080fd5b50600180546001600160c01b0319163363ffffffff60a01b19161790556100ba565b828054828255906000526020600020908101928215610095579160200282015b8281111561009557825182559160200191906001019061007a565b506100a19291506100a5565b5090565b5b808211156100a157600081556001016100a6565b610950806100c96000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063c13be6ea11610050578063c13be6ea146100d9578063e2213a4b146100fa578063f44e22e81461011a57600080fd5b8063086ecbfa1461006c57806342389dcc146100a3575b600080fd5b61008061007a36600461065f565b50600090565b6040516bffffffffffffffffffffffff1990911681526020015b60405180910390f35b6100b66100b1366004610710565b61012f565b604080519283526bffffffffffffffffffffffff1990911660208301520161009a565b6100ec6100e736600461065f565b61028d565b60405190815260200161009a565b61010d610108366004610758565b6102e5565b60405161009a919061079b565b61012d610128366004610758565b610425565b005b60018054600160a01b900463ffffffff16600090815260026020526040812080549192839289929160ff199091169083600681111561017057610170610771565b02179055506001805463ffffffff600160a01b918290048116600090815260026020819052604080832086018c90558554859004841683528083209091018a90558454849004831682528082206003018990558454849004831682528082206004018890558454849004831680835281832060050155845484900483168252808220600790810180547fffffffffffffffffffffffff0000000000000000000000000000000000000000163317905585548590048416835291200180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690558254919091041690601461026483610863565b91906101000a81548163ffffffff021916908363ffffffff160217905550509550959350505050565b600060028260405161029f91906108aa565b602060405180830381855afa1580156102bc573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906102df91906108c6565b92915050565b6103326040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290529061010082015290565b60008281526002602052604090819020815161012081019092528054829060ff16600681111561036457610364610771565b600681111561037557610375610771565b8152600182810154602083015260028301546040830152600383015460608084019190915260048401546080840152600584015460a08401526006840154901b6bffffffffffffffffffffffff191660c0830152600783015473ffffffffffffffffffffffffffffffffffffffff811660e084015261010090920191600160a01b900460ff169081111561040b5761040b610771565b600181111561041c5761041c610771565b90525092915050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146104905760405162461bcd60e51b815260206004820152601460248201527f6f776e6572206973206e6f7420636f7272656374000000000000000000000000604482015260640160405180910390fd5b60003342415a600154604051606095861b6bffffffffffffffffffffffff19908116602083015260348201959095529290941b90921660548201526068810191909152600160a01b90910460e01b7fffffffff00000000000000000000000000000000000000000000000000000000166088820152608c016040516020818303038152906040528051906020012060001c905060005b828110156105b9574382116105445761053f82436108df565b61054e565b61054e43836108df565b91508160008281548110610564576105646108f2565b90600052602060002001819055506105b16040518060400160405280601581526020017f78786c20736f6c2072616e646f6d732069732025640000000000000000000000815250836105be565b600101610526565b505050565b61061882826040516024016105d4929190610908565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16632d839cb360e21b17905261061c565b5050565b61062581610628565b50565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561067157600080fd5b813567ffffffffffffffff8082111561068957600080fd5b818401915084601f83011261069d57600080fd5b8135818111156106af576106af610649565b604051601f8201601f19908116603f011681019083821181831017156106d7576106d7610649565b816040528281528760208487010111156106f057600080fd5b826020860160208301376000928101602001929092525095945050505050565b600080600080600060a0868803121561072857600080fd5b85356007811061073757600080fd5b97602087013597506040870135966060810135965060800135945092505050565b60006020828403121561076a57600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b6002811061079757610797610771565b9052565b8151610120820190600781106107b3576107b3610771565b808352506020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015161080960c08401826bffffffffffffffffffffffff19169052565b5060e083015161083160e084018273ffffffffffffffffffffffffffffffffffffffff169052565b506101008084015161084582850182610787565b505092915050565b634e487b7160e01b600052601160045260246000fd5b600063ffffffff80831681810361087c5761087c61084d565b6001019392505050565b60005b838110156108a1578181015183820152602001610889565b50506000910152565b600082516108bc818460208701610886565b9190910192915050565b6000602082840312156108d857600080fd5b5051919050565b818103818111156102df576102df61084d565b634e487b7160e01b600052603260045260246000fd5b6040815260008351806040840152610927816060850160208801610886565b602083019390935250601f91909101601f19160160600191905056fea164736f6c6343000816000a";

type BTCVaultServiceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BTCVaultServiceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BTCVaultService__factory extends ContractFactory {
  constructor(...args: BTCVaultServiceConstructorParams) {
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
      BTCVaultService & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BTCVaultService__factory {
    return super.connect(runner) as BTCVaultService__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BTCVaultServiceInterface {
    return new Interface(_abi) as BTCVaultServiceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BTCVaultService {
    return new Contract(address, _abi, runner) as unknown as BTCVaultService;
  }
}