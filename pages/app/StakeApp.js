export default function StakeApp() {
  return (
    <div className="pt-0 lg:pt-12 flex flex-col lg:flex-row items-center justify-center bg-[#020A22]">
      <main className="lg:pl-72  grow border-r border-gray-500/50">
        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-4">
          <div className="  w-full sm:overflow-hidden rounded-lg">
            <div className="px-4 py-8 sm:px-10">
              <div className="mt-6">
                <form method="POST" className="space-y-6 w-full">
                  <div className="border rounded-lg border-gray-500/50 bg-[#0B142E] ">
                    <label htmlFor="amount" className="sr-only">
                      Stake Amount
                    </label>
                    <span className="flex mb-4 justify-between text-white/70 font-bold  px-6 pt-4">
                      <h4>STAKE AMOUNT</h4>
                      <p className="text-gray-400">Available: 1000 DFL</p>
                    </span>
                    <input
                      type="number"
                      name="stake-amount"
                      id="stake-amount"
                      autoComplete="amount"
                      placeholder="stake amount"
                      required
                      className="appearance-none block w-full px-4 py-4 bg-transparent rounded-md tacking-wider font-bold text-white  sm:text-3xl"
                      onChange={(e) => console.log(e.target.value)}
                    />
                  </div>

                  <div className="border rounded-lg border-gray-500/50 bg-[#0B142E] ">
                    <label htmlFor="mobile-or-email" className="sr-only">
                      Pool Type
                    </label>
                    <span className="flex mb-4 justify-between text-white/70 font-bold  px-6 pt-4">
                      <h4>POOL TYPE</h4>
                    </span>
                    <select
                      onChange={(e) => console.log(e.target.value)}
                      id="pool-type"
                      name="pool-type"
                      className="appearance-none block w-full px-4 py-4 bg-transparent rounded-md tacking-wider font-bold text-white  sm:text-3xl"
                    >
                      <option className=" text-black text-2xl px-4 py-4 font-bold ">
                        Bronze
                      </option>
                      <option className=" text-black text-2xl px-4 py-4 font-bold ">
                        Gold
                      </option>
                      <option className=" text-black text-2xl px-4 py-4 font-bold ">
                        Platinum
                      </option>
                      <option className=" text-black text-2xl px-4 py-4 font-bold ">
                        Diamond
                      </option>
                    </select>
                  </div>

                  <div className="border rounded-lg border-gray-500/50 bg-[#0B142E] ">
                    <label htmlFor="mobile-or-email" className="sr-only">
                      ACTION
                    </label>
                    <span className="flex mb-4 justify-between text-white/70 font-bold  px-6 pt-4">
                      <h4>ACTION</h4>
                    </span>
                    <select
                      onChange={(e) => console.log(e.target.value)}
                      id="action-type"
                      name="action-type"
                      className="appearance-none block w-full px-4 py-4 bg-transparent rounded-md tacking-wider font-bold text-white  sm:text-3xl"
                    >
                      <option className=" text-black text-2xl px-4 py-4 font-bold ">
                        Stake
                      </option>
                      <option className=" text-black text-2xl px-4 py-4 font-bold ">
                        Unstake
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="range" className="sr-only">
                      Stake
                    </label>
                    <span className="flex mb-4 justify-between items-center text-white">
                      <h4>Stake</h4>
                      <span className="px-6 py-2 w-26 justify-self-end text-center bg-black  font-bold rounded-full text-white">
                        1000
                      </span>
                    </span>
                    <input
                      type="range"
                      name="range"
                      id="range"
                      min="0"
                      max="100"
                      required
                      className="range-slider block w-full bg-transparent rounded-lg cursor-pointer h-2 shadow-sm sm:text-xl"
                      value={10}
                    />
                    <span className="flex mt-4 justify-between text-white">
                      <h4>0%</h4>
                      <h4>100%</h4>
                    </span>
                  </div>

                  <div>
                    <button className=" bg-gradient-to-bl from-emerald-500 to-purple-500 flex w-full justify-center rounded-md border border-transparent py-4 px-4 text-xl font-medium text-white shadow-sm focus:outline-none">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <aside className=" w-96 overflow-y-auto  px-4 py-4 sm:px-6 lg:px-8 xl:block">
        <div className="border-t border-gray-900 py-4">
          <span className="flex mb-4 justify-between text-white">
            <h4>APY:</h4>
            <p className="text-gray-400">10%</p>
          </span>
          <span className="flex mb-4 justify-between text-white">
            <h4>Lock Time:</h4>
            <p className="text-gray-400">10</p>
          </span>
          <span className="flex mb-4 justify-between text-white">
            <h4>Your Staked:</h4>
            <p className="text-gray-400">100 DFL</p>
          </span>
          <span className="flex mb-4 justify-between text-white">
            <h4>Total Earned</h4>
            <p className="text-gray-400">100 DFL</p>
          </span>
        </div>
      </aside>
    </div>
  );
}
