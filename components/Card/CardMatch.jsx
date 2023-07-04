import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";
import { GiSoccerField } from "react-icons/gi";

const CardMatch = ({ item }) => {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : null;
  const isEven = item.id % 2 === 0;

  return (
    <>
      <Link
        className={` ${isEven ? "" : "bg-neutral-100 "} `}
        href={`/Matched/$`}
      >
        <div
          key={item.id}
          className={` ${
            pathname === "/" ? "" : "flex flex-col-reverse md:flex-col"
          } hover:bg-neutral-100 h-80 py-4  mx-auto rounded-lg border w-full min-h-fit  min-w-fit px-6`}
        >
          <div className="pb-4">
            <div className="flex justify-evenly w-full items-center sm:justify-between">
              <p
                className={
                  pathname == "/"
                    ? "hidden"
                    : "md:block font-semibold text-2xl underline text-primary-red max-md:hidden "
                }
              >
                {item.score_tim_1}
              </p>

              <div
                className={` ${
                  pathname === "/"
                    ? " hover:scale-110 h-24 "
                    : "max-lg:rounded-xl flex lg:h-28 flex-col max-lg:flex-row-reverse hover:scale-105 hover:-translate-x-2 max-lg:w-fit max-md:w-full md:min-w-[200px] min-w-fit w-24   "
                } border-2 bg-white py-2 px-1 rounded-s-3xl rounded-t-3xl  ease-out duration-300 `}
              >
                <Image
                  key={item.id}
                  alt={item.name_tim1}
                  src={item.tim_1 || "/Logo-default.png"}
                  width={100}
                  height={100}
                  className="h-10 object-contain w-fit mx-auto "
                />
                <p
                  className={`  ${
                    pathname === "/" ? " w-20" : " max-lg:w-full w-20"
                  }  text-xs uppercase text-center my-auto mx-auto  h-fit max-h-10 overflow-hidden`}
                >
                  {item.name_tim1}
                </p>
              </div>
              <div
                className={` ${ 
                  pathname === "/"
                    ? " hover:scale-110 h-24 "
                    : "max-lg:rounded-none flex lg:h-28 flex-col max-lg:flex-row hover:scale-105 hover:translate-x-2 max-lg:w-fit max-md:w-full md:min-w-[200px] min-w-fit w-24   "
                } border-2 bg-white py-2 px-1 rounded-e-3xl border-primary-red rounded-t-3xl  ease-out duration-300 `}
              >
                <Image
                  key={item.id}
                  src={item.tim_2 || "/Logo-default.png"}
                  alt="logo"
                  width={100}
                  height={100}
                  className="h-10 object-contain  mx-auto w-10 "
                />
                <p
                  className={`  ${
                    pathname === "/" ? " w-20" : " max-lg:w-full w-20"
                  }  text-xs uppercase text-center my-auto mx-auto  h-fit max-h-10 overflow-hidden`}
                >
                  {item.name_tim2}
                </p>
              </div>
              <p
                className={
                  pathname == "/"
                    ? "hidden"
                    : "md:block font-semibold text-2xl underline text-primary-red max-md:hidden "
                }
              >
                {item.score_tim_2}
              </p>
            </div>
            <p className="text-center mt-1 text-primary-red border-b-2 pb-1 border-neutral-200 font-medium ">
              VS
            </p>
            {item.score_tim_1 || item.score_tim_2 ? (
              <div
                className={`${
                  pathname === "/" ? "" : "md:hidden block"
                } text-lg sm:text-start text-center flex justify-evenly -mb-2 mt-1  w-full font-poppins font-bold text-red-600
                `}
              >
                <p>{item.score_tim_1}</p> - <p>{item.score_tim_2}</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div
            className={`${
              pathname === "/"
                ? ""
                : "max-md:text-center md:flex justify-between  items-center  capitalize"
            }
           w-full`}
          >
            <article>
              <p className="text-xs text-primary-red -mt-1">
                {item.liga}
                <span className=" ml-1 font-medium  text-neutral-400">
                  Group {item.group}
                </span>
              </p>
              <p className="text-xs font-semibold mt-2">{item.date}</p>
              <p
                className={`${
                  pathname == "/" ? "" : "  max-md:mx-auto "
                } text-xs font-semibold  flex gap-2 mt-2 w-fit`}
              >
                {item.time}
                <span className="border-l-2 border-black-main pl-2  flex gap-2">
                  <span className="text-lg">
                    <GiSoccerField />
                  </span>
                  {item.place}
                </span>
              </p>
            </article>

            {item.score_tim_1 && item.score_tim_2 ? (
              <Link href={`/Matched/${item.id}`}>
                <button className="bg-primary-red font-poppins text-white font-semibold justify-between text-sm flex items-center gap-2 px-2 py-1 mt-4 rounded-md w-full">
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
};

export default CardMatch;
