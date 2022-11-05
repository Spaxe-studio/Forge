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

export default function mint() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
            <div className="px-4 pt-10 md:pt-24 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div>
                <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Mint
                </h1>
                <p className="mt-3 text-5xl text-gray-300 sm:mt-5  lg:text-4xl xl:text-4xl">
                  Random NFT Minter
                </p>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0 p-4 rounded-lg shadow-lg">
              <div className="bg-[#141414] sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden rounded-lg">
                <div className="">
                  <div className="">
                    <form
                      method="POST"
                      onSubmit={(e) => {}}
                      className="space-y-3"
                    >
                      <div>
                        <Image
                          src="https://images.unsplash.com/photo-1666730501852-189f6139d518?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                          alt="pre-mint nft"
                          width="1080px"
                          height="1350px"
                        />
                      </div>

                      <div className="px-4 py-6 space-y-6 sm:px-6">
                        <h4 className=" mb-4 font-medium text-white">
                          Mint Fee :{" "}
                          <span className="font-extrabold">0.3 ETH</span>
                        </h4>

                        <div className="flex flex-col sm:flex-row justify-center align-center gap-6">
                          <button className="hover:bg-[#DD2424]  bg-transparent flex w-full justify-center rounded-md border-[#DD2424] border-2 py-4 px-4 text-xl font-medium text-white shadow-sm focus:outline-none">
                            Mint
                          </button>
                          <button className=" bg-[#DD2424] flex w-full justify-center rounded-md border border-transparent py-4 px-4 text-xl font-medium text-white shadow-sm focus:outline-none">
                            Multi Mint
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
    </div>
  );
}
