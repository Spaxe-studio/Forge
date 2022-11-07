import React from "react";
import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { ConnectButton } from "web3uikit";
import logo from "../../assets/img/logo.svg";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Stake", href: "/stake" },
  { name: "Mint", href: "/mint" },
  { name: "Generate Token", href: "/token" },
];
export default function Header() {
  const router = useRouter();
  return (
    <Popover>
      <div className="mx-auto max-w-7xl p-4 sm:p-6">
        <nav
          className="relative flex items-center justify-between sm:h-10 md:justify-center"
          aria-label="Global"
        >
          <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link href="/">
                <span className="text-[red] flex items-center tracking-widest font-black text-3xl">
                  <span className="mr-2">
                    <Image src={logo} alt="forge-logo" />
                  </span>
                  <span>FORGE</span>
                </span>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-10">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a
                  className={` text-white hover:font-medium ${
                    router.pathname == item.href
                      ? "font-semibold"
                      : "font-light"
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
          <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
            <span className="inline-flex rounded-md shadow">
              <ConnectButton></ConnectButton>
            </span>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <Link href="/">
                  <a className="font-black tracking-widest text-black sm:text-white">
                    FORGE
                  </a>
                </Link>
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>

            <ConnectButton></ConnectButton>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
