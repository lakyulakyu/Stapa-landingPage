"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Link from "next/link";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Hero = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };


  return (
    <div className="w-screen ">
      {/* <Slider {...settings} className="w-full h-fi"> */}
        {/* {heroContent.map((item) => {
          return ( */}
            <div
              className="lg:h-screen md:h-[50vh] h-48 w-screen bg-cover bg-no-repeat"
            >
              {/* <div className="font-poppins relative md:top-1/4  lg:top-2/4 top-1/4 sm:top-1/2  lg:max-w-6xl md:mx-20 xl:max-w-7xl px-2 sm:px-0 sm:mx-10  lg:mx-auto text-light-grey ">
                <h4 className="text-lg uppercase font-semibold">
                  {item.number}
                </h4>
                <h1 className="lg:text-4xl md:text-2xl text-sm sm:mt-2 font-bold w-2/3 sm:w-1/2">
                  {item.content}
                </h1>
                <Link href={'/#'}>
                  <button className="bg-primary-red mt-8 px-5 text-lg py-2 font-normal flex items-center gap-x-2">
                    View Now <IoMdArrowDropright size={26} />
                  </button>
                </Link>
              </div> */}
              <div className="absolute w-screen h-full top-0 -z-10">
                <div className="absolute opacity-30 md:h-[50vh] h-48 lg:h-screen w-full bg-primary-red"></div>
                <div className="flex lg:h-96 h-32 mx-auto lg:mt-40 mt-20  w-fit">
                  <Image
                    src={"/Logo.png"}
                    alt=""
                    width={1000}
                    height={1000}
                    className="md:w-full md:h-full h-24 w-fit  object-contain lg:p-20 p-3 block "
                  />
                  <Image
                    src={"/Logo-libra.png"}
                    alt=""
                    width={1000}
                    height={1000}
                    className="md:w-full md:h-full h-24 w-fit object-contain lg:p-20 p-3 block "
                  />
                  <Image
                    src={"/Logo-Web.png"}
                    alt=""
                    width={1000}
                    height={1000}
                    className="md:w-full md:h-full h-24 w-fit object-contain lg:p-20 p-3 "
                  />
                </div>
              </div>
            </div>
          {/* ); */}
        {/* })}
      </Slider> */}
    </div>
  );
};

export default Hero;
