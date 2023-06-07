"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import { CgArrowLongRight } from "react-icons/cg";
import { GiSoccerField } from "react-icons/gi";
import { IoMdAdd } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import MatchNow from "@/components/Card/MatchNow";
import DataMatch from "../../Json/Match";

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
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="h-fit max-w-7xl pb-10 w-full px-2 sm:px- md:mx-auto">
        <div className="mx-auto mt-10 w-full font-poppins font-semibold">
          <div className="flex justify-between items-center ">
            <div>
              <h2 className="uppercase font-normal text-lg md:font-bold md:text-2xl text-black-main">
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
        <div className=" h-full md:mt-10 ">
          <Slider
            {...settings}
            ref={sliderRef}
            className="w-full h-full divide-x-4 md:mt-10 md:translate-x-7 "
          >
            {DataMatch.map((item) => {
              return (
                <>
                  <div className="h-80 py-8 w-full min-h-fit border-l border-black-main  hover:bg-black hover:bg-opacity-5 sm:max-w-xs min-w-fit px-6 divide-red-600">
                    <div className="pb-4">
                      <div className="flex  justify-evenly w-full sm:justify-between">
                        <div>
                          <Image
                            key={item.id}
                            alt={item.name_tim1}
                            src={item.tim_1 || "/Logo-default.png"}
                            width={100}
                            height={100}
                            className="h-16 object-contain w-16"
                          />
                          <p className="w-20 text-sm h-10 overflow-hidden">
                            {item.name_tim1}
                          </p>
                        </div>
                        <div>
                          <Image
                            key={item.id}
                            src={item.tim_2 || "/Logo-default.png"}
                            alt="logo"
                            width={100}
                            height={100}
                            className="h-16 object-contain w-16"
                          />
                          <p className="w-20 text-sm h-10 overflow-hidden ">
                            {item.name_tim2}
                          </p>
                        </div>
                      </div>

                      {item.score_tim_1 || item.score_tim_2 ? (
                        <div className="text-lg sm:text-start  text-center flex justify-evenly mt-1 w-full font-poppins font-bold text-red-600">
                          <p>{item.score_tim_1}</p> - <p>{item.score_tim_2}</p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className=" text-start pt-4 capitalize">
                      <h1 className="text-base font-semibold capitalize"></h1>
                      <p className="text-xs text-gray-500 -mt-1">
                        {item.liga}{" "}
                        <span className="text-primary-red ml-1 font-medium ">
                          Group {item.group}
                        </span>
                      </p>
                      <p className="text-xs font-semibold mt-2">{item.date}</p>
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
                          <button className="bg-primary-red font-poppins text-white font-semibold justify-between text-sm flex items-center gap-2 px-2 py-1 mt-6 w-24">
                            More <IoMdArrowDropright />
                          </button>
                        </Link>
                      ) : (
                        ""
                      )}
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
