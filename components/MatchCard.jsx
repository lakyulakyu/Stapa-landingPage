import React from "react";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
const MatchCard = () => {
  return (
    <div className=" shadow  h-fit py-8 w-full min-w-fit min-h-fit max-w-xs px-6 divide-y-2 divide-red-600">
      <div className="flex justify-between items-end pb-4">
        <div className="flex gap-2">
          {" "}
          <img
            src="/logo-sepakbola.jpg"
            alt="logo"
            width={0}
            height={0}
            className="h-16 w-16"
          />
          <img
            src="/logo-sepakbola.jpg"
            alt="logo"
            width={0}
            height={0}
            className="h-16 w-16"
          />
        </div>

        <h1 className="text-xl font-bold text-red-600">2-0 : W</h1>
      </div>
      <div className=" text-start pt-4 capitalize">
        <h1 className="text-base font-semibold capitalize">
          judul pertandingan FC
        </h1>
        <p className="text-xs text-gray-500 -mt-1">liga pertandingan</p>
        <p className="text-xs font-semibold mt-2">
          sunday <span>2th </span>januari,2018
        </p>
        <p className="text-xs font-semibold">
          19.00 <span>anfield</span>
        </p>
        <Link href={"/detailmatch"}>
          <button className="bg-red-600 text-white font-semibold justify-between text-sm flex items-center gap-2 px-2 py-1 mt-6 w-24">
            More <IoMdArrowDropright />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MatchCard;
