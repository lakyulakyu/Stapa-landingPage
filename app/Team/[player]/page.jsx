import React from "react";
import CardPlayer from "@/components/Card/CardPlayer";
import Link from "next/link";
import { CgArrowLongLeft } from "react-icons/cg";

const PlayerStats = () => {
  return (
    <div className="max-w-7xl pt-32 mx-auto  w-full font-poppins font-semibold h-fit">
      <div className="flex">
        <Link href={"/Team"}>
          <button className="text-lg  gap-2  flex items-center border-2 p-2 rounded-lg text-red-500 ">
            <CgArrowLongLeft />
            <span className="-mt-0.5 text-sm">Kembali</span>
          </button>
        </Link>
        <h1 className="text-xl h-fit  sm:text-4xl text-center max-w-2xl  bg-neutral-100 mx-auto font-normal text-black-main uppercase">
          Players of Team
        </h1>
      </div>

      <div className="flex-col justify-center items-center ">
        <div className="">
          <div>
            <h1 className="pl-10 border-b-2 border-gray-200  h-10 text-xl font-normal pt-1 uppercase">
              Goals
            </h1>
            <CardPlayer position={"goals"} />
          </div>
          <div>
            <h1 className="pl-10 border-b-2 border-gray-200  h-10 text-xl font-normal pt-1 uppercase">
              Assist
            </h1>
            <CardPlayer position={"cleansheets"} />
          </div>
          <div>
            <h1 className="pl-10 border-b-2 border-gray-200  h-10 text-xl font-normal pt-1 uppercase">
              Passes
            </h1>
            <CardPlayer position={"passes"} />
          </div>
          <div>
            <h1 className="pl-10 border-b-2 border-gray-200  h-10 text-xl font-normal pt-1 uppercase">
              Clean Sheets
            </h1>
            <CardPlayer position={"assist"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
