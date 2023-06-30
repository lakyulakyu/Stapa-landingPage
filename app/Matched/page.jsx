import React from "react";
import Link from "next/link";
import Image from "next/image";
import DataMatch from "../../Json/Match";
import { IoMdArrowDropright } from "react-icons/io";
import { GiSoccerField } from "react-icons/gi";
import { format, parseISO } from "date-fns";
import idLocale from "date-fns/locale/id";
const Data = [
  {
    id: 1,
    item: "sepakbola",
  },
  {
    id: 2,
    item: "sepakbola",
  },
];

const Matched = () => {
  return (
    <>
      <div className="h-full md:mt-12 w-full  mx-auto  pb-10 md:pt-0 pt-20">
        <div className="max-w-7xl mx-auto  sm:mt-8 w-full mt-20 font-poppins font-semibold">
          <div className="max-[350px]:mx-auto sticky top-28">
            <h1 className="text-xl h-fit sm:text-4xl   text-center max-w-2xl w-full mx-auto font-normal text-black-main uppercase">
              Match schedule
            </h1>
          </div>
        </div>
        <div className="bg-slate-300">
          {Data.map((item) => {
            <li>{item.item}</li>;
          })}
        </div>
        <div className="w-full">
          <div className="w-full lg:gap-y-8 py-2  grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3  divide-gray-300 mt-10 h-fit">
            {DataMatch.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <>
                  <Link href={`/Matched/${item.id}`}>
                    <div
                      key={item.id}
                      className={` ${
                        isEven ? "" : "bg-neutral-100"
                      } hover:bg-neutral-100 
                    className="h-80 py-8  mx-auto rounded-lg border w-full min-h-fit sm:max-w-xs min-w-fit px-6`}
                    >
                      <div className="pb-4">
                        <div className="flex  justify-evenly w-full sm:justify-between">
                          <div className="border-2 bg-white py-2 px-1 rounded-s-3xl rounded-t-3xl hover:scale-125 hover:-translate-y-3 ease-out duration-300 ">
                            <Image
                              key={item.id}
                              alt={item.name_tim1}
                              src={item.tim_1 || "/Logo-default.png"}
                              width={100}
                              height={100}
                              className="h-10 object-contain mx-auto w-10 "
                            />
                            <p className="w-20 text-xs uppercase text-center h-10 overflow-hidden">
                              {item.name_tim1}
                            </p>
                          </div>
                          <div className="border-2 py-2 px-1 border-red-500 rounded-e-3xl rounded-t-3xl hover:scale-125 hover:-translate-y-3 duration-300">
                            <Image
                              key={item.id}
                              src={item.tim_2 || "/Logo-default.png"}
                              alt="logo"
                              width={100}
                              height={100}
                              className="h-10 object-contain  mx-auto w-10 "
                            />
                            <p className="w-20 text-xs text-center items-center h-10 overflow-hidden ">
                              {item.name_tim2}
                            </p>
                          </div>
                        </div>
                        <p className="text-center mt-1 text-primary-red border-b-2 pb-1 border-neutral-200 font-medium ">
                          VS
                        </p>

                        {item.score_tim_1 || item.score_tim_2 ? (
                          <div className="text-lg sm:text-start text-center flex justify-evenly -mb-2 mt-1  w-full font-poppins font-bold text-red-600">
                            <p>{item.score_tim_1}</p> -{" "}
                            <p>{item.score_tim_2}</p>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="text-start capitalize">
                        <h1 className="text-base font-semibold capitalize"></h1>
                        <p className="text-xs text-primary-red  -mt-1">
                          {item.liga}{" "}
                          <span className=" ml-1 font-medium  text-neutral-400">
                            Group {item.group}
                          </span>
                        </p>
                        <p className="text-xs font-semibold mt-2">
                          {item.date}
                        </p>
                        <p className="text-xs font-semibold flex gap-2 mt-2 ">
                          {item.time}{" "}
                          <span className="border-l-2 border-black-main pl-2 flex gap-2">
                            <span className="text-lg">
                              {" "}
                              <GiSoccerField />
                            </span>
                            {item.place}
                          </span>
                        </p>
                        {item.score_tim_1 && item.score_tim_2 ? (
                          <Link href={`/Matched/${item.id}`}>
                            <button className="bg-primary-red font-poppins text-white font-semibold justify-between text-sm flex items-center gap-2 px-2 py-1 mt-6 w-full">
                              More <IoMdArrowDropright />
                            </button>
                          </Link>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Matched;

{
  /* {DataMatch.map((item, index) => {
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
          })} */
}
