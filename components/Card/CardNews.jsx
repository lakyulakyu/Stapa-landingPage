"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import TimeAgo from "@/components/TimeAgo";
import { useState, useEffect } from "react";

const NewsCard = ({ item, index }) => {
  const [items, setData] = useState([item]);



  return (
    <div className={`card w-fit  ${isLargeCard ? "large-card" : ""}`}>
      <Link href={`/News/${item.id}`}>
        <div
          key={item.id}
          className="max-h-96 divide-x-2 flex sm:flex-col sm:mb-4 max-sm:w-screen w-full sm:max-w-[40vh] "
        >
          <div className=" h-full min-h-full w-64 sm:w-[40vh] ">
            <Image
              src={item.bg_img}
              height={1000}
              width={1000}
              alt={item.tittle}
              className="object-cover max-h-[25vh] h-full w-full"
            />
          </div>
          <div className="w-full px-2 pt-4 text-black-main  h-full max-h-[180px] min-h-[170px]">
            <h1
              className="text-[10px] w-full font-semibold uppercase
               text-primary-red"
            >
              {item.liga}
            </h1>
            <p className="text-lg hover:underline font-semibold mt-1 capitalize max-w-xs w-full  max-h-14  overflow-hidden ">
              {item.headline}
            </p>

            <p className="text-xs line-clamp-3 w-52 hover:underline text-gray-400 max-h-8 overflow-hidden font-normal tracking-wider">
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
              <div className="flex justify-between">
                <p className="text-xs hover:underline w-[100px] capitalize overflow-hidden truncate font-medium">
                  {item.name_person}
                </p>
                <p className="text-xs text-gray-400">
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
