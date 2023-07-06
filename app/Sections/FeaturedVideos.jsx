"use client";
import React, { useRef, useEffect, useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import CardVideos from "../../components/Card/CardVideos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedVideos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);

  async function fetchVideos() {
    try {
      const response = await fetch(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAdzQyw7F__Nr1IfTMFh-GGhwvhG6wMAG0&channelId=UCeHsWLotqZDJTdl1xJZLk-w&part=snippet&maxResults=10"
      );
      const data = await response.json();

      console.log(data);
      const videos = data.items.map((item) => ({
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url,
        videoId: item.id.videoId,
        description: item.snippet.description,
      }));

      setVideos(videos);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  }
  const sliderRef = useRef(null);
  const next = () => sliderRef.current.slickNext(+1);
  const prev = () => sliderRef.current.slickPrev(-1);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
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
      <div className="flex text-black-main max-sm:px-10 justify-between  mb-10 items-center mx-auto  z-10 w-full ">
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
          {videos.map((video) => (
            <CardVideos key={video.videoId} video={video} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedVideos;
