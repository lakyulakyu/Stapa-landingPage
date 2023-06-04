import React from "react";
import Link from "next/link";
import { MdArrowRight } from "react-icons/md";
import CardTeam from "@/components/Card/CardTeam";
import DataMatch from "../../Json/Match.json";

export default function AllTeam() {
  return (
    <>
      <div className="w-full mt-28 lg:max-w-6xl md:px-20 sm:px-10 px-2 mb-10 lg:mx-auto h-fit">
        <h2 className="uppercase font-bold pb-10 text-2xl text-black-main">
          All TEAM
        </h2>
        <div className="divide-y-2 divide-neutral-300 sm:gap-2">
          {DataMatch.map((item, index) => {
            return (
              <>
                <div className="flex items-center gap-4">
                  <p className="text-lg">  {index + 1}</p>
            
                  <div className="flex justify-between w-full items-center">
                    <CardTeam key={item.id} item={item} />
                    <Link href={`/Team/${item.id}`}>
                      <button className="bg-primary-red hover:-translate-y-1 active:duration-200 ease-out  focus:bg-yellow-200 flex px-2 sm:mt-6 mt-4 sm:pt-0.5 rounded-sm  sm:w-24 justify-between items-center text-light-grey font-semibold text-xs  uppercase tracking-widest">
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
