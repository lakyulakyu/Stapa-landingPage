"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import { CgArrowLongRight } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import MatchNow from "./Card/MatchNow";
import DataMatch from "../Json/Match";

const Match = () => {
  const sliderRef = useRef(null);
  const next = () => sliderRef.current.slickNext(+1);
  const prev = () => sliderRef.current.slickPrev(-1);

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <>
      <div className="h-fit pb-10 w-full  mx-auto">
        <div className="max-w-7xl mx-auto mt-10 w-full font-poppins font-semibold">
          <div className="flex justify-between items-center ">
            <div>
              <h2 className="uppercase font-bold text-2xl text-black-main">
                Match shcedule
              </h2>
              <Link href={"/Matched"}>
                <p className="text-base text-zinc-500 font-medium flex items-center gap-x-1 mt-1 cursor-pointer">
                  View all matches <IoMdAdd />
                </p>
              </Link>
            </div>
            <div className=" flex divide-x-2  text-2xl">
              <button onClick={prev} className="">
                <h1 className="rotate-180 hover:bg-slate-100 rounded-lg py-4 px-2 text-gray-400">
                  <CgArrowLongRight />
                </h1>
              </button>
              <button
                onClick={next}
                className="px-2 text-red-500 hover:bg-slate-100 rounded-lg py-4  "
              >
                <CgArrowLongRight />
              </button>
            </div>
          </div>
        </div>
        <div className=" h-full md:mt-10  ">
          <Slider
            {...settings}
            ref={sliderRef}
            className="w-full h-full md:mt-10 translate-x-7 "
          >
            {DataMatch.map((item) => {
                const handleClick = (e) => {
                  if (! (item.score_tim_1 || item.score_tim_2) ) {
                    e.preventDefault();
                  }
                };
              return (
                <>
                  <div className="h-fit  py-8 w-full min-h-fit hover:bg-black hover:bg-opacity-5 max-w-xs min-w-fit px-6 divide-red-600">
                      <div className="flex justify-between items-end pb-4">
                        <div className="flex gap-2">
                          {" "}
                          <Image
                            key={item.id}
                            alt={item.name_tim1}
                            src={item.tim_1}
                            width={100}
                            height={100}
                            className="h-16 w-16"
                          />
                          <Image
                            key={item.id}
                            src={item.tim_2}
                            alt="logo"
                            width={100}
                            height={100}
                            className="h-16 w-16"
                          />
                        </div>

                        {(item.score_tim_1 || item.score_tim_2) ? (
                          <h1 className="text-lg font-poppins font-bold text-red-600">
                            {item.score_tim_1} - {item.score_tim_2} : W
                          </h1>
                        ) : (
                          <h1 className="text-lg font-poppins font-bold text-gray-400">
                        W
                          </h1>
                        )}
                      </div>
                      <div className=" text-start pt-4 capitalize">
                        <h1 className="text-base font-semibold capitalize"></h1>
                        <p className="text-xs text-gray-500 -mt-1">
                          {item.liga}
                        </p>
                        <p className="text-xs font-semibold mt-2">
                          {item.date}
                        </p>
                        <p className="text-xs font-semibold">
                          {item.time} <span>{item.place}</span>
                        </p>
                        {(item.score_tim_1 && item.score_tim_2) ? (
                        <Link href={"/detail"} onClick={handleClick}>
                          <button className="bg-primary-red font-poppins text-white font-semibold justify-between text-sm flex items-center gap-2 px-2 py-1 mt-6 w-24">
                            More <IoMdArrowDropright />
                          </button>
                        </Link> ) : (
                          <button className="bg-slate-400 font-poppins text-white font-semibold justify-between text-sm flex items-center gap-2 px-2 py-1 mt-6 w-24">
                          More <IoMdArrowDropright />
                        </button>)}
                      </div>
                  </div>
                </>
              );
            })}
          </Slider>
          <MatchNow />
        </div>
      </div>
    </>
  );
};

export default Match;
