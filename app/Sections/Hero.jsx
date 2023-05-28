"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
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
    <div className="w-screen">
      <Slider {...settings} className="w-full h-fit">
        {heroContent.map((item) => {
          return (
            <div
              key={item.id}
              className="h-screen w-screen bg-cover bg-no-repeat"
            >
              <div className="font-poppins relative top-2/4 max-w-7xl mx-auto text-light-grey ">
                <h4 className="text-lg uppercase font-semibold">
                  {item.number}
                </h4>
                <h1 className="text-4xl mt-2 font-bold w-1/2">
                  {item.content}
                </h1>
                <button className="bg-primary-red mt-8 px-5 text-lg py-2 font-normal flex items-center gap-x-2">
                  View Now <IoMdArrowDropright size={26} />
                </button>
              </div>
              <div className="absolute w-screen h-[80vh] top-0 -z-10">
                <div className="absolute opacity-30 h-screen w-full bg-primary-red"></div>
                <Image
                  src={item.image}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Hero;
