import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardLatestNews = ({ item }) => {
  return (
    <>
      <Link href={`/News/${item.id}`}>
        <div
          key={item.id}
          className="bg-black hover:bg-gray-700 overflow-hidden  shadow-xl divide-x-2 "
        >
          <div className="max-w-[200px] absolute px-5 bottom-10 text-white z-10  ">
            <h1 className="text-xs font-semibold uppercase bg-white px-2 py-1 bg-opacity-70 w-fit text-primary-red">
              {item.media}
            </h1>
            <p className="text-base mt-2 font-medium max-h-24 overflow-hidden ">
              {item.headline}
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
            <div className="absolute opacity-30 hover:opacity-100  h-[90vh] w-full "></div>
            <Image
              src={item.bg_img}
              height={1000}
              width={1000}
              alt={item.tittle}
              className="w-full h-full opacity-40  duration-300 ease-in-out object-cover hover:scale-110"
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardLatestNews;
