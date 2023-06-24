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

const MatchSchedule = () => {
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
              <h1 className="md:text-2xl lg:text-4xl text-xl h-fit  mt-4 text-center max-w-2xl w-full mx-auto font-normal text-black-main uppercase">
                Match shcedule
              </h1>
              <Link href={"/Matched"}>
                <p className="text-base text-zinc-500 font-medium flex items-center gap-x-1 mt-1 cursor-pointer">
                  View all matches <IoMdAdd />
                </p>
              </Link>
            </div>
            <div className=" flex  text-2xl">
              <button onClick={prev} className="">
                <h1 className="rotate-180 border-l-2  py-4 px-2 text-gray-400">
                  <CgArrowLongRight />
                </h1>
              </button>
              <button onClick={next} className="px-2 text-red-500  py-4  ">
                <CgArrowLongRight />
              </button>
            </div>
          </div>
        </div>
        <div className="h-full md:mt-10 ">
          <Slider
            {...settings}
            ref={sliderRef}
            className="w-full h-full  divide-x-4 "
          >
            {DataMatch.map((item) => {
              return (
                <>
                  <div
                    key={item.id}
                    className="h-80 py-8 sm:border-r-2 w-full min-h-fit sm:max-w-xs min-w-fit px-6"
                  >
                    <div className="pb-4">
                      <div className="flex  justify-evenly w-full sm:justify-between">
                        <div className="border-2 py-2 px-1 rounded-s-3xl rounded-t-3xl hover:scale-125 hover:-translate-y-3 ease-out duration-300 ">
                          <Image
                            key={item.id}
                            alt={item.name_tim1}
                            src={item.tim_1 || "/Logo-default.png"}
                            width={100}
                            height={100}
                            className="h-10 object-contain mx-auto w-10 mix-blend-color-burn"
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
                          <p>{item.score_tim_1}</p> - <p>{item.score_tim_2}</p>
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
                          <button className="bg-primary-red font-poppins text-white font-semibold justify-between text-sm flex items-center gap-2 px-2 py-1 mt-6 w-full">
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

export default MatchSchedule;
