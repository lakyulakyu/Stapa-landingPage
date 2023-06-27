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
  return (
    <>
      <div className="w-full mt-36 lg:max-w-6xl md:px-20 sm:px-10 px-2 mb-10 lg:mx-auto h-fit">
        <div className="h-fit border-b-2 pb-8 border-black-main min-h-fit">
          <MatchNow />
        </div>
        <h1 className="text-xl h-fit sm:text-4xl mt-8  text-center w-full  mx-auto font-normal text-black-main uppercase mb-2">
          All Team
        </h1>
        <div className="divide-y-2 max-w-2xl mx-auto divide-neutral-300 sm:gap-2">
          {data.data.map((item, index) => {
            return (
              <>
                <div className="flex md:duration-100 ease-out md:hover:translate-x-10 items-center gap-4">
                  <p className="text-lg"> {index + 1}</p>
                  <div className="flex justify-between w-full items-center">
                    <CardTeam key={item.id} item={item}  />
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
