import React from "react";
import Link from "next/link";
import { MdArrowRight } from "react-icons/md";
import Image from "next/image";
import DataMatch from "../../Json/Match";

export default function AllTeam() {
  return (
    <>
      <div className="w-full mt-28 max-w-6xl mx-auto h-fit">
        <h2 className="uppercase font-bold pb-10 text-2xl text-black-main">
          All TEAM
        </h2>
        <div className=" grid grid-cols-4">
          {DataMatch.map((item) => {
            return (
              <>
                <div className="hover:scale-105 h-96 divide-x-8 divide-primary-red ">
                  <div>
                    <Image
                      alt=""
                      height={1000}
                      width={1000}
                      src={item.tim_1 || "/Logo-default.png"}
                      className="w-full aspect-[3/2] object-contain mix-blend-color-burn"
                    />
                    <h1 className="text-center mt-5 text-lg text-primary-red uppercase font-semibold tracking-widest">
                      {item.name_tim1}
                    </h1>
                  </div>
                  <div className=" w-full hover:bg-slate-200 shadow-sm  px-3 container mx-auto ">
                    <div className="text-center text-sm justify-between flex pt-8 text-overflow-ellipsis overflow-ellipsis break-all max-w-[300px]  overflow-clip capitalize font-semibold  bottom-0">
                      <h2 className="text-black-main text-xl uppercase font-medium">
                        Total Player
                      </h2>
                      <p className="text-primary-red ">30</p>
                    </div>
                    <Link href={`/Team/${item.id}`}>
                      <button className="bg-primary-red hover:-translate-y-1 active:duration-200 ease-out  focus:bg-yellow-200 flex px-2 mt-6 pt-0.5 w-24 justify-between items-center text-light-grey font-semibold text-xs  uppercase tracking-widest">
                        <p>Detail</p>
                        <span className="text-2xl ">
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
