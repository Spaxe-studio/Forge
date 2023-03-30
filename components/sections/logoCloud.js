import polygon from "../../assets/logo/polygon.png";
import optimism from "../../assets/logo/optimism.svg";
import bsc from "../../assets/logo/bsc.png";
import ethereum from "../../assets/logo/ethereum.svg";
import Image from "next/image";
import arbitrum from "../../assets/logo/Arbitrum.svg";
const logos = [polygon, bsc, ethereum, optimism];

export default function LogoCloud() {
  return (
    <div className="bg-transparent py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none">
          <h3 className="text-xl font-medium text-[#f7f7f7]">
            Deployed Multi-chain:
          </h3>
          <span className="col-span-2 max-h-12 w-full  lg:col-span-1 items-center inline-flex">
            <Image
              className="object-contain h-full"
              src={arbitrum}
              alt="logo"
              width={100}
              height={100}
            />
            <p className="text-2xl font-medium text-[#f7f7f7]">Arbitrum</p>
          </span>

          {logos.map((logo, idx) => (
            <Image
              key={idx}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={logo}
              alt="logo"
              width={158}
              height={48}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
