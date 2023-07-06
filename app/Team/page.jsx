import React from "react";

import CardTeam from "@/components/Card/CardTeam";
import MatchNow from "@/components/Card/MatchNow";

async function getData() {
  const res = await fetch(
    "http://api.mokletscience.com/api/v1/club?quantity=50&&page=1"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function AllTeam() {
  const data = await getData();

  const Data = data.data.filter((item) => !item.club_name.includes("Sample"));

  return (
    <>
      <div className="w-full mt-36 lg:max-w-7xl  md:px-20 sm:px-10 px-2 mb-10 lg:mx-auto h-fit">
        <div className="h-fit border-b-2 pb-8 border-black-main min-h-fit">
          <MatchNow />
        </div>
        <h1 className="text-xl h-fit sm:text-4xl mt-8  text-center w-full  mx-auto font-normal text-black-main uppercase mb-2">
          All Team
        </h1>

        <div className=" max-w-5xl mx-auto grid md:grid-cols-2   sm:gap-2">
          {Data.map((item, index) => {
            return (
              <>
                <div
                  className={` ${
                    index % 2 === 0
                      ? "md:hover:-translate-x-10 "
                      : "md:hover:translate-x-10"
                  } flex md:duration-100 ease-out  items-center gap-4`}
                >
                  {item.lenght}
                  <div className="flex justify-between w-full  items-center">
                    <CardTeam key={item.id} item={item} />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
