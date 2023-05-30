"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const dataNews = [
  {
    id: 1,
    bg_img:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    person_img:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    headline: "sepakbola di lapangan",
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
    headline: "sepakbola di lapangan",
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
    headline: "sepakbola di lapangan",
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
    headline: "sepakbola di lapangan",
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
    headline: "sepakbola di lapangan",

    tittle: "Pertandingan di lapangan ",
    name_person: "zhidan marties",
    username: "lakyulakyu hadjfdffsh",
    media: "media watch",
  },
  {
    id: 6,
    bg_img:
      "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",

    person_img:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    headline: "sepakbola di lapangan",
    tittle:
      "Pertandingan di lapangan ngarep kos kossan dengan menggunakan bole api yang mengagag panas dan mematikan tapi seru banet yang membuat jaina semua pasti ketahihan untuk emnaminkannya",
    name_person: "zhidan marties afshhdsjdkfjdkfjdkjfjweifjifjdjf",
    username: "lakyulakyu",
    media: "media watch",
  },
];

const News = () => {
  return (
    <>
      <div className="w-full min-h-fit divide-y-2 divide-white">
        {dataNews.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={item.id}
              className={` flex max-w-xl mx-auto max-h-48 hover:bg-slate-100  hover:scale-110 duration-500 ${
                isEven ? "bg-slate-100" : ""
              }`}
            >
              <div className="bg-green-600 h-full min-h-full ">
                <Image
                  src={item.bg_img}
                  height={1000}
                  width={1000}
                  alt={item.tittle}
                  className="object-cover max-h-[180px] h-full w-96"
                />
              </div>

              <div className=" pl-6 w-full text-black-main  h-full max-h-[180px] min-h-max">
                <h1
                  className="text-xs font-semibold uppercase
              w-fit text-primary-red"
                >
                  {item.media}
                </h1>
                <p className="text-lg font-semibold mt-1 capitalize max-w-xs w-full  max-h-14  overflow-hidden ">
                  {item.headline}
                </p>
                <p className="text-xs text-gray-400 font-normal tracking-wider">
                  {item.tittle}
                </p>
                <div className="flex gap-2 mt-4 items-center">
                  <Image
                    src={item.person_img}
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-10 h-10 object-cover rounded-full border-2"
                  />
                  <div>
                    <h1 className="text-xs w-[100px] overflow-hidden truncate font-medium">
                      {item.name_person}
                    </h1>
                    <p className="text-[10px] ml-1 w-[100px] overflow-hidden truncate font-normal">
                      {item.username}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default News;
