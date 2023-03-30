import { Disclosure } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/20/solid";

export default function NavBar() {
  return (
    <Disclosure as="nav" className="lg:fixed lg:inset-x-0 lg:z-40 bg-[#0B142E]">
      {({ open }) => (
        <>
          <div className=" px-4 sm:px-6 lg:px-8 ">
            <div className="flex h-20 items-center justify-end">
              <div className="">
                <button
                  type="button"
                  className="relative inline-flex items-center gap-x-1.5 rounded-full ring bg-transparent ring-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
