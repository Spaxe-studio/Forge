import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" border-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-8 px-4 sm:px-6 lg:px-8">
        <h2 className="mt-2 text-4xl text-center font-normal text-white">
          FORGE
        </h2>
        <div className="mt-8 flex items-center justify-center">
          <a
            href="https://t.me/DeFiForge"
            className="border-r hover:bg-white hover:text-black border-white text-white tracking-widest text-lg p-4"
          >
            Telegram
          </a>

          <a
            href="https://www.twitter.com/DeFiForge"
            className="border-r border-white hover:bg-white hover:text-black text-white tracking-widest text-lg p-4"
          >
            Twitter
          </a>

          <a
            href="https://www.dextools.io/app/en/ether/pair-explorer/0x590bc926e885e7256bd58035bc23f20da06ba152"
            className=" text-white hover:bg-white hover:text-black tracking-widest text-lg p-4"
          >
            Chart
          </a>
        </div>

        <p className="mt-8 text-center font-normal text-base text-white">
          Copyright &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
