"use client";
import { CgArrowLongRight } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";

import Link from "next/link";
import React from "react";
import CardVideos from "./Card/CardVideos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedVideos = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
  };

  return (
    <div
    id="video"
      className="mx-auto w-full font-poppins font-semibold h-full"
    >
      <div className="flex justify-between items-center absolute max-w-7xl z-50 w-full ">
        <div>
          <h2 className="uppercase font-bold text-2xl text-white">
            Featured videos
          </h2>
          <Link href={"/#"}>
            <p className="text-base text-zinc-500 font-medium flex items-center gap-x-1 mt-1 cursor-pointer">
              View all matches <IoMdAdd />
            </p>
          </Link>
        </div>
        <div className=" flex divide-x-2 divide-gray-400  text-2xl">
          <button className="">
            <h1 className="rotate-180 hover:bg-slate-100 rounded-r-lg py-4 px-2 text-gray-400">
              <CgArrowLongRight />
            </h1>
          </button>
          <button className="px-2 hover:bg-slate-100 rounded-r-lg py-4 text-gray-400  ">
            <CgArrowLongRight />
          </button>
        </div>
      </div>

      <div className="bg-red-200 w-full">
        <div></div>
        <Slider {...settings} className="w-full h-fit">
          {Array.from({ length: 4 }).map((_, index) => (
            <CardVideos />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedVideos;
