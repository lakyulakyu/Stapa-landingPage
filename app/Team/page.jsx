import React from "react";
import { MdArrowRight } from "react-icons/md";
import Link from "next/link";
import CardTeam from "@/components/Card/CardTeam";
// import Tim from "../../Json/Team"
import MatchNow from "@/components/Card/MatchNow";

export async function getStaticProps() {
  const response = await fetch(
    "http://api.mokletscience.com/api/v1/club?quantity=50"
  );
  const res = await response.json();
  if (!res.success) {
    throw new Error(res.message);
  }
  return res;
}

export default async function AllTeam() {
  const data = await getStaticProps();
  console.log(data.data);
  return (
    <>
      <div className="w-full mt-28 lg:max-w-6xl md:px-20 sm:px-10 px-2 mb-10 lg:mx-auto h-fit">
        <div className="h-fit min-h-[20vh]">
          <MatchNow />
        </div>

        <h1 className="text-xl h-fit sm:text-4xl text-center w-full bg-neutral-100 mx-auto font-normal text-black-main uppercase">
          All Team
        </h1>
        <div className="divide-y-2 divide-neutral-300 sm:gap-2">
          {data.data.map((item, index) => {
            return (
              <>
                <div className="flex items-center gap-4">
                  <p className="text-lg"> {index + 1}</p>

                  <div className="flex justify-between w-full items-center">
                    <CardTeam key={item.id} item={item} />
                    <Link href={`/Team/${item.uuid}`}>
                      <button className="bg-neutral-400  active:duration-200 ease-out flex px-2 sm:mt-6 mt-4 sm:pt-0.5 rounded-sm  sm:w-24 justify-between items-center text-light-grey font-semibold text-xs  uppercase tracking-widest">
                        <p className="hidden sm:block">Detail</p>
                        <span className="text-2xl rotate-90 sm:rotate-0  ">
                          <MdArrowRight />
                        </span>
                      </button>
                    </Link>
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
