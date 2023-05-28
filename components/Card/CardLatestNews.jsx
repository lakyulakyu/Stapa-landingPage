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
    username: "lakyulakyu hadjfdffsh",
    media: "media watch",
  },
  {
    id: 6,
    bg_img:
      "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",

    person_img:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",

    tittle:
      "Pertandingan di lapangan ngarep kos kossan dengan menggunakan bole api yang mengagag panas dan mematikan tapi seru",
    name_person: "zhidan marties afshhdsjdkfjdkfjdkjfjweifjifjdjf",
    username: "lakyulakyu",
    media: "media watch",
  },
];

const CardNews = () => {
  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
  };
  return (
    <>
      <Slider {...settings} className="w-full min-h-fit h-full   ">
        {dataNews.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-black hover:bg-gray-700 overflow-hidden  shadow-xl divide-x-2 "
            >
              <div className="max-w-[200px] absolute px-5 bottom-10 text-white z-10  ">
                <h1
                  className="text-xs font-semibold uppercase bg-white
                px-2 py-1 bg-opacity-70 w-fit text-primary-red"
                >
                  {item.media}
                </h1>
                <p className="text-base mt-2 font-medium max-h-24 overflow-hidden ">
                  {item.tittle}
                </p>
                <div className="flex gap-2 mt-4 items-center">
                  <Image
                    src={item.person_img}
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-10 h-10 object-cover bg-slate-700 rounded-full border-2"
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
              <div className="h-96">
                <div className="absolute opacity-30 hover:opacity-100  h-[90vh] w-full prima"></div>
                <Image
                  src={item.bg_img}
                  height={1000}
                  width={1000}
                  alt={item.tittle}
                  className="w-full h-full opacity-40  duration-300 ease-in-out object-cover hover:scale-110"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default CardNews;
