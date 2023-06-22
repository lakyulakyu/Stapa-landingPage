"use client";
import React, { useRef } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import CardVideos from "../../components/Card/CardVideos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Video = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/7vs-Xz9uGwc",
    headline: "HIGHLIGHT MULIA HATI VS MUTIARA SOLO 5-0",
    time: "03:09",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/ktBGuVsxTIQ",
    headline: "HighLight Putra Gendangan vs Walisongo 1-0",
    time: "04:07",
  },

  {
    id: 3,
    url: "https://www.youtube.com/embed/BevJqPWHtOg",
    headline: "HIGHLIGHT SKM KRJAN VS PSHW ANDBOY FC 1-0",
    time: "02:26",
  },

  {
    id: 4,
    url: "https://www.youtube.com/embed/xwade8dZ-OY",
    headline: "Technical Meeting ASKOT Batu bersama LabMokletScience",
    time: "00.51",
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
          <h1 className="md:text-2xl lg:text-4xl text-xl h-fit mt-4 text-center max-w-2xl w-full mx-auto font-normal text-black-main uppercase">
            Videos
          </h1>
        </div>
        <div className=" flex   text-2xl">
          <button onClick={prev}>
            <h1 className="rotate-180 border-l-2 hover:bg-slate-100  py-4 px-2 text-gray-400">
              <CgArrowLongRight />
            </h1>
          </button>
          <button
            onClick={next}
            className="px-2 hover:bg-slate-100 rounded-r-lg py-4 text-primary-red  "
          >
            <CgArrowLongRight />
          </button>
        </div>
      </div>
      <div className="w-full">
        <Slider {...settings} ref={sliderRef} className="w-full h-fit">
          {Video.map((item) => (
            <>
              <CardVideos   key={item.id} item={item} />
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedVideos;
