"use client";
import { CgArrowLongRight } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";

import Link from "next/link";
import React from "react";
import CardVideos from "./Card/CardVideos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Video = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    time: "20.12",
    liga: "solo premiere league",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    time: "20.12",
    liga: "solo premiere league",
  },

  {
    id: 3,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    time: "20.12",
    liga: "solo premiere league",
  },

  {
    id: 4,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    time: "20.12",
    liga: "solo premiere league",
  },
  {
    id: 5,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    liga: "solo premiere league",
    time: "20.12",
  },
  {
    id: 6,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    liga: "solo premiere league",
    time: "20.12",
  },
  {
    id: 7,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    time: "20.12",
    liga: "solo premiere league",
  },
  {
    id: 8,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    time: "20.12",
    liga: "solo premiere league",
  },
  {
    id: 9,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    time: "20.12",
    liga: "solo premiere league",
  },
];

const FeaturedVideos = ({ item }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div id="video" className="w-screen font-poppins font-semibold h-full">
      <div className="flex text-black-main justify-between mb-10 items-center mx-auto  max-w-7xl z-10 w-full ">
        <div>
          <h2 className="uppercase font-bold text-2xl">Featured videos</h2>
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
      <div className="w-full">
        <div></div>
        <Slider {...settings} className="w-full h-fit">
          {Video.map((item) => (
            <>
              <div className="">
                <CardVideos key={item.id} item={item} />
              </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedVideos;
