"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Advers = () => {
  //   const settings = {
  //     infinite: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     dots: false,
  //     arrows: false,
  //     autoplay: true,
  //     autoplaySpeed: 3000,
  //   };

  return (
    <>
      <div className="max-w-7xl mx-auto h-fit ">
        {/* <Slider {...settings} className="w-full h-fit">
          {dataNews.map((item) => (
            
            <div key={item.id} className="w-full object-cover ">
              <div className="object-cover h-[35vh] max-[md]:h-[20vh]">
                <Link target="_blank" href={"https://www.google.com/search?q=sponsorship&oq=sponsor&aqs=chrome.0.0i131i433i512j69i57j0i433i512j0i512l2j0i3j0i512j0i433i512j0i131i433i512j0i512.2441j1j7&sourceid=chrome&ie=UTF-8"}>
                <Image
                  src={item.url}
                  alt=""
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                /></Link>
                
              </div>
            </div>
          ))}
        </Slider> */}
        <h1 className="text-center bg-neutral-100 py-20 w-full object-center rounded-3xl mb-2 h-full items-center  text-neutral-300">
          Available
        </h1>
      </div>{" "}
    </>
  );
};

export default Advers;
