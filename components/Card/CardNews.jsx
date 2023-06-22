"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import TimeAgo from "@/components/TimeAgo";

const NewsCard = ({ item }) => {
  return (
    <div className={"card w-full "}>
      <Link href={`/News/${item.id}`}>
        <div key={item.id} className="max-h-96 pt-2 lg:pl-4 sm:flex  w-full">
          <div className=" px-8 sm:px-0 h-full min-h-full  sm:w-96 lg:w-full overflow-hidden  ">
            <Image
              src={item.bg_img}
              height={1000}
              width={1000}
              alt={item.tittle}
              className="object-cover max-h-32 rounded-xl sm:max-h-[25vh] h-full w-full"
            />
          </div>
          <div className="w-full px-2 pt-4 pl-8 text-black-main  h-full">
            <h1
              className="text-[10px] w-full font-semibold  uppercase
               text-primary-red"
            >
              {item.liga}
            </h1>
            <p className="text-lg hover:underline font-semibold mt-1 capitalize max-w-xs w-full  max-h-14 overflow-hidden ">
              {item.headline}
            </p>

            <p className="text-xs line-clamp-3 sm:w-52 md:w-full pr-20 hover:underline text-gray-400  overflow-hidden font-normal tracking-wider">
              {item.tittle}
            </p>

            <div className="flex gap-2 mt-6 items-center">
              <Image
                src={item.person_img}
                alt=""
                width={1000}
                height={1000}
                className="w-8 h-8 object-cover rounded-full border-2"
              />
              <div className="flex justify-between items-center lg:w-full w-44  ">
                <p className="text-xs hover:underline  capitalize lg:w-4/5 w-2/5 overflow-hidden truncate font-medium">
                  {item.name_person}
                </p>
                <p className="text-xs w-2/5 text-end text-gray-400">
                  <TimeAgo date={item.date} time={item.time} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
