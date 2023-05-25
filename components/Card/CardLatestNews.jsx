import React from "react";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dataNews = [
  {
    id: 1,
    bg_img:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    person_img:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_person: "zhidan marties",
    username: "lakyulakyu",
    media: "media watch",
  },
  {
    id: 2,
    bg_img:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    person_img:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_person: "zhidan marties",
    username: "lakyulakyu",
    media: "media watch",
  },
  {
    id: 3,
    bg_img:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",

    person_img:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di la",
    name_person: "zhidan marties",
    username: "lakyulakyu",
    media: "media watch",
  },
  {
    id: 4,
    bg_img:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    person_img:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_person: "zhidan marties",
    username: "lakyulakyu",
    media: "media watch",
  },
  {
    id: 5,
    bg_img:
      "https://images.unsplash.com/photo-1626248801379-51a0748a5f96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    person_img:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ",
    name_person: "zhidan marties",
    username: "lakyulakyu",
    media: "media watch",
  },
  {
    id: 6,
    bg_img:
      "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",

    person_img:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",

    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_person: "zhidan marties afshhdsjdkfjdkfjdkjfjweifjifjdjf",
    username: "lakyulakyu",
    media: "media watch",
  },
];

const CardLatestNews = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
  };

  return (
    <>
      <Slider {...settings} className="w-full h-fit">
        {dataNews.map((item) => {
          return (
            <div
              key={item.id}
              className="content-end items-end mb-0 max-w-[250px]"
            >
              <div className="max-w-[200px] absolute">
                <h1 className="text-xs font-normal uppercase text-red-600">
                  {item.media}
                </h1>
                <p className="text-base font-medium">{item.tittle}</p>
                <div className="flex gap-2 items-center">
                  <img
                    src={item.person_img}
                    alt=""
                    className="w-10 h-10 object-cover bg-slate-700 rounded-full border-2"
                  />
                  <div>
                    <h1 className="text-xs w-[100px] overflow-hidden truncate font-medium">
                      {item.name_person}
                    </h1>
                    <p className="text-[10px] font-normal">{item.username}</p>
                  </div>
                </div>
              </div>
              <div className="object-cover">
                <img
                  src={item.bg_img}
                  alt=""
                  className="object-cover w-full h-full "
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default CardLatestNews;
