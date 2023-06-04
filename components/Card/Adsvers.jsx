"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dataNews = [
  {
    id: 1,
    url: "https://i0.wp.com/mahatekno.com/wp-content/uploads/2020/09/contoh-iklan-sepatu-nike.jpg?resize=640%2C327&ssl=1",
  },
  {
    id: 2,
    url: "https://images.now-tv.com/shares/vod_images/vi_voddrama_series_desc_t/202002/en_us/original_vertical/s202002140102044",
  },
  {
    id: 3,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHsLWSYQHPE7GGAlhE0k8SbgdIwL13i1fmVD97m-bZ52i5nDU1eQ78neW2PQQau6D66Wg&usqp=CAU",
  },
  {
    id: 4,
    url: "https://i.ytimg.com/vi/TInq_F1LfZE/maxresdefault.jpg",
  },
];

const Advers = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <>
      <div className="max-w-7xl mx-auto h-fit ">
        {/* <Slider {...settings} className="w-full h-fit">
          {dataNews.map((item) => (
            <div key={item.id} className="w-full object-cover ">
              <div className="object-cover h-[35vh] max-[md]:h-[20vh]">
                <Image
                  src={item.url}
                  alt=""
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </Slider> */}
        <h1 className="text-center bg-neutral-200 text-neutral-400 pt-16 h-52 mx-auto">
          sponsor space available
        </h1>
      </div>{" "}
    </>
  );
};

export default Advers;
