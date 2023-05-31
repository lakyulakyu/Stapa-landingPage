import React from "react";
import { IoMdAdd } from "react-icons/io";
import Shorting from "./Card/CardPlayerStats";

const PlayerStats = () => {
  return (
    <div className="max-w-7xl pt-32 mx-auto  w-full font-poppins font-semibold h-fit">
      <div className="flex-col justify-center items-center ">
        <div className="">
          <div>
            <h1 className="pl-10 mb-4 ">Goals</h1>
            <Shorting category={"goals"} />
          </div>
          <div>
            <h1 className="pl-10 grid grid-cols-4  mb-4">Assist</h1>
            <Shorting category={"assist"} />
          </div>
          <div>
            <h1 className="pl-10 mb-4">Passes</h1>
            <Shorting category={"passes"} />
          </div>
          <div>
            <h1 className="pl-10 mb-4">Clean Sheets</h1>
            <Shorting category={"cleansheets"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
