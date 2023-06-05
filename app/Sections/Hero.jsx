"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Link from "next/link";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";

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

  const heroContent = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      number: "First Team News",
      content:
        "Thrilling Kick-Off Ignites Excitement as Soccer Competition Takes Center Stage",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1626248801379-51a0748a5f96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      number: "Second Team News",
      content:
        "Historic Milestone Achieved: Veteran Midfielder Reaches 500 Appearances for Club",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1602674809970-89073c530b0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      number: "Third Team News",
      content:
        "Dramatic Comeback: Team Overcomes Three-Goal Deficit to Secure Vital Win",
    },
  ];
  return (
    <div className="w-screen ">
      <Slider {...settings} className="w-full h-fi">
        {heroContent.map((item) => {
          return (
            <div
              key={item.id}
              className="lg:h-screen h-72 w-screen bg-cover bg-no-repeat"
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
              <div className="absolute w-screen lg:h-full top-0 -z-10">
                <div className="absolute opacity-30 sm:h-full lg:h-screen w-full bg-primary-red"></div>
                <div className="flex lg:h-96 h-32 mx-auto lg:mt-40 mt-20  w-fit">
                  <Image
                    src={"/Logo.png"}
                    alt=""
                    width={1000}
                    height={1000}
                    className="sm:w-full sm:h-full h-24 w-fit  object-contain lg:p-20 p-3 "
                  />
                  <Image
                    src={"/Logo_libra.png"}
                    alt=""
                    width={1000}
                    height={1000}
                    className="sm:w-full sm:h-full h-24 w-fit object-contain lg:p-20 p-3 "
                  />
                  <Image
                    src={"/Logo-Web.png"}
                    alt=""
                    width={1000}
                    height={1000}
                    className="sm:w-full sm:h-full h-24 w-fit object-contain lg:p-20 p-3 "
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Hero;
