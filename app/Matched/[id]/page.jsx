"use client";
import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";
import Image from "next/image";

const page = () => {
  const [showDetail, setShowDetail] = useState(false);

  const handleButtonClick = () => {
    setShowDetail(!showDetail);
  };
  return (
    <div className="pt-32 h-full mb-10 ">
      <div className=" text-end max-w-4xl mx-auto">
        <div className="text-base flex gap-4  max-w-sm text-center text-gray-400">
          {/* Print login only */}
          <button className="bg-blue-500 px-4 py-2 w-40 text-xl justify-between rounded-lg text-white font-semibold flex items-center  ">
            Download
            <span>
              <BsDownload />
            </span>
          </button>

          <button
            onClick={handleButtonClick}
            className={` px-4 py-2 w-fit text-xl justify-between rounded-lg text-white font-semibold flex items-center ${
              showDetail ? "bg-red-500" : "bg-green-500"
            } `}
          >
            {showDetail ? "Close" : "Detail"}
          </button>
        </div>
      </div>

      <div>
        {showDetail && (
          <div className="max-w-3xl h-fit py-10 my-10 px-4 mx-auto bg-slate-200">
            detail
          </div>
        )}
      </div>
      <div id="print-area" className="mt-10">
        <div className="bg-primary-red text-center mb-10 rounded-b-xl rounded-t-full font-medium text-white   mx-auto text-3xl max-w-4xl items-center grid grid-cols-3 w-full h-16 ">
          <p className="text-end  ">Tim 2 </p>
          <div className="flex bg-black-main text-light-grey text-4xl rounded-xl  scale-150 w-full px-5  justify-between items-center max-w-[150px] gap-6 font-bold py-2 mx-auto">
            <p className="">14</p>
            <p className="-mt-2">:</p>
            <p className=" ">0</p>
          </div>
          <p className="text-start">Tim 1</p>
        </div>
        <div className="flex  max-w-4xl mx-auto items-center ">
          <Image
            alt=""
            width={1000}
            height={10000}
            src={"/Logo-web.png"}
            className="h-36 w-fit  object-contain"
          />

          <div className="uppercase w-full  ">
            <div className=" max-w-lg items-center mb-6  flex font-medium text-2xl justify-around w-full  mx-auto text-center ">
              <p className="bg-red-200 w-full rounded-t-full py-1  max-w-[120px] ">
                24
              </p>
              <p className="w-80 border-x-8 border-black-main bg-primary-red text-white text-xl font-semibold py-2 scale-125 mt-1 rounded-b-2xl">
                Shoot
              </p>
              <p className="bg-blue-200 py-1 rounded-t-full w-full max-w-[120px]">
                {" "}
                3
              </p>
            </div>
            <div className=" max-w-lg items-center mb-6  flex font-medium text-2xl justify-around w-full  mx-auto text-center ">
              <p className="bg-red-200 w-full rounded-t-full py-1  max-w-[120px] ">
                24
              </p>
              <p className="w-80 border-x-8 border-black-main bg-primary-red text-white text-xl font-semibold py-2 scale-125 mt-1 rounded-b-2xl">
                Shoot On Target
              </p>
              <p className="bg-blue-200 py-1 rounded-t-full w-full max-w-[120px]">
                {" "}
                3
              </p>
            </div>
            <div className=" max-w-lg items-center mb-6  flex font-medium text-2xl justify-around w-full  mx-auto text-center ">
              <p className="bg-red-200 w-full rounded-t-full py-1  max-w-[120px] ">
                24
              </p>
              <p className="w-80 border-x-8 border-black-main bg-primary-red text-white text-xl font-semibold py-2 scale-125 mt-1 rounded-b-2xl">
                fouls committed
              </p>
              <p className="bg-blue-200 py-1 rounded-t-full w-full max-w-[120px]">
                {" "}
                3
              </p>
            </div>
            <div className=" max-w-lg items-center mb-6  flex font-medium text-2xl justify-around w-full  mx-auto text-center ">
              <p className="bg-red-200 w-full rounded-t-full py-1  max-w-[120px] ">
                24
              </p>
              <p className="w-80 border-x-8 border-black-main bg-primary-red text-white text-xl font-semibold py-2 scale-125 mt-1 rounded-b-2xl">
                yellow caeds
              </p>
              <p className="bg-blue-200 py-1 rounded-t-full w-full max-w-[120px]">
                {" "}
                3
              </p>
            </div>
            <div className=" max-w-lg items-center mb-6  flex font-medium text-2xl justify-around w-full  mx-auto text-center ">
              <p className="bg-red-200 w-full rounded-t-full py-1  max-w-[120px] ">
                24
              </p>
              <p className="w-80 border-x-8 border-black-main bg-primary-red text-white text-xl font-semibold py-2 scale-125 mt-1 rounded-b-2xl">
                red cards
              </p>
              <p className="bg-blue-200 py-1 rounded-t-full w-full max-w-[120px]">
                {" "}
                3
              </p>
            </div>
            <div className=" max-w-lg items-center mb-6  flex font-medium text-2xl justify-around w-full  mx-auto text-center ">
              <p className="bg-red-200 w-full rounded-t-full py-1  max-w-[120px] ">
                24
              </p>
              <p className="w-80 border-x-8 border-black-main bg-primary-red text-white text-xl font-semibold py-2 scale-125 mt-1 rounded-b-2xl">
                offsides
              </p>
              <p className="bg-blue-200 py-1 rounded-t-full w-full max-w-[120px]">
                {" "}
                3
              </p>
            </div>
            <div className=" max-w-lg items-center mb-6  flex font-medium text-2xl justify-around w-full  mx-auto text-center ">
              <p className="bg-red-200 w-full rounded-t-full py-1  max-w-[120px] ">
                24
              </p>
              <p className="w-80 border-x-8 border-black-main bg-primary-red text-white text-xl font-semibold py-2 scale-125 mt-1 rounded-b-2xl">
                corners
              </p>
              <p className="bg-blue-200 py-1 rounded-t-full w-full max-w-[120px]">
                {" "}
                3
              </p>
            </div>
            <div className=" max-w-lg items-center mb-6  flex font-medium text-2xl justify-around w-full  mx-auto text-center ">
              <p className="bg-red-200 w-full rounded-t-full py-1  max-w-[120px] ">
                24
              </p>
              <p className="w-80 border-x-8 border-black-main bg-primary-red text-white text-xl font-semibold py-2 scale-125 mt-1 rounded-b-2xl">
                possession
              </p>
              <p className="bg-blue-200 py-1 rounded-t-full w-full max-w-[120px]">
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
            className="h-36 w-fit object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
