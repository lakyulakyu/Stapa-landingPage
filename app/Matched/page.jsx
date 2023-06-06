import React from "react";
import Link from "next/link";
import Image from "next/image";
import DataMatch from "../../Json/Match";
import MatchNow from "@/components/Card/MatchNow";
import { GiSoccerField } from "react-icons/gi";

const MatchCard = () => {
  return (
    <>
      <div className="h-full md:mt-32 pb-10 md:pt-0 pt-20">
        <MatchNow />
        <div className="max-w-7xl mx-auto  sm:mt-8 w-full mt-20 font-poppins font-semibold">
          <div className="max-[350px]:mx-auto">
            <p className="uppercase sm:font-semibold text-center bg-neutral-200  max-[350px]:mx-auto font-normal text-lg sm:text-xl max-w-3xl mx-auto text-neutral-500 py-2">
              Match schedule
            </p>
          </div>
        </div>
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
                    {/* <Link href={`/Matched/${item.id}`}> */}
                    <p className="text-sm mb-2 text-center text-primary-red font-semibold -mt-1">
                      {item.liga}
                    </p>
                    <div className=" lg:flex mx-auto text-center  h-fit w-full min-h-fit hover:bg-opacity-5 min-w-fit ">
                      <div className="w-full">
                        <div className="max-[350px]:flex-col flex justify-center items-center gap-4">
                          <p className="font-semibold text-red-500 text-sm md:text-lg capitalize">
                            {item.name_tim1}
                          </p>
                          <Image
                            key={item.id}
                            src={item.tim_1 || "/Logo-default.png"}
                            alt="logo"
                            width={100}
                            height={100}
                            className="h-12 max-[350px]:mx-auto w-fit"
                          />

                          {item.score_tim_1 || item.score_tim_2 ? (
                            <p className="bg-primary-red text-sm md:text-lg w-16 rounded-lg sm:px-2 px-2 sm:w-fit max-[350px]:mx-auto text-white py-1 font-semibold">
                              {item.score_tim_1} - {item.score_tim_2}
                            </p>
                          ) : (
                            <p className="bg-gray-200 text-sm md:text-lg rounded-lg sm:px-2 px-2 w-fit max-[350px]:mx-auto py-1 font-semibold">
                              {item.time}
                            </p>
                          )}

                          <Image
                            key={item.id}
                            src={item.tim_2 || "/Logo-default.png"}
                            alt="logo"
                            width={100}
                            height={100}
                            className="h-12 max-[350px]:mx-auto w-fit"
                          />

                          <p className="font-semibold text-primary-red text-lg capitalize">
                            {item.name_tim2}
                          </p>
                        </div>
                        <div></div>
                      </div>
                    </div>
                    {item.score_tim_1 || item.score_tim_2 ? (
                      <p className="text-center uppercase text-neutral-400 mt-4 font-normal text-sm">
                        Sudah berlangsung
                      </p>
                    ) : (
                      <div className="justify-center w-full mt-4 flex  gap-4 text-center pb-4 capitalize">
                        {item.status ? (
                          <p className="bg-primary-red rounded-md uppercase text-white py-1 px-4">
                            {item.status}
                          </p>
                        ) : (
                          <div>
                            <p className="text-xs font-semibold ">
                              {item.date}
                            </p>
                            <p className="text-xs font-semibold">
                              {item.time} <span>{item.place}</span>
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                    {/* </Link> */}
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
