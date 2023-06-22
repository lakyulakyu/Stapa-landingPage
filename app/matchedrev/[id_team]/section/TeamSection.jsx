import Image from "next/image";
import React, { Fragment } from "react";
import MatchResult from "../../../../Json/MatchResult.json";

const TeamResultSection = (props) => {
  const filteredData = MatchResult.filter((item) => item.id == props.id);
  const formattedDate = (date) => {
    const formatted = date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1");
    return formatted;
  };
  return (
    <div className="max-w-4xl mx-auto font-poppins">
      {filteredData.map((data) => {
        return (
          <Fragment key={data.id}>
            <div className="wrapper flex flex-col md:flex-row">
              <div className="w-full md:w-1/4 mt-12">
                <div className="flex flex-col items-center">
                  <Image
                    src={"/Logo.png"}
                    alt=""
                    width={300}
                    height={300}
                    className="w-40"
                  />
                  <h3 className="text-3xl uppercase mt-8 text-center font-medium">
                    {data.team_one.name}
                  </h3>
                  <h6 className="text-lg mt-1 text-zinc-500">
                    Coach: {data.team_one.coach}
                  </h6>
                </div>
              </div>
              <div className="flex items-center flex-col uppercase w-full md:w-2/4">
                <div className="text-2xl flex items-center flex-col">
                  <h6>{formattedDate(data.date)}</h6>
                  <h6>{data.league}</h6>
                </div>
                <h2 className="text-5xl mt-14 font-medium">
                  {data.team_one.score + " - " + data.team_two.score}
                </h2>
              </div>
              <div className="w-full md:w-1/4 mt-12">
                <div className="flex flex-col items-center">
                  <Image
                    src={"/Logo.png"}
                    alt=""
                    width={300}
                    height={300}
                    className="w-40"
                  />
                  <h3 className="text-3xl uppercase mt-8 text-center font-medium">
                    {data.team_two.name}
                  </h3>
                  <h6 className="text-lg mt-1 text-zinc-500">
                    Coach: {data.team_two.coach}
                  </h6>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-y-3">
              <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
                <div className="flex justify-center w-1/4">
                  <h6>{data.team_one.shoots}</h6>
                </div>
                <div className="flex justify-center uppercase w-2/4">
                  <h6>Shoot</h6>
                </div>
                <div className="flex justify-center w-1/4">
                  <h6>{data.team_two.shoots}</h6>
                </div>
              </div>
              <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
                <div className="flex justify-center w-1/4">
                  <h6>{data.team_one.shoot_on}</h6>
                </div>
                <div className="flex justify-center uppercase w-2/4">
                  <h6>Shoot on Target</h6>
                </div>
                <div className="flex justify-center w-1/4">
                  <h6>{data.team_two.shoot_on}</h6>
                </div>
              </div>
              <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
                <div className="flex justify-center w-1/4">
                  <h6>{data.team_one.yellow_cards}</h6>
                </div>
                <div className="flex justify-center uppercase w-2/4">
                  <h6>Yellow Cards</h6>
                </div>
                <div className="flex justify-center w-1/4">
                  <h6>{data.team_two.yellow_cards}</h6>
                </div>
              </div>
              <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
                <div className="flex justify-center w-1/4">
                  <h6>{data.team_one.red_cards}</h6>
                </div>
                <div className="flex justify-center uppercase w-2/4">
                  <h6>Red Cards</h6>
                </div>
                <div className="flex justify-center w-1/4">
                  <h6>{data.team_two.red_cards}</h6>
                </div>
              </div>
              <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
                <div className="flex justify-center w-1/4">
                  <h6>{data.team_one.offsides}</h6>
                </div>
                <div className="flex justify-center uppercase w-2/4">
                  <h6>Offsides</h6>
                </div>
                <div className="flex justify-center w-1/4">
                  <h6>{data.team_two.offsides}</h6>
                </div>
              </div>
              <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
                <div className="flex justify-center w-1/4">
                  <h6>{data.team_one.corners}</h6>
                </div>
                <div className="flex justify-center uppercase w-2/4">
                  <h6>Corners</h6>
                </div>
                <div className="flex justify-center w-1/4">
                  <h6>{data.team_two.corners}</h6>
                </div>
              </div>
              <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
                <div className="flex justify-center w-1/4">
                  <h6>{data.team_one.posession + "%"}</h6>
                </div>
                <div className="flex justify-center uppercase w-2/4">
                  <h6>Possession</h6>
                </div>
                <div className="flex justify-center w-1/4">
                  <h6>{data.team_two.posession + "%"}</h6>
                </div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default TeamResultSection;
