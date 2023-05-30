"use client";
import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import React, { useRef } from "react";
import DataNews from "../Json/News";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardLatestNews from "./Card/CardLatestNews";

const LatestNews = () => {
  const sliderRef = useRef(null);
  const next = () => sliderRef.current.slickNext(+1);
  const prev = () => sliderRef.current.slickPrev(-1);

  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
  };
  return (
    <div className="max-w-7xl mx-auto  w-full font-poppins font-semibold h-full">
      <div className="flex justify-between items-center ">
        <div>
          <h2 className="uppercase font-bold text-2xl text-black-main">
            Latest News
          </h2>
          <Link href={"/#"}>
            <p className="text-base text-zinc-500 font-medium flex items-center gap-x-1 mt-1 cursor-pointer">
              View all news <IoMdAdd />
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
      <div className="w-screen ">
        <div className="mt-10 w-screen  lg:translate-x-12">
          <Slider
            {...settings}
            ref={sliderRef}
            className="w-full min-h-fit h-full   "
          >
            {DataNews.map((item, index) => (
              <CardLatestNews key={index} item={item} index={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
