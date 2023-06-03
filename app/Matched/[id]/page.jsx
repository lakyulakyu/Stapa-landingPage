import React from "react";
import { BsDownload } from "react-icons/bs";
import Image from "next/image";
import MatchReport from "@/components/Card/MatchReport";

const Page = () => {
  return (
    <div className="pt-32 h-full mb-10 ">
      <div className=" text-end max-w-4xl mx-auto">
        <div className="text-base flex gap-4  max-w-sm text-center text-gray-400">
          <button className="border px-6 hover:bg-blue-400 py-2 hover:text-white  text-xl justify-between rounded-lg text-slate-300 font-semibold flex items-center  ">
            <BsDownload />
          </button>
        </div>
      </div>

      <div id="htmlElement" className="min-[500px]:mt-10 mt-4">
        <div className="flex max-[778px]:mx-10  max-[500px]:mx-3">
          <Image
            alt=""
            width={1000}
            height={10000}
            src={"/Logo.png"}
            className="h-12 w-fit md:hidden block mt-4  object-contain"
          />
          <div className="bg-primary-red mb-2 min-[500px]:mb-10 min-[500px]:w-60 w-32  rounded-md md:rounded-t-full font-medium text-white  mx-auto text-sm md:text-3xl max-w-4xl items-center grid grid-cols-3 text-center max-[500px]:grid-cols-1 md:w-full h-fit py-3 ">
            <p className="min[500px]:text-end max-[500px]:mb-2 ">Tim 2 </p>
            <div className="flex bg-black-main text-light-grey max-[500px]:text-sm md:text-4xl rounded-xl  md:scale-150 w-full md:px-5 px-1  justify-between items-center max-w-[70px] md:max-w-[150px] gap-2 md:gap-6 font-bold py-2 mx-auto">
              <p className="">14</p>
              <p className="-mt-2">:</p>
              <p className=" ">0</p>
            </div>
            <p className="min[500px]:text-start">Tim 1 raya pening </p>
          </div>
          <Image
            alt=""
            width={1000}
            height={10000}
            src={"/Logo.png"}
            className="h-12 w-fit md:hidden block  mt-4 object-contain"
          />
        </div>

        <div className="flex  max-w-4xl mx-auto items-center ">
          <Image
            alt=""
            width={1000}
            height={10000}
            src={"/Logo.png"}
            className="h-36 w-fit md:block hidden object-contain"
          />

          <div className="uppercase w-full  ">
            <div className=" max-w-lg items-center min-[500px]:mb-6 mb-2 max-[500px]:max-w-xs   flex font-medium max-[500px]: sm:text-2xl justify-around w-full  mx-auto text-center ">
              <p className="bg-red-200 rounded-l-lg  w-24 py-1 min-[500px]:rounded-t-full min-[500px]:w-full max-w-[120px]">
                24
              </p>
              <p className="w-80 border-x-8 border-black-main bg-primary-red text-white min-[500px]:text-xl text-sm font-semibold max-[500px]:py-2 py-1 min-[500px]:scale-125 mt-1 rounded-b-2xl">
                Shoot
              </p>
              <p className="bg-blue-200 w-24 rounded-r-lg py-1 min-[500px]:rounded-t-full min-[500px]:w-full max-w-[120px]">
                {" "}
                3
              </p>
            </div>
            <div className=" max-w-lg items-center min-[500px]:mb-6 mb-2 max-[500px]:max-w-xs   flex font-medium max-[500px]: sm:text-2xl justify-around w-full  mx-auto text-center ">
              <p className="bg-red-200 rounded-l-lg  w-24 py-1 min-[500px]:rounded-t-full min-[500px]:w-full max-w-[120px]">
                24
              </p>
              <p className="w-80 border-x-8 border-black-main bg-primary-red text-white min-[500px]:text-xl text-sm font-semibold max-[500px]:py-2 py-1 min-[500px]:scale-125 mt-1 rounded-b-2xl">
                Shoot On Target
              </p>
              <p className="bg-blue-200 w-24 rounded-r-lg py-1 min-[500px]:rounded-t-full min-[500px]:w-full max-w-[120px]">
                {" "}
                3
              </p>
            </div>
            <div className=" max-w-lg items-center min-[500px]:mb-6 mb-3 max-[500px]:max-w-xs flex font-medium max-[500px]: sm:text-2xl justify-around w-full  mx-auto text-center ">
              <p className="bg-red-200 rounded-l-lg  w-24 py-1 min-[500px]:rounded-t-full min-[500px]:w-full max-w-[120px]">
                24
              </p>
              <p className="w-80 border-x-8 border-black-main bg-primary-red text-white min-[500px]:text-xl text-sm font-semibold max-[500px]:py-2 py-1 min-[500px]:scale-125 mt-1 rounded-b-2xl">
                Fouls commited
              </p>
              <p className="bg-blue-200 w-24 rounded-r-lg py-1 min-[500px]:rounded-t-full min-[500px]:w-full max-w-[120px]">
                {" "}
                3
              </p>
            </div>
            <div className=" max-w-lg items-center min-[500px]:mb-6 mb-2 max-[500px]:max-w-xs   flex font-medium max-[500px]: sm:text-2xl justify-around w-full  mx-auto text-center ">
              <p className="bg-red-200 rounded-l-lg  w-24 py-1 min-[500px]:rounded-t-full min-[500px]:w-full max-w-[120px]">
                24
              </p>
              <p className="w-80 border-x-8 border-black-main bg-primary-red text-white min-[500px]:text-xl text-sm font-semibold max-[500px]:py-2 py-1 min-[500px]:scale-125 mt-1 rounded-b-2xl">
                yellow cards
              </p>
              <p className="bg-blue-200 w-24 rounded-r-lg py-1 min-[500px]:rounded-t-full min-[500px]:w-full max-w-[120px]">
                {" "}
                3
              </p>
            </div>
            <div className=" max-w-lg items-center min-[500px]:mb-6 mb-2 max-[500px]:max-w-xs   flex font-medium max-[500px]: sm:text-2xl justify-around w-full  mx-auto text-center ">
              <p className="bg-red-200 rounded-l-lg  w-24 py-1 min-[500px]:rounded-t-full min-[500px]:w-full max-w-[120px]">
                24
              </p>
              <p className="w-80 border-x-8 border-black-main bg-primary-red text-white min-[500px]:text-xl text-sm font-semibold max-[500px]:py-2 py-1 min-[500px]:scale-125 mt-1 rounded-b-2xl">
                Red cards
              </p>
              <p className="bg-blue-200 w-24 rounded-r-lg py-1 min-[500px]:rounded-t-full min-[500px]:w-full max-w-[120px]">
                {" "}
                3
              </p>
            </div>
            <div className=" max-w-lg items-center min-[500px]:mb-6 mb-2 max-[500px]:max-w-xs   flex font-medium max-[500px]: sm:text-2xl justify-around w-full  mx-auto text-center ">
              <p className="bg-red-200 rounded-l-lg  w-24 py-1 min-[500px]:rounded-t-full min-[500px]:w-full max-w-[120px]">
                24
              </p>
              <p className="w-80 border-x-8 border-black-main bg-primary-red text-white min-[500px]:text-xl text-sm font-semibold max-[500px]:py-2 py-1 min-[500px]:scale-125 mt-1 rounded-b-2xl">
                Offsides
              </p>
              <p className="bg-blue-200 w-24 rounded-r-lg py-1 min-[500px]:rounded-t-full min-[500px]:w-full max-w-[120px]">
                {" "}
                3
              </p>
            </div>
            <div className=" max-w-lg items-center min-[500px]:mb-6 mb-2 max-[500px]:max-w-xs   flex font-medium max-[500px]: sm:text-2xl justify-around w-full  mx-auto text-center ">
              <p className="bg-red-200 rounded-l-lg  w-24 py-1 min-[500px]:rounded-t-full min-[500px]:w-full max-w-[120px]">
                24
              </p>
              <p className="w-80 border-x-8 border-black-main bg-primary-red text-white min-[500px]:text-xl text-sm font-semibold max-[500px]:py-2 py-1 min-[500px]:scale-125 mt-1 rounded-b-2xl">
                Corners
              </p>
              <p className="bg-blue-200 w-24 rounded-r-lg py-1 min-[500px]:rounded-t-full min-[500px]:w-full max-w-[120px]">
                {" "}
                3
              </p>
            </div>
            <div className=" max-w-lg items-center min-[500px]:mb-6 mb-2 max-[500px]:max-w-xs   flex font-medium max-[500px]: sm:text-2xl justify-around w-full  mx-auto text-center ">
              <p className="bg-red-200 rounded-l-lg  w-24 py-1 min-[500px]:rounded-t-full min-[500px]:w-full max-w-[120px]">
                24
              </p>
              <p className="w-80 border-x-8 border-black-main bg-primary-red text-white min-[500px]:text-xl text-sm font-semibold max-[500px]:py-2 py-1 min-[500px]:scale-125 mt-1 rounded-b-2xl">
                Posession
              </p>
              <p className="bg-blue-200 w-24 rounded-r-lg py-1 min-[500px]:rounded-t-full min-[500px]:w-full max-w-[120px]">
                {" "}
                3
              </p>
            </div>
          </div>
          <Image
            alt=""
            width={1000}
            height={1000}
            src={"/Logo.png"}
            className="h-36 w-fit md:block hidden object-contain"
          />
        </div>
      </div>
      <MatchReport />
    </div>
  );
};

export default Page;
