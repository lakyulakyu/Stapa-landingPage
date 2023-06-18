"use client";
import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import React, { useRef } from "react";
import DataNews from "../../Json/News";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardLatestNews from "@/components/Card/CardLatestNews";

const LatestNews = () => {
  const sliderRef = useRef(null);
  const next = () => sliderRef.current.slickNext(+1);
  const prev = () => sliderRef.current.slickPrev(-1);

  // var settings = {
  //   infinite: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   dots: false,
  //   arrows: false,
  //   autoplay: true,
  //   autoplaySpeed: 6000,
  //   responsive: [
  //     {
  //       breakpoint: 1100,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 920,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 680,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <div className="md:max-w-7xl mb-10 mx-auto px-2 sm:px-10 md:mx-auto  w-full font-poppins font-semibold h-full">
      <div className="flex justify-between items-center ">
        <div>
          <h1 className="text-xl h-fit sm:text-4xl mt-4 text-center max-w-2xl w-full mx-auto font-normal text-black-main uppercase">
            Latest News
          </h1>
          <Link href={"/News"}>
            <p className="text-base text-zinc-500 font-medium flex items-center gap-x-1 mt-1 cursor-pointer">
              View all news <IoMdAdd />
            </p>
          </Link>
        </div>
        <div className=" flex text-2xl">
          <button
            // onClick={prev}
            className=""
          >
            <h1 className="rotate-180 border-l-2 hover:bg-slate-100  py-4 px-2 text-gray-400">
              <CgArrowLongRight />
            </h1>
          </button>
          <button
            // onClick={next}
            className="px-2 text-red-500 hover:bg-slate-100 py-4  "
          >
            <CgArrowLongRight />
          </button>
        </div>
      </div>
      <div className="">
        <div className="mt-10 ">
          {/* <Slider
            {...settings}
            ref={sliderRef}
            className="w-full min-h-fit h-full   "
          >
            {DataNews.map((item, index) => (
              <CardLatestNews key={index} item={item} index={index} />
            ))}
           
          </Slider> */}
          <h1 className="text-center px-5 font-normal bg-neutral-200 text-neutral-400 pt-12 uppercase h-32 max-w-3xl mx-auto">
            belum ada berita terkini
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
