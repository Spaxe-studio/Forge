import React from "react";
import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { ConnectButton } from "web3uikit";
import logo from "../../assets/img/logo.svg";
import Image from "next/image";

import { BookmarkIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "Stake", href: "/stake" },
  { name: "Generate Token", href: "/token" },
];

const solutions = [
  {
    name: "Mint NFT",
    description: "Mint random NFTs faster",
    href: "/mint",
    icon: SparklesIcon,
  },
  {
    name: "Stake NFT",
    description: "Stake NFTs directly and faster.",
    href: "/nft-stake",
    icon: BookmarkIcon,
  },
  // {
  //   name: "NFT Marketplace",
  //   description: "Marketplace for all dynamic NFTs ",
  //   href: "/marketplace",
  //   icon: ChatBubbleLeftRightIcon,
  // },
  // {
  //   name: "NFT Collections",
  //   description: "Aggregated Collections for all dynamic NFTs",
  //   href: "/collections",
  //   icon: QuestionMarkCircleIcon,
  // },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const router = useRouter();
  return (
    <header className="z-50">
      <Popover>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="text-[#DD2424] flex items-center  font-bold text-2xl">
                <span className="sr-only">Forge</span>
                <span className="mr-2">
                  <Image
                    src={logo}
                    alt="forge-logo"
                    width="24px"
                    height="24px"
                    className="w-6 h-6"
                  />
                </span>
                FORGE
              </span>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-black p-2 text-gray-50 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <div className="hidden md:flex md:space-x-10">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    className={` text-white hover:font-medium ${
                      router.pathname == item.href
                        ? "font-semibold text-[#DD2424]"
                        : "font-light"
                    }`}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-[#DD2424]" : "text-white",
                      "group inline-flex items-center rounded-md text-base font-medium hover:text-[#DD2424] focus:outline-none focus:ring focus:ring-[#DD2424] ",
                      router.pathname == "/mint" ||
                        router.pathname == "/nft-stake"
                        ? "font-semibold text-[#DD2424] "
                        : "font-light"
                    )}
                  >
                    <span>NFT</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-[#DD2424]" : "text-gray-100",
                        "ml-2 h-5 w-5 group-hover:text-[#DD2424]"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-50 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-xl ring-2 ring-gray-500 ring-opacity-10">
                        <div className="relative grid gap-6 bg-black px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {solutions.map((item) => (
                            <Link key={item.name} href={item.href}>
                              <a
                                className={`-m-3 flex items-start rounded-lg p-3 hover:bg-[#141414] group ${
                                  router.pathname === item?.href &&
                                  "bg-[#141414]"
                                }`}
                              >
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-[#DD2424] to-orange-600 text-white sm:h-12 sm:w-12">
                                  <item.icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="ml-4">
                                  <p
                                    className={`text-base font-medium group-hover:text-[#DD2424] text-white ${
                                      router.pathname === item?.href &&
                                      "text-[#DD2424]"
                                    }`}
                                  >
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <ConnectButton></ConnectButton>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y divide-gray-500 rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <Link href="/">
                    <span className="text-[#DD2424] flex items-center  font-bold text-2xl">
                      <span className="sr-only">Forge</span>
                      <span className="mr-2">
                        <Image
                          src={logo}
                          alt="forge-logo"
                          width="24px"
                          height="24px"
                          className="w-6 h-6"
                        />
                      </span>
                      FORGE
                    </span>
                  </Link>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-black p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    {solutions.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 group ">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-r from-[#DD2424] to-orange-600 text-white sm:h-12 sm:w-12">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium group-hover:text-[#DD2424] text-white">
                              {item.name}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-1 gap-4">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        className={` text-white hover:font-medium ${
                          router.pathname == item.href
                            ? "font-semibold text-[#DD2424]"
                            : "font-light"
                        }`}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
                <div className="mt-6">
                  <ConnectButton></ConnectButton>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>

    // <Popover>
    //   <div className="mx-auto max-w-7xl p-4 sm:p-6">
    //     <nav
    //       className="relative flex items-center justify-between sm:h-10 md:justify-center"
    //       aria-label="Global"
    //     >
    //       <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
    //         <div className="flex w-full items-center justify-between md:w-auto">
    //           <Link href="/">
    //             <span className="text-[red] flex items-center tracking-widest font-black text-3xl">
    //               <span className="mr-2">
    //                 <Image src={logo} alt="forge-logo" />
    //               </span>
    //               <span>FORGE</span>
    //             </span>
    //           </Link>
    //           <div className="-mr-2 flex items-center md:hidden">
    //             <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
    //               <span className="sr-only">Open main menu</span>
    //               <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    //             </Popover.Button>
    //           </div>
    //         </div>
    //       </div>
    // <div className="hidden md:flex md:space-x-10">
    //   {navigation.map((item) => (
    //     <Link key={item.name} href={item.href}>
    //       <a
    //         className={` text-white hover:font-medium ${
    //           router.pathname == item.href
    //             ? "font-semibold"
    //             : "font-light"
    //         }`}
    //       >
    //         {item.name}
    //       </a>
    //     </Link>
    //   ))}
    // </div>
    //       <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
    //         <span className="inline-flex rounded-md shadow">
    //           <ConnectButton></ConnectButton>
    //         </span>
    //       </div>
    //     </nav>
    //   </div>

    //   <Transition
    //     as={Fragment}
    //     enter="duration-150 ease-out"
    //     enterFrom="opacity-0 scale-95"
    //     enterTo="opacity-100 scale-100"
    //     leave="duration-100 ease-in"
    //     leaveFrom="opacity-100 scale-100"
    //     leaveTo="opacity-0 scale-95"
    //   >
    //     <Popover.Panel
    //       focus
    //       className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
    //     >
    //       <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
    //         <div className="flex items-center justify-between px-5 pt-4">
    //           <div>
    //             <Link href="/">
    //               <a className="font-black tracking-widest text-black sm:text-white">
    //                 FORGE
    //               </a>
    //             </Link>
    //           </div>
    //           <div className="-mr-2">
    //             <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
    //               <span className="sr-only">Close menu</span>
    //               <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    //             </Popover.Button>
    //           </div>
    //         </div>
    //         <div className="px-2 pt-2 pb-3">
    //           {navigation.map((item) => (
    //             <Link key={item.name} href={item.href}>
    //               <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
    //                 {item.name}
    //               </a>
    //             </Link>
    //           ))}
    //         </div>

    //         <ConnectButton></ConnectButton>
    //       </div>
    //     </Popover.Panel>
    //   </Transition>
    // </Popover>
  );
}
