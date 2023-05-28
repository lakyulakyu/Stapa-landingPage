import React from "react";
import Link from "next/link";
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
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",

    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_person: "zhidan marties",
    username: "lakyulakyu",
  },
  {
    id: 2,
    bg_img:
      "https://images.now-tv.com/shares/vod_images/vi_voddrama_series_desc_t/202002/en_us/original_vertical/s202002140102044",
    person_img:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_person: "zhidan marties",
    username: "lakyulakyu",
  },
  {
    id: 3,
    bg_img:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",

    person_img:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",

    tittle: "Pertandingan di la",
    name_person: "zhidan marties",
    username: "lakyulakyu",
  },
  {
    id: 4,
    bg_img:
      "https://images.now-tv.com/shares/vod_images/vi_voddrama_series_desc_t/202002/en_us/original_vertical/s202002140102044",
    person_img:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_person: "zhidan marties",
    username: "lakyulakyu",
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
  },
  {
    id: 6,
    bg_img:
      "https://images.now-tv.com/shares/vod_images/vi_voddrama_series_desc_t/202002/en_us/original_vertical/s202002140102044",
    person_img:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",

    tittle:
      "Pertandingan di lapangan ngarep kos kossan dengan mengandalkan sebuah lapangan yang tak terukur dengan jelas tapi seru",
    name_person: "zhidan marties afshhdsjdkfjdkfjdkjfjweifjifjdjf",
    username: "lakyulakyu adalah sbeuah platform yang andal",
  },
];

const CardLfcOnSosmed = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <Slider {...settings} className="w-full h-fit">
        {dataNews.map((item) => {
          return (
            <div
              key={item.id}
              className="hover:border-b-2  hover:shadow-2xl px-5 shadow-neutral-900 hover:scale-110 duration-150 ease-in-out  h-full max-h-96"
            >
              <div className="h-28 ">
                <Image
                  src={item.bg_img}
                  width={1000}
                  height={1000}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="max-w-[200px]">
                <p className="text-sm mt-3 font-medium h-14 overflow-hidden ">
                  {item.tittle}
                </p>
                <div className="flex gap-2 my-4 items-center">
                  <Image
                    src={item.person_img}
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-10 h-10 object-cover bg-slate-700 rounded-full border-2"
                  />
                  <div>
                    <h1 className="text-xs w-[100px] overflow-hidden truncate font-medium">
                      LFC {item.name_person}
                    </h1>
                    <p className="text-[10px] w-20 truncate font-normal">
                      {item.username}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default CardLfcOnSosmed;
