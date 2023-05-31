import React from "react";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import Image from "next/image";
import DataMatch from "../../Json/Match";
import MatchNow from "@/components/Card/MatchNow";

const MatchCard = () => {
  return (
    <>
      <div className="h-full pb-10 ">
        <div className="max-w-7xl  mx-auto mt-8 w-full font-poppins font-semibold">
          <div className="flex justify-between items-center ">
            <div>
              <h2 className="uppercase font-bold text-2xl text-black-main">
                Match shcedule
              </h2>
              <Link href={"/#"}>
                <p className="text-base text-zinc-500 font-medium flex items-center gap-x-1 mt-1 cursor-pointer">
                  View all matches <IoMdAdd />
                </p>
              </Link>
            </div>
          </div>
        </div>
        <MatchNow/>
        <div className="w-full divide-y-2 divide-gray-300 mt-10 h-fit">
          {DataMatch.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <>
                <div className="w-full  mx-auto max-w-2xl  divide-black ">
                  <div
                    className={` ${
                      isEven ? "bg-slate-100" : "bg-white"
                    } hover:bg-slate-100 py-4`}
                  >
                    <Link href={`/Matched/${item.id}`}>
                      <p className="text-sm mb-2 text-center text-primary-red font-semibold -mt-1">
                        {item.liga}
                      </p>
                      <div className=" lg:flex mx-auto text-center  h-fit w-full min-h-fit hover:bg-opacity-5 min-w-fit ">
                        <div className="w-full">
                          <div className="flex justify-center items-center gap-4">
                            <p className="font-semibold text-red-500 text-lg capitalize">
                              {item.name_tim1}
                            </p>
                            <Image
                              key={item.id}
                              src={item.tim_1}
                              alt="logo"
                              width={100}
                              height={100}
                              className="h-12 w-fit"
                            />

                            {item.score_tim_1 || item.score_tim_2 ? (
                              <p className="bg-primary-red text-lg rounded-lg px-2 text-white py-1 font-semibold">
                                {item.score_tim_1} - {item.score_tim_2}
                              </p>
                            ) : (
                              <p className="bg-gray-200 text-lg rounded-lg px-2 py-1 font-semibold">
                                {item.time}
                              </p>
                            )}

                            <Image
                              key={item.id}
                              src={item.tim_2}
                              alt="logo"
                              width={100}
                              height={100}
                              className="h-12 w-fit"
                            />
                            <p className="font-semibold text-primary-red text-lg capitalize">
                              {item.name_tim1}
                            </p>
                          </div>
                          <div></div>
                        </div>
                      </div>
                      {item.score_tim_1 || item.score_tim_2 ? (
                        ""
                      ) : (
                        <div className=" justify-center w-full mt-4 flex  gap-4 text-center pb-4 capitalize">
                          <p className="text-xs font-semibold ">{item.date}</p>
                          <p className="text-xs font-semibold">
                            {item.time} <span>{item.place}</span>
                          </p>
                        </div>
                      )}
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
};

export default MatchCard;
