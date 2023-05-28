"use client";
import React, { useState,useEffect } from "react";
import Link from "next/link";
import { MdArrowRight } from "react-icons/md";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

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
    time: 20.3,
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
    time: 20.3,
    place: "anfield",
  },

  {
    id: 3,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "arema",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 20.3,
    place: "anfield",
  },

  {
    id: 4,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "arsnenal",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 20.3,
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
    time: 20.3,
    place: "anfield",
  },
  {
    id: 6,
    tim_1: "",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "jaura tim",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 20.3,
    place: "anfield",
  },

  {
    id: 7,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "bagasse",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 20.3,
    place: "anfield",
  },
  {
    id: 8,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet hhhhh",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 20.3,
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
    time: 20.3,
    place: "anfield",
  },

  {
    id: 10,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "arjuna",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 20.3,
    place: "anfield",
  },

  {
    id: 11,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "malang solo club",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 20.3,
    place: "anfield",
  },

  {
    id: 12,
    tim_1: "",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/football-logo-design-template-7105c52c1baf3854faab4569a78781fb.jpg?ts=1601226564",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "telkom club",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 20.3,
    place: "anfield",
  },
];

const TimCard = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [datas, setDatas] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          "https://api.jsonbin.io/v3/b/6472fddf9d312622a366ab4d"
        );
        setDatas(data.slice(0, 3));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  console.log(datas)

  

  const handleMouseEnter = (id) => {
    setActiveIndex(id);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const handleClick = (id) => {
    setActiveIndex(id);
  };

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
      <Slider {...settings} className="w-full    h-fit">
        {datas.map((item,index) => {
          return (
            <>
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(item.id)}
                className=" h-96 divide-x-8 divide-primary-red "
              >
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

                {activeIndex === item.id && (
                  <div className=" w-full shadow-sm  px-3 container mx-auto ">
                    <div className="text-center text-sm justify-between flex pt-8 text-overflow-ellipsis overflow-ellipsis break-all max-w-[300px]  overflow-clip capitalize font-semibold  bottom-0">
                      <h2 className="text-gray-400 font-medium">
                        Total Player
                      </h2>
                      <p className="text-primary-red ">30</p>
                    </div>
                    <Link href={`/Tim/${item.id}`}>
                      <button className="bg-primary-red hover:-translate-y-1 active:duration-200 ease-out  focus:bg-yellow-200 flex px-2 mt-6 pt-0.5 w-24 justify-between items-center text-light-grey font-semibold text-xs  uppercase tracking-widest">
                        <p>Detail</p>
                        <span className="text-2xl ">
                          <MdArrowRight />
                        </span>
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default TimCard;
