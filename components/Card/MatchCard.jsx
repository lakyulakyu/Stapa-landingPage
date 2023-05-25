import React from "react";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    time: 20.3,
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
    time: 20.3,
    place: "anfield",
  },
];

const MatchCard = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,


  };
  return (
    <>
      <Slider {...settings} className="w-full h-fit">
        {dataMatch.map((item) => {
          return (
            <div className="  h-fit py-8 w-full min-h-fit max-w-xs min-w-fit px-6  divide-red-600">
              <div className="flex justify-between items-end pb-4">
                <div className="flex gap-2">
                  {" "}
                  <img
                    key={item.id}
                    src={item.tim_1}
                    alt="logo"
                    width={0}
                    height={0}
                    className="h-16 w-16"
                  />
                  <img
                    key={item.id}
                    src={item.tim_2}
                    alt="logo"
                    width={0}
                    height={0}
                    className="h-16 w-16"
                  />
                </div>

                <h1 className="text-xl font-bold text-red-600">
                  {item.score_tim_1}-{item.score_tim_2} : W
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
                  <button className="bg-red-600 text-white font-semibold justify-between text-sm flex items-center gap-2 px-2 py-1 mt-6 w-24">
                    More <IoMdArrowDropright />
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default MatchCard;
