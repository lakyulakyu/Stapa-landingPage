"use client";
import { CgArrowLongRight } from "react-icons/cg";
import Link from "next/link";
import React, { useRef, useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardVideos from "./CardVideos";
import Slider from "react-slick";

const FeaturedVideos = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const goToNext = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-10 w-full px-10 absolute z-20">
        <div className="p-2">
          <h1 className="text-2xl text-white uppercase font-semibold">
            Match schedule
          </h1>
          <Link href={"/all_match"}>
            <p className="text-gray-500 text-xs font-semibold">
              view all matches +
            </p>
          </Link>
        </div>
        <div className=" flex divide-x-2  text-2xl">
          <button onClick={goToPrevious} className="">
            <h1 className="rotate-180 hover:bg-slate-100 rounded-r-lg py-4 px-2 text-gray-400">
              <CgArrowLongRight />
            </h1>
          </button>
          <button
            onClick={goToNext}
            className="px-2 text-red-500 hover:bg-slate-100 rounded-r-lg py-4  "
          >
            {" "}
            <CgArrowLongRight />
          </button>
        </div>
      </div>
      <div className="bg-red-200 ">
        <div></div>
        <Slider {...settings}>
          {Array.from({ length: 4 }).map((_, index) => (
            <CardVideos />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedVideos;
