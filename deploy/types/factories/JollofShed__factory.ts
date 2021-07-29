/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { JollofShed } from "../JollofShed";

export class JollofShed__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_jollof: string, overrides?: Overrides): Promise<JollofShed> {
    return super.deploy(_jollof, overrides || {}) as Promise<JollofShed>;
  }
  getDeployTransaction(
    _jollof: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_jollof, overrides || {});
  }
  attach(address: string): JollofShed {
    return super.attach(address) as JollofShed;
  }
  connect(signer: Signer): JollofShed__factory {
    return super.connect(signer) as JollofShed__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JollofShed {
    return new Contract(address, _abi, signerOrProvider) as JollofShed;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_jollof",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "enter",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "jollof",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_share",
        type: "uint256",
      },
    ],
    name: "leave",
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
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051620011f5380380620011f58339818101604052602081101561003557600080fd5b5051604080518082018252600a815269129bdb1b1bd994da195960b21b6020828101918252835180850190945260078452663c2527a62627a360c91b908401528151919291610086916003916100d3565b50805161009a9060049060208401906100d3565b5050600580546001600160a01b0390931661010002610100600160a81b031960ff19909416601217939093169290921790915550610166565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061011457805160ff1916838001178555610141565b82800160010185558215610141579182015b82811115610141578251825591602001919060010190610126565b5061014d929150610151565b5090565b5b8082111561014d5760008155600101610152565b61107f80620001766000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063a59f3e0c11610066578063a59f3e0c146102bf578063a9059cbb146102dc578063dd62ed3e14610308578063ecac2a5314610336576100ea565b806370a082311461026557806395d89b411461028b578063a457c2d714610293576100ea565b806323b872dd116100c857806323b872dd146101c6578063313ce567146101fc578063395093511461021a57806367dfd4c914610246576100ea565b806306fdde03146100ef578063095ea7b31461016c57806318160ddd146101ac575b600080fd5b6100f761035a565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610131578181015183820152602001610119565b50505050905090810190601f16801561015e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101986004803603604081101561018257600080fd5b506001600160a01b0381351690602001356103f0565b604080519115158252519081900360200190f35b6101b461040e565b60408051918252519081900360200190f35b610198600480360360608110156101dc57600080fd5b506001600160a01b03813581169160208101359091169060400135610414565b61020461049b565b6040805160ff9092168252519081900360200190f35b6101986004803603604081101561023057600080fd5b506001600160a01b0381351690602001356104a4565b6102636004803603602081101561025c57600080fd5b50356104f2565b005b6101b46004803603602081101561027b57600080fd5b50356001600160a01b0316610637565b6100f7610652565b610198600480360360408110156102a957600080fd5b506001600160a01b0381351690602001356106b3565b610263600480360360208110156102d557600080fd5b503561071b565b610198600480360360408110156102f257600080fd5b506001600160a01b038135169060200135610840565b6101b46004803603604081101561031e57600080fd5b506001600160a01b0381358116916020013516610854565b61033e61087f565b604080516001600160a01b039092168252519081900360200190f35b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103e65780601f106103bb576101008083540402835291602001916103e6565b820191906000526020600020905b8154815290600101906020018083116103c957829003601f168201915b5050505050905090565b60006104046103fd610893565b8484610897565b5060015b92915050565b60025490565b6000610421848484610983565b6104918461042d610893565b61048c85604051806060016040528060288152602001610f93602891396001600160a01b038a1660009081526001602052604081209061046b610893565b6001600160a01b031681526020810191909152604001600020549190610ade565b610897565b5060019392505050565b60055460ff1690565b60006104046104b1610893565b8461048c85600160006104c2610893565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490610b75565b60006104fc61040e565b905060006105a28261059c600560019054906101000a90046001600160a01b03166001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561056957600080fd5b505afa15801561057d573d6000803e3d6000fd5b505050506040513d602081101561059357600080fd5b50518690610bd6565b90610c2f565b90506105ae3384610c96565b6005546040805163a9059cbb60e01b81523360048201526024810184905290516101009092046001600160a01b03169163a9059cbb916044808201926020929091908290030181600087803b15801561060657600080fd5b505af115801561061a573d6000803e3d6000fd5b505050506040513d602081101561063057600080fd5b5050505050565b6001600160a01b031660009081526020819052604090205490565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103e65780601f106103bb576101008083540402835291602001916103e6565b60006104046106c0610893565b8461048c8560405180606001604052806025815260200161102560259139600160006106ea610893565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190610ade565b600554604080516370a0823160e01b8152306004820152905160009261010090046001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561076b57600080fd5b505afa15801561077f573d6000803e3d6000fd5b505050506040513d602081101561079557600080fd5b5051905060006107a361040e565b90508015806107b0575081155b156107c4576107bf3384610d92565b6107e2565b60006107d48361059c8685610bd6565b90506107e03382610d92565b505b600554604080516323b872dd60e01b81523360048201523060248201526044810186905290516101009092046001600160a01b0316916323b872dd916064808201926020929091908290030181600087803b15801561060657600080fd5b600061040461084d610893565b8484610983565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60055461010090046001600160a01b031681565b3390565b6001600160a01b0383166108dc5760405162461bcd60e51b81526004018080602001828103825260248152602001806110016024913960400191505060405180910390fd5b6001600160a01b0382166109215760405162461bcd60e51b8152600401808060200182810382526022815260200180610f2a6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166109c85760405162461bcd60e51b8152600401808060200182810382526025815260200180610fdc6025913960400191505060405180910390fd5b6001600160a01b038216610a0d5760405162461bcd60e51b8152600401808060200182810382526023815260200180610ee56023913960400191505060405180910390fd5b610a18838383610e82565b610a5581604051806060016040528060268152602001610f4c602691396001600160a01b0386166000908152602081905260409020549190610ade565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610a849082610b75565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610b6d5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610b32578181015183820152602001610b1a565b50505050905090810190601f168015610b5f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610bcf576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600082610be557506000610408565b82820282848281610bf257fe5b0414610bcf5760405162461bcd60e51b8152600401808060200182810382526021815260200180610f726021913960400191505060405180910390fd5b6000808211610c85576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381610c8e57fe5b049392505050565b6001600160a01b038216610cdb5760405162461bcd60e51b8152600401808060200182810382526021815260200180610fbb6021913960400191505060405180910390fd5b610ce782600083610e82565b610d2481604051806060016040528060228152602001610f08602291396001600160a01b0385166000908152602081905260409020549190610ade565b6001600160a01b038316600090815260208190526040902055600254610d4a9082610e87565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6001600160a01b038216610ded576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610df960008383610e82565b600254610e069082610b75565b6002556001600160a01b038216600090815260208190526040902054610e2c9082610b75565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b600082821115610ede576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b5090039056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220106382a26fab591c35cf170aaef40a2838a3c52ffd8362fc2c3061567b1cac2364736f6c634300060c0033";
