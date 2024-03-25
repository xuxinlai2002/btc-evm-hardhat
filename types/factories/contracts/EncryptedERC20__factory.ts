/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { NonPayableOverrides } from "../../common";
import type {
  EncryptedERC20,
  EncryptedERC20Interface,
} from "../../contracts/EncryptedERC20";
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
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "publicKey",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "encryptedAmount",
        type: "bytes",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "publicKey",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "publicKey",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "getTotalSupply",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encryptedAmount",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "encryptedAmount",
        type: "bytes",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "euint32",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "euint32",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "encryptedAmount",
        type: "bytes",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101606040523480156200001257600080fd5b50604080518082018252601381527f417574686f72697a6174696f6e20746f6b656e00000000000000000000000000602080830191909152825180840190935260018352603160f81b908301529081816200006f82600062000131565b610120526200008081600162000131565b61014052815160208084019190912060e052815190820120610100524660a0526200010e60e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c0525050600680546001600160a01b031916331790556200039f565b6000602083511015620001515762000149836200016a565b905062000164565b816200015e84826200025d565b5060ff90505b92915050565b600080829050601f81511115620001a1578260405163305a27a960e01b815260040162000198919062000329565b60405180910390fd5b8051620001ae826200037a565b179392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620001e157607f821691505b6020821081036200020257634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111562000258576000816000526020600020601f850160051c81016020861015620002335750805b601f850160051c820191505b8181101562000254578281556001016200023f565b5050505b505050565b81516001600160401b03811115620002795762000279620001b6565b62000291816200028a8454620001cc565b8462000208565b602080601f831160018114620002c95760008415620002b05750858301515b600019600386901b1c1916600185901b17855562000254565b600085815260208120601f198616915b82811015620002fa57888601518255948401946001909101908401620002d9565b5085821015620003195787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006020808352835180602085015260005b8181101562000359578581018301518582016040015282016200033b565b506000604082860101526040601f19601f8301168501019250505092915050565b80516020808301519190811015620002025760001960209190910360031b1b16919050565b60805160a05160c05160e05161010051610120516101405161176d620003fa60003960006105a60152600061057c01526000610cb601526000610c8e01526000610be901526000610c1301526000610c3d015261176d6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80637ba0e2e71161008c57806395d89b411161006657806395d89b41146101fd578063a9059cbb14610220578063b6ce514b14610233578063ce606ee01461024657600080fd5b80637ba0e2e7146101bc57806384b0196e146101cf5780638ff9e2f5146101ea57600080fd5b806329723511116100c85780632972351114610169578063313ce5671461017c57806349972663146101965780637b7c65c9146101a957600080fd5b8063014647f4146100ef57806306fdde031461010457806323b872dd14610156575b600080fd5b6101026100fd366004611338565b610271565b005b6101406040518060400160405280601081526020017f436f6e666964656e7469616c205553440000000000000000000000000000000081525081565b60405161014d91906113db565b60405180910390f35b6101026101643660046113ee565b6102ec565b610102610177366004611338565b610303565b610184601281565b60405160ff909116815260200161014d565b6101026101a436600461142a565b61034b565b6101406101b736600461148b565b61038f565b6101026101ca3660046114be565b6104be565b6101d761056e565b60405161014d9796959493929190611500565b6101406101f836600461148b565b6105f6565b6101406040518060400160405280600481526020016310d554d160e21b81525081565b61010261022e366004611599565b61070a565b6101406102413660046115c3565b610719565b600654610259906001600160a01b031681565b6040516001600160a01b03909116815260200161014d565b60003390506102e681856102ba86868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061083492505050565b6001600160a01b0392831660009081526005602090815260408083209490951682529290925291902055565b50505050565b336102f8848284610847565b6102e6848484610876565b6103468361022e84848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061083492505050565b505050565b6102e6848461016485858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061083492505050565b60608383838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250604080517f051d137ae0e1fae6e3b6559fed4442b35a85a9a39789838ad5c9ea05e7da2dce602082015290810187905290935061041d925060600190505b60405160208183030381529060405280519060200120610911565b9050600061042b828461093e565b90506001600160a01b03811633146104a45760405162461bcd60e51b815260206004820152603160248201527f454950373132207369676e657220616e64207472616e73616374696f6e2073696044820152700cedccae440c8de40dcdee840dac2e8c6d607b1b60648201526084015b60405180910390fd5b6104b2600254896000610962565b98975050505050505050565b6006546001600160a01b031633146104d557600080fd5b600061051683838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061083492505050565b6006546001600160a01b031660009081526004602052604090205490915061053e908261099a565b6006546001600160a01b0316600090815260046020526040902055600254610566908261099a565b600255505050565b6000606080828080836105a17f0000000000000000000000000000000000000000000000000000000000000000836109a6565b6105cc7f000000000000000000000000000000000000000000000000000000000000000060016109a6565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b60608383838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250604080517f051d137ae0e1fae6e3b6559fed4442b35a85a9a39789838ad5c9ea05e7da2dce602082015290810187905290935061066d92506060019050610402565b9050600061067b828461093e565b90506001600160a01b03811633146106ef5760405162461bcd60e51b815260206004820152603160248201527f454950373132207369676e657220616e64207472616e73616374696f6e2073696044820152700cedccae440c8de40dcdee840dac2e8c6d607b1b606482015260840161049b565b336000908152600460205260408120546104b2918a90610962565b610715338383610876565b5050565b60608383838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250604080517f051d137ae0e1fae6e3b6559fed4442b35a85a9a39789838ad5c9ea05e7da2dce602082015290810187905290935061079092506060019050610402565b9050600061079e828461093e565b90506001600160a01b03811633146108125760405162461bcd60e51b815260206004820152603160248201527f454950373132207369676e657220616e64207472616e73616374696f6e2073696044820152700cedccae440c8de40dcdee840dac2e8c6d607b1b606482015260840161049b565b33610826610820828c610a51565b8a610ab4565b9a9950505050505050505050565b6000610841826002610ac0565b92915050565b60006108538484610a51565b90506108676108628383610b56565b610b92565b6102e684846102ba8486610b9e565b6001600160a01b03831660009081526004602052604090205461089e90610862908390610b56565b6001600160a01b0382166000908152600460205260409020546108c1908261099a565b6001600160a01b0380841660009081526004602052604080822093909355908516815220546108f09082610bd0565b6001600160a01b039093166000908152600460205260409020929092555050565b600061084161091e610bdc565b8360405161190160f01b8152600281019290925260228201526042902090565b600080600061094d8585610d0c565b9150915061095a81610d51565b509392505050565b6060831561097b576109748484610e9b565b9050610993565b61097461098d8363ffffffff16610f0a565b84610e9b565b9392505050565b60006109938383610f17565b606060ff83146109c0576109b983610f49565b9050610841565b8180546109cc9061161b565b80601f01602080910402602001604051908101604052809291908181526020018280546109f89061161b565b8015610a455780601f10610a1a57610100808354040283529160200191610a45565b820191906000526020600020905b815481529060010190602001808311610a2857829003601f168201915b50505050509050610841565b6001600160a01b03828116600090815260056020908152604080832093851683529290529081205415610aaa57506001600160a01b03808316600090815260056020908152604080832093851683529290522054610841565b6109b96000610f0a565b60606109938383610e9b565b600080838360f81b604051602001610ad9929190611655565b60408051601f1981840301815290829052630964a5d960e31b82529150605d90634b252ec890610b0d9084906004016113db565b602060405180830381865afa158015610b2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4e9190611684565b949350505050565b600082610b6a57610b676000610f0a565b92505b81610b7c57610b796000610f0a565b91505b610993610b8b84846000610f88565b6000611022565b610b9b8161109b565b50565b600082610bb257610baf6000610f0a565b92505b81610bc457610bc16000610f0a565b91505b6109938383600061110a565b60006109938383610b9e565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015610c3557507f000000000000000000000000000000000000000000000000000000000000000046145b15610c5f57507f000000000000000000000000000000000000000000000000000000000000000090565b610d07604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b905090565b6000808251604103610d425760208301516040840151606085015160001a610d368782858561115e565b94509450505050610d4a565b506000905060025b9250929050565b6000816004811115610d6557610d6561169d565b03610d6d5750565b6001816004811115610d8157610d8161169d565b03610dce5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161049b565b6002816004811115610de257610de261169d565b03610e2f5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161049b565b6003816004811115610e4357610e4361169d565b03610b9b5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161049b565b60405163d6ad57cd60e01b81526004810183905260248101829052606090605d9063d6ad57cd90604401600060405180830381865afa158015610ee2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261099391908101906116b3565b6000610841826002611222565b600082610f2b57610f286000610f0a565b92505b81610f3d57610f3a6000610f0a565b91505b6109938383600061125e565b60606000610f56836112b2565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b6000808215610f9c5750600160f81b610fa0565b5060005b6040516334a6d7b960e11b815260048101869052602481018590526001600160f81b031982166044820152605d9063694daf72906064015b602060405180830381865afa158015610ff5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110199190611684565b95945050505050565b60405163025f346960e51b8152600481018390526001600160f81b031960f883901b166024820152600090605d90634be68d20906044015b602060405180830381865afa158015611077573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109939190611684565b6000816040516024016110b091815260200190565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16634ee071a160e01b1781528151919250605d9060009081908490845afa6102e657600080fd5b600080821561111e5750600160f81b611122565b5060005b604051638c14cc2160e01b815260048101869052602481018590526001600160f81b031982166044820152605d90638c14cc2190606401610fd8565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156111955750600090506003611219565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156111e9573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661121257600060019250925050611219565b9150600090505b94509492505050565b604051631ce2e8d760e31b8152600481018390526001600160f81b031960f883901b166024820152600090605d9063e71746b89060440161105a565b60008082156112725750600160f81b611276565b5060005b60405163f953e42760e01b815260048101869052602481018590526001600160f81b031982166044820152605d9063f953e42790606401610fd8565b600060ff8216601f81111561084157604051632cd44ac360e21b815260040160405180910390fd5b80356001600160a01b03811681146112f157600080fd5b919050565b60008083601f84011261130857600080fd5b50813567ffffffffffffffff81111561132057600080fd5b602083019150836020828501011115610d4a57600080fd5b60008060006040848603121561134d57600080fd5b611356846112da565b9250602084013567ffffffffffffffff81111561137257600080fd5b61137e868287016112f6565b9497909650939450505050565b60005b838110156113a657818101518382015260200161138e565b50506000910152565b600081518084526113c781602086016020860161138b565b601f01601f19169290920160200192915050565b60208152600061099360208301846113af565b60008060006060848603121561140357600080fd5b61140c846112da565b925061141a602085016112da565b9150604084013590509250925092565b6000806000806060858703121561144057600080fd5b611449856112da565b9350611457602086016112da565b9250604085013567ffffffffffffffff81111561147357600080fd5b61147f878288016112f6565b95989497509550505050565b6000806000604084860312156114a057600080fd5b83359250602084013567ffffffffffffffff81111561137257600080fd5b600080602083850312156114d157600080fd5b823567ffffffffffffffff8111156114e857600080fd5b6114f4858286016112f6565b90969095509350505050565b60ff60f81b881681526000602060e0602084015261152160e084018a6113af565b8381036040850152611533818a6113af565b606085018990526001600160a01b038816608086015260a0850187905284810360c08601528551808252602080880193509091019060005b818110156115875783518352928401929184019160010161156b565b50909c9b505050505050505050505050565b600080604083850312156115ac57600080fd5b6115b5836112da565b946020939093013593505050565b600080600080606085870312156115d957600080fd5b6115e2856112da565b935060208501359250604085013567ffffffffffffffff81111561147357600080fd5b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061162f57607f821691505b60208210810361164f57634e487b7160e01b600052602260045260246000fd5b50919050565b6000835161166781846020880161138b565b6001600160f81b0319939093169190920190815260010192915050565b60006020828403121561169657600080fd5b5051919050565b634e487b7160e01b600052602160045260246000fd5b6000602082840312156116c557600080fd5b815167ffffffffffffffff808211156116dd57600080fd5b818401915084601f8301126116f157600080fd5b81518181111561170357611703611605565b604051601f8201601f19908116603f0116810190838211818310171561172b5761172b611605565b8160405282815287602084870101111561174457600080fd5b61175583602083016020880161138b565b97965050505050505056fea164736f6c6343000816000a";

type EncryptedERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EncryptedERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EncryptedERC20__factory extends ContractFactory {
  constructor(...args: EncryptedERC20ConstructorParams) {
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
      EncryptedERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): EncryptedERC20__factory {
    return super.connect(runner) as EncryptedERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EncryptedERC20Interface {
    return new Interface(_abi) as EncryptedERC20Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): EncryptedERC20 {
    return new Contract(address, _abi, runner) as unknown as EncryptedERC20;
  }
}