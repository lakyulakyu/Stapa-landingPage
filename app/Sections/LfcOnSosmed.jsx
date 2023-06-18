// "use client";
// import React from "react";
// import CardLfcOnSosmed from "../Card/CardLfcOnSosmed";
// const LfcOnSosmed = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-2 sm:px-10 md:mx-auto w-full font-poppins font-semibold h-full">
//       <div className="flex justify-between items-center ">
//         <div>
//           <h2 className="uppercase font-normal text-lg md:font-bold md:text-2xl text-black-main">
//             LFC on Social media
//           </h2>
//         </div>
//       </div>
//       <div className="">
//         <div className="mt-10  ">
//           <CardLfcOnSosmed />
//           <h1 className="text-center bg-neutral-200 text-neutral-400 pt-10 h-32 max-w-3xl mx-auto">belum ada berita terkini</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LfcOnSosmed;
"use client";
import React, { useRef } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import CardVideos from "@/components/Card/CardVideos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Video = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    time: "20.12",
    liga: "solo premiere league",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    time: "20.12",
    liga: "solo premiere league",
  },

  {
    id: 3,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    time: "20.12",
    liga: "solo premiere league",
  },

  {
    id: 4,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    time: "20.12",
    liga: "solo premiere league",
  },
  {
    id: 5,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    liga: "solo premiere league",
    time: "20.12",
  },
  {
    id: 6,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    liga: "solo premiere league",
    time: "20.12",
  },
  {
    id: 7,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    time: "20.12",
    liga: "solo premiere league",
  },
  {
    id: 8,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    time: "20.12",
    liga: "solo premiere league",
  },
  {
    id: 9,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    time: "20.12",
    liga: "solo premiere league",
  },
];
const LfcOnSosmed = () => {

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
    <div className="max-w-7xl mx-auto lg:h-[55vh] lg:mt-24 px-2 sm:px-10 md:mx-auto w-full font-poppins font-semibold h-full">
      <div className="flex justify-between items-center ">
        <div>
        <h1 className="text-xl h-fit sm:text-4xl mt-4 text-center max-w-2xl w-full mx-auto font-normal text-black-main uppercase">

            LFC on Social media
          </h1>
        </div>
      </div>
      <div className="">
        <div className="mt-10 ">
        <Slider {...settings}  className="w-full mb-10 h-fit">
          {Video.map((item) => (
            <>
              <div className="">
                <CardVideos key={item.id} item={item} />
              </div>
            </>
          ))}
        </Slider>
          <h1 className="text-center px-5 font-normal bg-neutral-200 text-neutral-400 pt-20 uppercase h-44 w-full mx-auto">
          Sponsor Available
        </h1>
        </div>
      </div>
    </div>
  );
};

export default LfcOnSosmed;
