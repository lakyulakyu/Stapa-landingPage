// "use client";
// import Image from "next/image";
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import imageSponsor from "../../Json/Sponsor";

// const Sponsorship = () => {
//   const settings = {
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     dots: false,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 1100,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 700,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const isDetailPage =
//     typeof window !== "undefined"
//       ? window.location.pathname.includes("/Admine")
//       : undefined;
//   if (isDetailPage) {
//     return null;
//   }
//   return (
//     <div className="max-w-7xl mx-auto px-2 sm:px-10 md:mx-auto mt-12 w-full font-poppins font-semibold h-fit">
//       <div>
//         <h2 className="uppercase font-normal text-lg md:font-bold md:text-2xl text-black-main">
//           Sponsorship
//         </h2>
//       </div>
//       <div className="my-10">
//         <Slider {...settings} className="w-full h-fit">
//           {imageSponsor.map((item) => {
//             return (
//               <Image
//                 key={item.id}
//                 src={item.url}
//                 alt=""
//                 width={300}
//                 height={300}
//                 className="w-1/5 aspect-[3/2] object-contain mix-blend-color-burn px-6"
//               />
//             );
//           })}
//         </Slider>
//         <div className="flex w-full h-48 px-8 mt-4">
//           <div className="w-1/2">
//             <Image
//               src={
//                 "https://cdn.dribbble.com/users/2218729/screenshots/5726080/attachments/1236608/artboard_copy.png"
//               }
//               alt=""
//               width={600}
//               height={600}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="w-1/2">
//             <Image
//               src={
//                 "https://images.tokopedia.net/img/cache/730/kjjBfF/2023/1/24/2e4c6869-1fe1-4996-a249-9eb299025e40.jpg"
//               }
//               alt=""
//               width={600}
//               height={600}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sponsorship;

"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageSponsor from "../../Json/Sponsor";

const Sponsorship = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const isDetailPage =
    typeof window !== "undefined"
      ? window.location.pathname.includes("/Admine")
      : undefined;
  if (isDetailPage) {
    return null;
  }
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-10 md:mx-auto mt-12 w-full font-poppins font-semibold h-fit">
      <div>
        <h2 className="uppercase font-normal text-lg md:font-bold md:text-2xl text-black-main">
          Sponsorship
        </h2>
      </div>
      <div className="my-10 ">
        <Slider {...settings} className="w-full divide-x-8 gap-7 h-fit">
          {imageSponsor.map((item) => {
            return (
              // <Image
              //   key={item.id}
              //   src={item.url}
              //   alt=""
              //   width={300}
              //   height={300}
              //   className="w-1/5 aspect-[3/2] object-contain mix-blend-color-burn px-6"
              // />
              <>
                <h1
                  key={item.id}
                  className="bg-neutral-100 uppercase divide-x-8 text-neutral-400 text-xl font-normal h-24 w-full text-center pt-8"
                >
                  {item.tittel}
                </h1>
              </>
            );
          })}
        </Slider>
        <div className="flex w-full h-48 px-8 mt-4">
          <div className="w-1/2">
            <h1 className="bg-neutral-100 hidden sm:block text-neutral-400 uppercase text-2xl font-normal h-full w-full text-center pt-20">
              sponsor Space available
            </h1>
          </div>
          <div className="md:w-1/2 w-full ">
            <h1 className="bg-neutral-100 text-2xl text-neutral-400 uppercase font-normal h-full w-full text-center pt-20">
              sponsor Space available
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
