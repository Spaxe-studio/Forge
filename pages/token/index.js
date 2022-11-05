/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState, useEffect, useRef } from "react";
import { useNotification } from "web3uikit";
import { useMoralis, useWeb3Contract } from "react-moralis";
const {ethers} = require("ethers")

export default function TokenGenerator() {
  const dispatch = useNotification();
  const { isWeb3Enabled, account, isWeb3EnableLoading } = useMoralis();
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState("0");
  const [devWallet, setDevWallet] = useState("");
  const [buyBurn, setBuyBurn] = useState('0');
  const [buyDev, setBuyDev] = useState('0');
  const [buyLiquidity, setBuyLiquidity] = useState("0");
  const [sellBurn, setSellBurn] = useState("0");
  const [sellDev, setSellDev] = useState("0");
  const [sellLiquidity, setSellLiquidity] = useState("0");
  const [createFee, setCreateFee] = useState(ethers.utils.parseEther("0.15"));
  const contractAddress = "0xb50da3aa141AE11A506D20259564c3bba281c0ee";
  const ABI =[
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_totalSupply",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "devWallet",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "buyDevFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "buyLiquidityFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "buyBurnFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "sellDevFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "sellLiquidityFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "sellBurnFee",
          "type": "uint256"
        }
      ],
      "name": "createNewToken",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "creationFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
  ]

  // string memory _name, string memory _symbol, uint256 _totalSupply,
  //   address devWallet,
  //    uint256 buyDevFee, uint256 buyLiquidityFee, uint256 buyBurnFee
  //    , uint256 sellDevFee, uint256 sellLiquidityFee, uint256 sellBurnFee)

  const { runContractFunction: createNewToken } = useWeb3Contract({
    abi: ABI,
    contractAddress: contractAddress,
    functionName: "createNewToken",
    params: {
      _name : name, _symbol : symbol, _totalSupply : ethers.utils.parseEther(supply),
       devWallet : devWallet,
       buyDevFee: buyDev,
       buyLiquidityFee : buyLiquidity,
       buyBurnFee : buyBurn,
       sellDevFee: sellDev,
       sellLiquidityFee : sellLiquidity,
       sellBurnFee : sellBurn,
      },
      msgValue : createFee
  });

  const { runContractFunction: getFee } = useWeb3Contract({
    abi: ABI,
    contractAddress: contractAddress,
    functionName: "creationFee",
    params: {
      },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    createNewToken({
      onError: (error) => console.log(error),
      onSuccess: handleCreateSuccess,
    });
  };

  const handleCreateSuccess = async (tx) => {
    await tx.wait(1);
    dispatch({
      type: "success",
      message: `Created new token successfuly!`,
      title: "Creating Token",
      position: "topR",
    });
  };

  const updateUI = () => {
    getFee().then((r) => {
      setCreateFee(r)
      console.log(`Fee is ${r.toString()}`)
    });
  };

  useEffect(() => {
    if (isWeb3Enabled) {
      updateUI();
    }
  }, [isWeb3Enabled, account]);

  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-6">
      {/* FORM */}
      <form action="/" method="POST" onSubmit={onSubmit}>
        {/* TOKEN */}
        <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-xl  md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-6 text-white">
                  Token
                </h3>
                <p className="mt-2 text-base font-medium  text-white ">
                  This information will be used to identify your token publily.
                </p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-[#141414] px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3">
                      <label
                        htmlFor="name"
                        className="block mb-4 text-base justify-between text-white"
                      >
                        Name
                      </label>
                      <div className="mt-1 rounded-md shadow-sm">
                        <input
                          type="text"
                          name="name"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          id="name"
                          autoComplete="name"
                          placeholder="TOKEN NAME [eg: ETHEREUM, BITCOIN]"
                          required
                          className="appearance-none block w-full p-4 bg-transparent text-white rounded-md border sm:text-xl"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="symbol"
                      className="block mb-4 text-base justify-between text-white"
                    >
                      Symbol
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="symbol"
                        onChange={(e) => {
                          setSymbol(e.target.value);
                        }}
                        id="symbol"
                        autoComplete="symbol"
                        placeholder="TOKEN SYMBOL [eg: ETH, BTC]"
                        required
                        className="appearance-none block w-full p-4 bg-transparent text-white rounded-md border sm:text-xl"
                      />
                    </div>

                  </div>

                  <div>
                    <label
                      htmlFor="supply"
                      className="block mb-4 text-base justify-between text-white"
                    >
                      Supply
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        type="number"
                        name="supply"
                        onChange={(e) => {
                          setSupply(e.target.value);
                        }}
                        id="supply"
                        autoComplete="supply"
                        placeholder="ENTER SUPPLY AMOUNT"
                        required
                        className="appearance-none block w-full p-4 bg-transparent text-white rounded-md border sm:text-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="devWallet"
                      className="block mb-4 text-base justify-between text-white"
                    >
                      DevWallet
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="devWallet"
                        onChange={(e) => {
                          setDevWallet(e.target.value);
                        }}
                        id="devWallet"
                        autoComplete="devWallet"
                        placeholder="ENTER DEV WALLET ADDRESS"
                        required
                        className="appearance-none block w-full p-4 bg-transparent text-white rounded-md border sm:text-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-50" />
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-xl  md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-6 text-white">
                  Buy Taxes
                </h3>
                <p className="mt-2 text-base font-medium  text-white ">
                  provide buy tax rates accross in range of 0 to 10%
                </p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-[#141414] px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="buy_burn"
                        className="block mb-4 text-base justify-between text-white"
                      >
                        Burn
                      </label>
                      <div className="mt-1 flex rounded-lg border shadow-sm">
                        <input
                          type="number"
                          name="buy_burn"
                          onChange={(e) => {
                            setBuyBurn(e.target.value);
                          }}
                          id="buy_burn"
                          min={0}
                          max={10}
                          placeholder="0 to 10%"
                          required
                          className="appearance-none block w-full p-4 border-0 bg-transparent text-white sm:text-xl"
                        />
                        <span className="inline-flex items-center bg-transparent px-3 sm:text-xl text-white">
                          %
                        </span>
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="buy_dev"
                        className="block mb-4 text-base justify-between text-white"
                      >
                        Dev
                      </label>
                      <div className="mt-1 flex rounded-lg border shadow-sm">
                        <input
                          type="number"
                          name="buy_dev"
                          onChange={(e) => {
                            setBuyDev(e.target.value);
                          }}
                          id="buy_dev"
                          min={0}
                          max={10}
                          placeholder="0 to 10%"
                          required
                          className="appearance-none block w-full p-4 border-0 bg-transparent text-white sm:text-xl"
                        />
                        <span className="inline-flex items-center bg-transparent px-3 sm:text-xl text-white">
                          %
                        </span>
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="buy_liquidity"
                        className="block mb-4 text-base justify-between text-white"
                      >
                        Liquidity
                      </label>
                      <div className="mt-1 flex rounded-lg border shadow-sm">
                        <input
                          type="number"
                          name="buy"
                          onChange={(e) => {
                            setBuyLiquidity(e.target.value);
                          }}
                          id="buy_liquidity"
                          min={0}
                          max={10}
                          placeholder=" 0 to 10%"
                          required
                          className="appearance-none block w-full p-4 border-0 bg-transparent text-white sm:text-xl"
                        />
                        <span className="inline-flex items-center bg-transparent px-3 sm:text-xl text-white">
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-50" />
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-xl  md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-6 text-white">
                  Sell Taxes
                </h3>
                <p className="mt-2 text-base font-medium  text-white ">
                  provide sell tax rates accross in range of 0 to 10%
                </p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-[#141414] px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="sell_burn"
                        className="block mb-4 text-base justify-between text-white"
                      >
                        Burn
                      </label>
                      <div className="mt-1 flex rounded-lg border shadow-sm">
                        <input
                          type="number"
                          name="sell_burn"
                          onChange={(e) => {
                            setSellBurn(e.target.value);
                          }}
                          id="sell_burn"
                          min={0}
                          max={10}
                          placeholder="0 to 10%"
                          required
                          className="appearance-none block w-full p-4 border-0 bg-transparent text-white sm:text-xl"
                        />
                        <span className="inline-flex items-center bg-transparent px-3 sm:text-xl text-white">
                          %
                        </span>
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="sell_dev"
                        className="block mb-4 text-base justify-between text-white"
                      >
                        Dev
                      </label>
                      <div className="mt-1 flex rounded-lg border shadow-sm">
                        <input
                          type="number"
                          name="sell_dev"
                          onChange={(e) => {
                            setSellDev(e.target.value);
                          }}
                          id="sell_dev"
                          min={0}
                          max={10}
                          placeholder="0 to 10%"
                          required
                          className="appearance-none block w-full p-4 border-0 bg-transparent text-white sm:text-xl"
                        />
                        <span className="inline-flex items-center bg-transparent px-3 sm:text-xl text-white">
                          %
                        </span>
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="sell_liquidity"
                        className="block mb-4 text-base justify-between text-white"
                      >
                        Liquidity
                      </label>
                      <div className="mt-1 flex rounded-lg border shadow-sm">
                        <input
                          type="number"
                          name="sell_liquidity"
                          onChange={(e) => {
                            setSellLiquidity(e.target.value);
                          }}
                          id="sell_liquidity"
                          min={0}
                          max={10}
                          placeholder=" 0 to 10%"
                          required
                          className="appearance-none block w-full p-4 border-0 bg-transparent text-white sm:text-xl"
                        />
                        <span className="inline-flex items-center bg-transparent px-3 sm:text-xl text-white">
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <button
                      type="submit"
                      className=" bg-[#DD2424] flex w-full justify-center rounded-md border border-transparent py-4 px-4 text-xl font-medium text-white shadow-sm focus:outline-none"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
