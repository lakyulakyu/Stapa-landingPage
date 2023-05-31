"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdArrowRight } from "react-icons/md";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import DataMatch from "../../Json/Match";

export default function AllTeam() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="w-full mt-28 max-w-6xl mx-auto h-fit">
        <h2 className="uppercase font-bold pb-10 text-2xl text-black-main">
          All TEAM
        </h2>
        <div className=" grid grid-cols-4">
          {DataMatch.map((item) => {
            return (
              <>
                <div className=" h-96 divide-x-8 divide-primary-red ">
                  <div>
                    <Image
                      alt=""
                      height={1000}
                      width={1000}
                      src={item.tim_1 || "/Logo-default.png"}
                      className="w-full aspect-[3/2] object-contain mix-blend-color-burn"
                    />
                    <h1 className="text-center mt-5 text-lg text-primary-red uppercase font-semibold tracking-widest">
                      {item.name_tim1}
                    </h1>
                  </div>
                  <div className=" w-full shadow-sm  px-3 container mx-auto ">
                    <div className="text-center text-sm justify-between flex pt-8 text-overflow-ellipsis overflow-ellipsis break-all max-w-[300px]  overflow-clip capitalize font-semibold  bottom-0">
                      <h2 className="text-gray-400 font-medium">
                        Total Player
                      </h2>
                      <p className="text-primary-red ">30</p>
                    </div>
                    <Link href={`/Team/${item.id}`}>
                      <button className="bg-primary-red hover:-translate-y-1 active:duration-200 ease-out  focus:bg-yellow-200 flex px-2 mt-6 pt-0.5 w-24 justify-between items-center text-light-grey font-semibold text-xs  uppercase tracking-widest">
                        <p>Detail</p>
                        <span className="text-2xl ">
                          <MdArrowRight />
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
