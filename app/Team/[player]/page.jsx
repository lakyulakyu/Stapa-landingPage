import React from "react";
import CardPlayer from "@/components/Card/CardPlayer";
import { ButtonBack } from "@/components/User/Button";
const PlayerStats = ({ params }) => {
  return (
    <div className="max-w-7xl pt-44 mx-auto  w-full font-poppins font-semibold h-fit">
      <div className="flex">
        <div className="w-fit">
          <ButtonBack />
        </div>
        <h1 className="text-xl w-full h-fit  sm:text-4xl text-center max-w-2xl  mx-auto font-normal text-black-main uppercase">
          Players of Team
        </h1>
      </div>

      <div className="fjustify-center items-center ">
        <div className=" h-fit ">
          <h1 className="pl-10 my-8 border-b-2 border-gray-200  h-10 text-xl font-normal pt-1 bg-neutral-200 uppercase">
            Goal Keepers
          </h1>

          <CardPlayer position={"K"} params={params} />
        </div>
        <div className=" h-fit ">
          <h1 className="pl-10 my-8 border-b-2 border-gray-200  h-10 text-xl font-normal pt-1  bg-neutral-200 uppercase">
            Backs
          </h1>
          <CardPlayer position={"B"} params={params} />
        </div>
        <div className=" h-fit ">
          <h1 className="pl-10 my-8 border-b-2  bg-neutral-200 border-gray-200  h-10 text-xl font-normal pt-1 uppercase">
            Midfielder
          </h1>
          <CardPlayer position={"F"} params={params} />
        </div>
        <div className=" h-fit ">
          <h1 className="pl-10 my-8 border-b-2 border-gray-200  h-10 text-xl font-normal pt-1 bg-neutral-200 uppercase">
            Striker
          </h1>
          <CardPlayer position={"S"} params={params} />
        </div>
        <div className=" h-fit ">
          <h1 className="pl-10 my-8 border-b-2 border-gray-200  h-10 text-xl font-normal pt-1  bg-neutral-200 uppercase">
            Wingers
          </h1>
          <CardPlayer position={"W"} params={params} />
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
