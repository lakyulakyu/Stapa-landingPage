"use client";
import React from "react";
import Data from "../../../Json/News.json";
import Link from "next/link";
import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";
import Advers from "@/components/Card/Adsvers";
import LatestNews from "@/components/User/LatestNews";
import TimeAgo from "@/components/TimeAgo";

const Page = ({ params }) => {
  const id = params.id_news;
  const item = Data.find((item) => item.id === parseInt(id));

  console.log(item);

  return (
    <div className="z-50  bg-slate-100">
      <div className="md:scale-50 md:-my-9 pt-16 sm:pt-32">
        <Advers />
      </div>
      <div className="mx-auto max-w-3xl">
        <Link href={"/News"}>
          <button className="rotate-180 text-2xl text-red-400 ">
            <CgArrowLongRight />
          </button>
        </Link>
        <p className="h-24 text-3xl hidden sm:block font-semibold text-center capitalize my-auto">
          {item.headline}
        </p>

        <div className="sm:h-[70vh] h-40 mt-6 sm:mt-0  bg-slate-200 w-full z-0 max-w-3xl mx-auto">
          <Image
            alt=""
            src={item.bg_img}
            width={1000}
            height={1000}
            className=" object-cover z-0 rounded-lg  w-full h-full"
          />
        </div>
        <div className="sm:-mt-10 shadow-md pb-20 relative sm:px-4 px-2 rounded-3xl bg-white z-40 max-w-2xl text-justify mx-auto ">
          <p className="pt-8 text-xl text-black-main capitalize font-semibold">
            {item.headline}
          </p>
          <div className="flex mt-8  items-center">
            <Image
              alt=""
              src={item.person_img}
              width={100}
              height={100}
              className="h-8 w-8 object-cover"
            />
            <p className="max-w-[120px] text-lg mx-2 h-6 overflow-hidden ">
              {item.name_person} -{" "}
            </p>
            <p className="text-sm ml-4 mt-1.5 font-semibold opacity-60 text-black-main">
              <TimeAgo date={item.date} time={item.time} />
            </p>
          </div>

          <p className="mt-10 sm:px-12 px-4 tracking-wider leading-6  text-black-main font-semibold ">
            {item.tittle}
          </p>
        </div>
      </div>
      <div className="w-full min-h-fit mt-4 sm:mt-0 h-full ">
        <LatestNews />
      </div>
    </div>
  );
};

export default Page;
