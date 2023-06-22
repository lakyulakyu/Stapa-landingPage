import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import Datasosmed from "../../Json/LfcSosmed.json";

const CardSosmed = () => {
  // const settings = {
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   dots: false,
  //   arrows: true,
  // responsive: [
  //   {
  //     breakpoint: 1100,
  //     settings: {
  //       slidesToShow: 4,
  //       slidesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 920,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 640,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
  // };

  return (
    <>
      {/* <Slider {...settings} className="w-full h-fit"> */}
      {Datasosmed.map((item) => {
        return (
          <>
            <div
              key={item.id}
              className="hover:shadow-xl shadow-neutral-100 pb-4 rounded-b-2xl mb-10 px-5  hover:scale-90 duration-150 ease-in-out  h-full "
            >
              <Link
                target="_blank"
                href={item.link_sosmed}
                rel="noopener noreferrer"
              >
                <div className="">
                  <div className="sm:h-28 mx-auto h-32 w-52 sm:w-auto ">
                    <Image
                      src={item.logo}
                      width={1000}
                      height={1000}
                      alt={item.name_sosmed}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex mx-auto w-fit gap-2 my-4 items-center">
                    <Image
                      src={item.logo}
                      alt=""
                      width={1000}
                      height={1000}
                      className="w-10 h-10 object-cover rounded-full border-2"
                    />

                    <h1 className="text-xs w-full overflow-hidden truncate font-medium">
                      @{item.name_sosmed}
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          </>
        );
      })}
      {/* </Slider> */}
    </>
  );
};

export default CardSosmed;
