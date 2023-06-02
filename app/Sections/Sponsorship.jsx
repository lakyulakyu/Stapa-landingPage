"use client";
import Image from "next/image";
import React from "react";
import { IoMdAdd } from "react-icons/io";
import Slider from "react-slick";

const Sponsorship = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const imageSponsor = [
    {
      id: 1,
      url: "https://www.freepnglogos.com/uploads/logo-tokopedia-png/tokopedia-apa-itu-startup-pengertian-cara-memulai-dan-1.png",
    },
    {
      id: 2,
      url: "https://www.freepnglogos.com/uploads/shopee-logo/logo-shopee-png-images-download-shopee-1.png",
    },
    {
      id: 3,
      url: "https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png",
    },
    {
      id: 4,
      url: "https://www.freepnglogos.com/uploads/starbucks-logo-png-1.png",
    },
    {
      id: 5,
      url: "https://www.freepnglogos.com/uploads/hoyoverse-logo-png/hoyoverse-logo-transparent-png-1.png",
    },
    {
      id: 6,
      url: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png",
    },
    {
      id: 7,
      url: "https://www.freepnglogos.com/uploads/toyota-logo-png/toyota-logos-download-4.png",
    },
    {
      id: 8,
      url: "https://www.freepnglogos.com/uploads/tupperware-png-logo/tupperware-culinary-stars-png-logo-9.png",
    },
  ];

  const isDetailPage =
  typeof window !== "undefined"
    ? window.location.pathname.includes("/Admine")
    : undefined;
if (isDetailPage) {
  return null;
}
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-10 md:mx-auto mt-12 w-full font-poppins font-semibold h-fit">
      <div>
        <h2 className="uppercase font-normal text-lg md:font-bold md:text-2xl text-black-main">
          Sponsorship
        </h2>
      </div>
      <div className="my-8">
        <Slider {...settings} className="w-full h-fit">
          {imageSponsor.map((item) => {
            return (
              <Image
                key={item.id}
                src={item.url}
                alt=""
                width={300}
                height={300}
                className="w-1/5 aspect-[3/2] object-contain mix-blend-color-burn px-6"
              />
            );
          })}
        </Slider>
        <div className="flex w-full h-48 px-8 mt-4">
          <div className="w-1/2">
            <Image
              src={
                "https://cdn.dribbble.com/users/2218729/screenshots/5726080/attachments/1236608/artboard_copy.png"
              }
              alt=""
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2">
            <Image
              src={
                "https://images.tokopedia.net/img/cache/730/kjjBfF/2023/1/24/2e4c6869-1fe1-4996-a249-9eb299025e40.jpg"
              }
              alt=""
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
