"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageSponsor from "../../Json/Sponsor";

const Sponsorship = () => {
  // const settings = {
  //   infinite: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   dots: false,
  //   arrows: false,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   responsive: [
  //     {
  //       breakpoint: 1100,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 700,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  // if (
  //   (typeof window !== "undefined" &&
  //     window.location.pathname.includes(`/admine`)||
  //   window.location.pathname.includes(`/about`)||
  //   window.location.pathname.includes(`/login`))
  // ) {
  //   return null;
  // }


  const pathname =
  typeof window !== "undefined" ? window.location.pathname : null;
if (
  pathname === "/login" ||
  pathname === "/admine" 
) {
  return null;
}
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-10 md:mx-auto mt-12 w-full font-poppins font-semibold h-fit">
      <div>
        <h1 className="md:text-2xl max-sm:px-10 lg:text-4xl text-xl h-fit mt-4 w-full font-normal text-black-main uppercase">
          Sponsorship
        </h1>
      </div>
      <div className="my-10 ">
        {/* <Slider {...settings} className="w-full h-fit"> */}
        <div className="md:grid-cols-5 sm:grid-cols-2  grid ">
          {Array.from({ length: 5 }, () => {
            return (
              <>
                <div  key={2} className="bg-neutral-100 mx-6  rounded-full mb-2">
                  {/* <Image
                  key={item.id}
                  src={item.url}
                  alt=""
                  width={300}
                  height={300}
                  className="aspect-[3/2] object-contain mix-blend-color-burn px-6"
                /> */}
                  <h1 className="text-center text-neutral-300 py-8">
                    Available
                  </h1>
                </div>
              </>
            );
          })}
        </div>
        {/* </Slider> */}
        <div className="w-full h-fit mt-4">
          <div className="sm:grid-cols-2 grid grid-cols-1 gap-6 h-fit">
            {Array.from({ length: 2 }, () => {
              return (
                <>
                  {/* <Image
                  key={item.id}
                  src={item.url}
                  alt=""
                  width={300}
                  height={300}
                  className="aspect-[3/2] object-contain mix-blend-color-burn px-6"
                /> */}
                  <h1 key={2} className="text-center bg-neutral-100 py-20 w-full object-center rounded-3xl mb-2 h-full items-center  text-neutral-300">
                    Available
                  </h1>
                </>
              );
            })}
          </div>

          {/* <div className="w-1/2">
            {/* <Image
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
