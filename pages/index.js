import Image from "next/image";
import Exclude from "../assets/img/Exclude.svg";
import vectorTax from "../assets/img/vectorTax.svg";
import pic1 from "../assets/img/photo1.svg";
import pic2 from "../assets/img/photo2.svg";
import pic3 from "../assets/img/photo3.svg";
import pic4 from "../assets/img/photo4.svg";

const people = [
  {
    name: "Mark K.",
    imageUrl: pic1,
    bio: "Doxxing will commence after all utilites are released.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Phil R.",
    imageUrl: pic2,
    bio: "Doxxing will commence after all utilites are released.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Myles W.",
    imageUrl: pic3,
    bio: "Doxxing will commence after all utilites are released.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];
export default function Home() {
  return (
    <main className="overflow-hidden flex flex-col items-center">
      {/* hero */}
      <div className=" flex items-center text-center justify-center min-h-[80vh] w-full hero-bg">
        <div className="flex flex-col items-center text-center justify-center ">
          <h1 className="text-center font-extrabold uppercase text-8xl sm:text-9xl">
            FORGE
          </h1>
          <div className="border-b-2 w-2/6 mt-5 border-white" />
          <h2 className=" text-center mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Forging a better DeFi for all
          </h2>
          <a href="#">
            <button className="mt-10 bg-[#DD2424] hover:text-black hover:bg-white py-5  px-20 ">
              Discover More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
      {/* cta1 */}
      <div className="bg-[#0E0E0E] w-full ">
        <div className=" flex flex-col mx-auto max-w-7xl p-10 sm:p-16 lg:flex-row items-center lg:items-end justify-center ">
          <div className=" lg:w-full flex items-center">
            <Image src={Exclude} alt="#" />
          </div>

          <div className="w-full mt-20 lg:mt-0 text-center lg:text-left pl-4">
            <h2 className="text-6xl text-center lg:text-left sm:text-8xl ">
              DeFi <span class="inline sm:block">Forge</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:3xl mt-6 tracking-wide">
            DeFi Forge's vision is to revolutionize the space through utilities that create a safer, more user friendly atmosphere for DeFi.
            </p>
            <a href="#">
              <button className="mt-10 bg-[#DD2424] hover:text-black hover:bg-white py-5  px-20 ">
                Discover More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 inline ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* description */}
      <div className="describe-bg min-h-[70vh] w-full flex items-center mt-36 ">
        <h1 className=" text-center text-3xl mx-auto p-8 sm:p-6  sm:text-4xl md:text-5xl lg:text-7xl">
          DeFi is the <span className="font-bold">future </span> and it is all
          of our responsibilities to build a better future for those that{" "}
          <span className="font-bold">follow behind </span>us
        </h1>
      </div>
      {/* cta2 */}
      <div className="bg-[#0E0E0E] w-full ">
        <div className=" flex flex-col gap-8 mx-auto max-w-7xl p-10 sm:p-16 lg:flex-row items-center lg:items-end justify-center ">
          <div className="w-full mt-20 lg:mt-0 text-center lg:text-left pl-4">
            <h2 className="text-6xl text-center lg:text-left sm:text-7xl ">
              Tokenomics
            </h2>
            <div className="h-[70vh] mt-14 w-full bg-[red] md:hidden items-center flex " />
            <button className=" mt-12 leading-6 text-base rounded-full border hover:text-black  hover:bg-white py-3 px-6">
              Taxes
            </button>
            <div className="mt-8 text-left">
              <div className=" flex lg:w-[70%] w-full">
                <Image src={vectorTax} alt="tax" />
                <span className=" ml-2 text-base lg:w-[85%] w-full">
                  2% Automatically added to the Liquidity Pool
                </span>
              </div>
              <div className="mt-7 flex lg:w-[70%] w-full ">
                <Image src={vectorTax} alt="tax" />
                <span className="ml-2  text-base lg:w-[85%] w-full ">
                  3% Development tax to further the project and provide
                  revolutionary utilities
                </span>
              </div>
              <div className="mt-7 flex lg:w-[70%] w-full">
                <Image src={vectorTax} alt="tax" />
                <span className=" ml-2 text-base lg:w-[85%] w-full ">
                  88% of Total Supply to LP
                </span>
              </div>
              <div className="mt-7 flex lg:w-[70%] w-full ">
                <Image src={vectorTax} alt="tax" />
                <span className=" ml-2 text-sm lg:w-[85%] w-full ">
                  12% of Total Supply reserved for staking
                </span>
              </div>
            </div>
            <a href="#">
              <button className="mt-10 bg-[#DD2424] hover:text-black hover:bg-white py-5  px-20 ">
                Discover More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 inline ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </a>
          </div>
          <div className="h-[70vh] w-full bg-[red] md:flex items-center hidden " />
        </div>
      </div>
      {/* Team */}
      <div className="mx-auto flex-col flex max-w-7xl p-10 sm:p-16 lg:mt-20 mt-10 ">
        <h2 className="text-6xl text-center lg:text-left sm:text-7xl ">Team</h2>
        <div className="flex gap-6 justify-between items-center lg:flex-row flex-col mt-20">
          {people.map((person, index) => (
            <div key={person.name} className="border p-2 ">
              {/* <Image
                sizes="full"
                className="rounded-lg shadow-lg"
                src={person.imageUrl}
                alt="profile image"
              /> */}
              <div className="h-[30vh]  w-full bg-[red] items-center flex " />
              <div className="bg-white flex min-w-full min-h-full" />
              <div className="px-6 py-3">
                <h3 className="font-bold text-[20px]">{person?.name}</h3>
                <p className="text-sm mt-3">{person?.bio}</p>
                <div className="flex mt-5">
                  <button className="border px-4 py-2 rounded-full mr-5 hover:bg-white hover:text-black ">
                    Twitter
                  </button>
                  <button className="border px-4 py-2 rounded-full bg-white text-black font-bold hover:bg-black hover:text-white">
                    Linkedin
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
