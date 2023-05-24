"use client";
import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import React, { useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MatchCard from "./MatchCard";

const MatchScedule = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const goToNext = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };
  return (
    <div>
      <div className="flex justify-between items-center px-10">
        <div>
          <h1 className="text-2xl font-medium">Match schedule</h1>
          <Link href={"/all_match"}>
            <p className="text-gray-500 -mt-1">view all matches +</p>
          </Link>
        </div>
        <div className=" flex divide-x-2  text-2xl">
          <button onClick={goToPrevious} className="">
            <h1 className="rotate-180 hover:bg-slate-100 rounded-lg py-4 px-2 text-gray-400">
              <CgArrowLongRight />
            </h1>
          </button>
          <button
            onClick={goToNext}
            className="px-2 text-red-500 hover:bg-slate-100 rounded-lg py-4  "
          >
            {" "}
            <CgArrowLongRight />
          </button>
        </div>
      </div>
      <div>
        <Carousel
          ref={carouselRef}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          selectedItem={currentSlide}
          infiniteLoop={true}
        >{Array.from({ length: 4 }).map((_, index) => (
            <MatchCard/>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MatchScedule;
