import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Datasosmed from "../../Json/LfcSosmed";

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
        {Datasosmed.map((item) => {
          return (
            <>
              <div
                key={item.id}
                className="hover:border-b-2  hover:shadow-2xl px-5 shadow-neutral-900 hover:scale-110 duration-150 ease-in-out  h-full max-h-96"
              >
                <Link target="_blank"  href={"https://www.instagram.com/_fly.kemoon/"} passHref rel="noopener noreferrer">
                 
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
              
                </Link>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default CardLfcOnSosmed;
