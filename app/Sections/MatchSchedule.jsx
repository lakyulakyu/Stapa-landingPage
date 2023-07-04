"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import Slider from "react-slick";
import CardMatch from "@/components/Card/CardMatch";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MatchNow from "@/components/Card/MatchNow";
import DataMatch from "../../Json/Match.json";

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
    // autoplay: true,
    // autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
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
      <div className="h-fit max-w-7xl pb-10 w-full px-2 md:px-10  md:mx-auto">
        <div className="mx-auto mt-10 w-full font-poppins font-semibold">
          <div className="flex justify-between max-lg:px-10 items-center ">
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
            className="w-full h-full   divide-x-4 "
          >
            {DataMatch.map((item) => {
              return <CardMatch key={item.id} item={item} />
            })}
          </Slider>
          <MatchNow />
        </div>
      </div>
    </>
  );
};

export default MatchSchedule;
