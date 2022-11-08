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

import Image from "next/image";
import ForgeNFT from "../../assets/img/forgeNft.jpg";

export default function nftStake() {
  return (
    <div className="overflow-hidden">
      <div className="pt-6 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
            <div className="px-4 pt-10 md:pt-24 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div>
                <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  {0}
                </h1>
                <p className="mt-3 text-5xl text-gray-300 sm:mt-5  lg:text-4xl xl:text-4xl">
                  Total NFTs Staked
                </p>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0 p-4 rounded-lg shadow-lg">
              <div className="bg-[#141414] sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden rounded-lg">
                <div className="">
                  <form
                    method="POST"
                    onSubmit={(e) => {}}
                    className="space-y-3"
                  >
                    <Image
                      src={ForgeNFT}
                      alt="pre-mint nft"
                      width="1080px"
                      height="1080px"
                    />

                    <div className="px-4 py-6 space-y-6 sm:px-6">
                      <input
                        type="number"
                        name="stake-amount"
                        id="stake-amount"
                        autoComplete="amount"
                        placeholder="NFT stake amount"
                        required
                        className="appearance-none block w-full p-4 bg-transparent text-white rounded-md border  sm:text-xl"
                      />

                      <div className="flex flex-col sm:flex-row justify-center align-center gap-6">
                        <button className=" bg-[#DD2424] flex w-full justify-center rounded-md border border-transparent py-4 px-4 text-xl font-medium text-white shadow-sm focus:outline-none">
                          Stake NFT(s)
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
