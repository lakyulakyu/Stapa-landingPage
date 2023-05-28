import React, { useRef } from "react";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import { CgArrowLongRight } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import MatchNow from "./MatchNow";

const dataMatch = [
  {
    id: 1,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.00,
    place: "anfield",
  },
  {
    id: 2,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/football-logo-design-template-7105c52c1baf3854faab4569a78781fb.jpg?ts=1601226564",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/soccer-logo-design-template-3acde993fbfd39118553cb59aabc3143.jpg?ts=1599278651",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.00,
    place: "anfield",
  },

  {
    id: 3,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.00,
    place: "anfield",
  },
  {
    id: 3,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/soccer-logo-design-template-3acde993fbfd39118553cb59aabc3143.jpg?ts=1599278651",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.00,
    place: "anfield",
  },

  {
    id: 4,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.00,
    place: "anfield",
  },

  {
    id: 5,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/soccer-logo-design-template-3acde993fbfd39118553cb59aabc3143.jpg?ts=1599278651",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.00,
    place: "anfield",
  },
  {
    id: 6,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/football-logo-design-template-7105c52c1baf3854faab4569a78781fb.jpg?ts=1601226564",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.00,
    place: "anfield",
  },

  {
    id: 7,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.00,
    place: "anfield",
  },
  {
    id: 8,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.00,
    place: "anfield",
  },

  {
    id: 9,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.00,
    place: "anfield",
  },

  {
    id: 10,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.00,
    place: "anfield",
  },

  {
    id: 11,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.00,
    place: "anfield",
  },

  {
    id: 12,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/football-logo-design-template-7105c52c1baf3854faab4569a78781fb.jpg?ts=1601226564",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.00,
    place: "anfield",
  },
];

const MatchCard = () => {
  const sliderRef = useRef(null);
  const next = () => sliderRef.current.slickNext(+1);
  const prev = () => sliderRef.current.slickPrev(-1);

  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <>
      <div className="h-[70vh]">
        <div className="max-w-7xl mx-auto mt-10 w-full font-poppins font-semibold">
          <div className="flex justify-between items-center ">
            <div>
              <h2 className="uppercase font-bold text-2xl text-black-main">
                Match shcedule
              </h2>
              <Link href={"/#"}>
                <p className="text-base text-zinc-500 font-medium flex items-center gap-x-1 mt-1 cursor-pointer">
                  View all matches <IoMdAdd />
                </p>
              </Link>
            </div>
            <div className=" flex divide-x-2  text-2xl">
              <button onClick={prev} className="">
                <h1 className="rotate-180 hover:bg-slate-100 rounded-lg py-4 px-2 text-gray-400">
                  <CgArrowLongRight />
                </h1>
              </button>
              <button
                onClick={next}
                className="px-2 text-red-500 hover:bg-slate-100 rounded-lg py-4  "
              >
                <CgArrowLongRight />
              </button>
            </div>
          </div>
        </div>
        <MatchNow />
        <Slider
          {...settings}
          ref={sliderRef}
          className="w-full translate-x-7  h-fit"
        >
          {dataMatch.map((item) => {
            return (
              <>
                <div className="  h-fit py-8 w-full min-h-fit hover:bg-black hover:bg-opacity-5 max-w-xs min-w-fit px-6  divide-red-600">
                  <div className="flex justify-between items-end pb-4">
                    <div className="flex gap-2">
                      {" "}
                      <Image
                        key={item.id}
                        src={item.tim_1}
                        alt="logo"
                        width={100}
                        height={100}
                        className="h-16 w-16"
                      />
                      <Image
                        key={item.id}
                        src={item.tim_2}
                        alt="logo"
                        width={100}
                        height={100}
                        className="h-16 w-16"
                      />
                    </div>

                    <h1 className="text-lg font-poppins font-bold text-red-600">
                      {item.score_tim_1} - {item.score_tim_2} : W
                    </h1>
                  </div>
                  <div className=" text-start pt-4 capitalize">
                    <h1 className="text-base font-semibold capitalize"></h1>
                    <p className="text-xs text-gray-500 -mt-1">{item.liga}</p>
                    <p className="text-xs font-semibold mt-2">{item.date}</p>
                    <p className="text-xs font-semibold">
                      {item.time} <span>{item.place}</span>
                    </p>
                    <Link href={"/detailmatch"}>
                      <button className="bg-primary-red font-poppins text-white font-semibold justify-between text-sm flex items-center gap-2 px-2 py-1 mt-6 w-24">
                        More <IoMdArrowDropright />
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default MatchCard;
