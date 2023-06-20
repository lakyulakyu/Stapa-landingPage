import React from "react";
import Link from "next/link";
import Image from "next/image";
import DataMatch from "../../Json/Match";
import MatchNow from "@/components/Card/MatchNow";

const MatchCard = () => {
  return (
    <>
      <div className="h-full md:mt-32 w-full  mx-auto max-w-2xl  pb-10 md:pt-0 pt-20">
        <MatchNow />
        <div className="max-w-7xl mx-auto  sm:mt-8 w-full mt-20 font-poppins font-semibold">
          <div className="max-[350px]:mx-auto">
            <h1 className="text-xl h-fit sm:text-4xl text-center max-w-2xl w-full bg-neutral-100 mx-auto font-normal text-black-main uppercase">
              Match schedule
            </h1>
          </div>
        </div>
        <div className="w-full divide-y-2 divide-gray-300 mt-10 h-fit">
          {DataMatch.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <>
                <div className=" divide-black ">
                  <div
                    className={` ${
                      isEven ? "" : "bg-neutral-100"
                    } hover:bg-neutral-100 py-4`}
                  >
                    <Link href={`/Matched/${item.id}`}>
                      <p className="text-sm mb-2 text-center text-primary-red font-semibold -mt-1">
                        {item.liga}
                      </p>

                      <table className="min-w-full">
                        <tbody>
                          <tr>
                            <td className="px-6 py-4  w-60 ">
                              {" "}
                              <p className="font-semibold text-end uppercase text-lg ">
                                {item.name_tim1}
                              </p>
                            </td>
                            <td className="py-4 w-24  ">
                              <Image
                                key={item.id}
                                src={item.tim_1 || "/Logo-default.png"}
                                alt="logo"
                                width={100}
                                height={100}
                                className="h-12 mx-auto w-fit"
                              />
                            </td>
                            <td className=" py-4 w-24  ">
                              {" "}
                              {item.score_tim_1 || item.score_tim_2 ? (
                                <p className="bg-primary-red text-sm md:text-lg w-16 rounded-lg sm:px-2 mx-auto  sm:w-fit  text-white py-1 font-semibold">
                                  {item.score_tim_1} - {item.score_tim_2}
                                </p>
                              ) : (
                                <p className="bg-neutral-200 text-sm md:text-lg rounded-lg sm:px-2 px-2 w-fit mx-auto py-1 font-semibold">
                                  {item.time}
                                </p>
                              )}
                            </td>
                            <td className=" w-24 py-4 ">
                              <Image
                                key={item.id}
                                src={item.tim_2 || "/Logo-default.png"}
                                alt="logo"
                                width={100}
                                height={100}
                                className="h-12 mx-auto w-fit"
                              />
                            </td>
                            <td className="px-6 py-4 w-60 max-w-[240px]">
                              <p className="font-semibold  text-start uppercase text-lg ">
                                {item.name_tim2}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>

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
