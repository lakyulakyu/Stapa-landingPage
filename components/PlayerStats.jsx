import React from "react";
import { IoMdAdd } from "react-icons/io";
import Link from "next/link";
import Shorting from "./Card/CardPlayerStats";



const PlayerStats = () => {
  return (
    <div className="max-w-7xl mx-auto  w-full font-poppins font-semibold h-full lg:h-[70vh] ">
      <div className="flex-col justify-center items-center ">
        <div>
          <h2 className="uppercase font-bold text-2xl text-black-main">
            player stats
          </h2>
          <Link href={"/#"}>
            <p className="text-base text-zinc-500 font-medium flex items-center gap-x-1 mt-1 cursor-pointer">
              View all stats <IoMdAdd />
            </p>
          </Link>
        </div>
        <div className="grid lg:grid-cols-4 p  divide-x-2 max-md:gap-7 md:grid-cols-3 grid-cols-1 ">
          <div>
            <h1 className="pl-10 mb-4">Goals</h1>
            <Shorting category={"goals"} limit={5} />
          </div>
          <div>
            <h1 className="pl-10 mb-4">Assist</h1>
            <Shorting category={"assist"} limit={5} />
          </div>
          <div>
            <h1 className="pl-10 mb-4">Passes</h1>
            <Shorting category={"passes"} limit={5} />
          </div>
          <div>
            <h1 className="pl-10 mb-4">Clean Sheets</h1>
            <Shorting category={"cleansheets"} limit={5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
