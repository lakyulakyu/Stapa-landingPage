"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import TimeAgo from "@/components/TimeAgo";
import { useState, useEffect } from "react";

const NewsCard = ({ item, index }) => {
  const [items, setData] = useState([item]);

  const isLargeCard = index === 0;
  useEffect(() => {
    const updatedData = [...items];
    updatedData.splice(1, 1);

    setData(updatedData);
  }, []);

  return (
    <div className={`card w-fit  ${isLargeCard ? "large-card" : ""}`}>
      <Link href={`/News/${item.id}`}>
        <div key={item.id} className="max-h-96 divide-x-2  mb-4 max-w-[40vh] ">
          <div className=" h-full min-h-full w-[40vh] bg-slate-100">
            <Image
              src={item.bg_img}
              height={1000}
              width={1000}
              alt={item.tittle}
              className="object-cover  max-h-[25vh] h-full w-full"
            />
          </div>
          <div className="w-full px-2 pt-4 text-black-main  h-full max-h-[180px] min-h-[170px]">
            <h1
              className="text-[10px] w-full  font-semibold uppercase
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

      {isLargeCard && (
        <div className="h-[50vh] max-h-96  max-w-5xl justify-between w-screen flex ">
          <div className="mx-auto w-full">
            <div className=" h-[50vh] w-[60vh]  ">
              <Image
                alt=""
                src={item.bg_img}
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="full py-5 px-10 ">
            <p className="text-sm font-medium capitalize text-primary-red">
              {item.liga}
            </p>
            <p className="text-black-main hover:underline font-semibold text-3xl capitalize">
              {item.headline}
            </p>
            <p className="text-2xl   hover:underline mt-2 max-h-32 overflow-hidden font-normal tracking-wider">
              {item.tittle}
            </p>
            <div className="flex gap-2 mt-4 items-center">
              <Image
                src={item.person_img}
                alt=""
                width={1000}
                height={1000}
                className="w-8 h-8 object-cover rounded-full border-2"
              />
              <div className="flex gap-5 justify-between">
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
      )}
    </div>
  );
};

export default NewsCard;
