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
      <Link className={` ${isEven ? "" : "bg-neutral-100 "} `} href={``}>
        <div
          key={item.id}
          className={` ${
            pathname === "/"
              ? " h-80"
              : "flex flex-col-reverse md:flex-col max-lg:h-fit h-80 "
          } hover:bg-neutral-100  py-4  mx-auto rounded-lg border w-full min-h-fit`}
        >
          <div className="pb-4">
            <div className="flex justify-evenly  items-center sm:justify-between">
              <p
                className={
                  pathname == "/"
                    ? "hidden"
                    : "lg:hidden max-sm:hidden font-semibold text-2xl underline text-primary-red  block"
                }
              >
                {item.score_tim_1}
              </p>

              <div
                className={` ${
                  pathname === "/"
                    ? " hover:scale-110 h-24 "
                    : "max-lg:rounded-xl flex lg:h-28  max-md:my-2  max-sm:rounded-s-3xl max-sm:rounded-t-3xl max-sm:flex-col min-h-[100px] flex-col max-lg:flex-row-reverse items-center hover:scale-105 hover:-translate-x-2 sm:min-w-fit max-lg:w-full  lg:w-24"
                } border-2 bg-white py-2 px-1 rounded-s-3xl ml-4 rounded-t-3xl  ease-out duration-300 `}
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
                    : "max-lg:rounded-xl max-sm:rounded-e-3xl max-md:my-2 min-h-[100px] max-sm:rounded-t-3xl flex lg:h-28  max-sm:flex-col flex-col items-center max-lg:flex-row hover:scale-105 hover:-translate-x-2 sm:min-w-fit max-lg:w-full  lg:w-24  "
                } border-2 bg-white py-2 px-1 rounded-e-3xl mr-4 border-primary-red rounded-t-3xl  ease-out duration-300 `}
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
                    : "lg:hidden max-sm:hidden  font-semibold text-2xl underline text-primary-red  block"
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
                  pathname === "/" ? "" : " lg:block hidden max-sm:block "
                } 
                `}
              >
                <div className=" text-lg sm:text-start text-center  -mb-2 mt-1 flex justify-evenly w-full font-poppins font-bold text-red-600">
                  <p>{item.score_tim_1}</p> - <p>{item.score_tim_2}</p>
                </div>
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
           w-full px-6`}
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
