"use client";
import React, { useRef } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import CardVideos from "../Card/CardVideos";
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

const FeaturedVideos = () => {
  const sliderRef = useRef(null);
  const next = () => sliderRef.current.slickNext(+1);
  const prev = () => sliderRef.current.slickPrev(-1);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="h-fit pb-10 w-full px-2 sm:px-10 max-w-7xl md:mx-auto">
      <div className="flex text-black-main justify-between mb-10 items-center mx-auto   z-10 w-full ">
        <div>
          <h2 className="uppercase font-normal text-lg md:font-bold md:text-2xl text-black-main">
            Featured videos
          </h2>
        </div>
        <div className=" flex divide-x-2 divide-gray-400  text-2xl">
          <button onClick={prev}>
            <h1 className="rotate-180 hover:bg-slate-100 rounded-r-lg py-4 px-2 text-gray-400">
              <CgArrowLongRight />
            </h1>
          </button>
          <button
            onClick={next}
            className="px-2 hover:bg-slate-100 rounded-r-lg py-4 text-gray-400  "
          >
            <CgArrowLongRight />
          </button>
        </div>
      </div>
      <div className="w-full">
        <div></div>
        <Slider {...settings} ref={sliderRef} className="w-full h-fit">
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
