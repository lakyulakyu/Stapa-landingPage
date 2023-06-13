import React from "react";
import CardPlayer from "@/components/Card/CardPlayer";
const PlayerStats = ({ params }) => {
  return (
    <div className="max-w-7xl pt-32 mx-auto  w-full font-poppins font-semibold h-fit">
      <h1 className="pl-10 text-xl  h-16 sm:text-4xl font-normal pt-1 uppercase">
        Players of Team
      </h1>
      <div className="flex-col justify-center items-center ">
        <div className="">
          <div>
            <h1 className="pl-10 border-b-2 border-gray-200  h-10 text-xl font-normal pt-1 uppercase">
              Goals
            </h1>
            <CardPlayer position={"CF"} params={params.player} />
          </div>
          <div>
            <h1 className="pl-10 border-b-2 border-gray-200  h-10 text-xl font-normal pt-1 uppercase">
              Assist
            </h1>
            <CardPlayer position={"LW"} params={params.player} />
          </div>
          <div>
            <h1 className="pl-10 border-b-2 border-gray-200  h-10 text-xl font-normal pt-1 uppercase">
              Passes
            </h1>
            <CardPlayer position={"RB"} params={params.player} />
          </div>
          <div>
            <h1 className="pl-10 border-b-2 border-gray-200  h-10 text-xl font-normal pt-1 uppercase">
              Clean Sheets
            </h1>
            <CardPlayer position={"cleansheets"} params={params.player} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
