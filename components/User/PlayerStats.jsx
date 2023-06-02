import React from "react";
import Shorting from "../Card/CardPlayer";

const PlayerStats = () => {
  return (
    <div className="max-w-7xl pt-32 mx-auto  w-full font-poppins font-semibold h-fit">
      <h1 className="pl-10   h-16 text-4xl font-normal pt-1 uppercase">
        Players of Team
      </h1>
      <div className="flex-col justify-center items-center ">
        <div className="">
          <div>
            <h1 className="pl-10 border-b-2 border-gray-200  h-10 text-xl font-normal pt-1 uppercase">
              Goals
            </h1>
            <Shorting category={"goals"} />
          </div>
          <div>
            <h1 className="pl-10 border-b-2 border-gray-200  h-10 text-xl font-normal pt-1 uppercase">
              Assist
            </h1>
            <Shorting category={"assist"} />
          </div>
          <div>
            <h1 className="pl-10 border-b-2 border-gray-200  h-10 text-xl font-normal pt-1 uppercase">
              Passes
            </h1>
            <Shorting category={"passes"} />
          </div>
          <div>
            <h1 className="pl-10 border-b-2 border-gray-200  h-10 text-xl font-normal pt-1 uppercase">
              Clean Sheets
            </h1>
            <Shorting category={"cleansheets"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
