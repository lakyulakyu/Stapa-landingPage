"use client";
import React from "react";
import Data from "../../../Json/News.json";
import Link from "next/link";
import Image from "next/image";
import { CgArrowLongLeft } from "react-icons/cg";
import LatestNews from "@/app/Sections/LatestNews";
import TimeAgo from "@/components/TimeAgo";

const Page = ({ params }) => {
  const id = params.id_news;
  const item = Data.find((item) => item.id === parseInt(id));

  console.log(item);

  return (
    <div className="w-3/4 mt-4 ">
      <div className="mx-auto max-w-3xl">
        <Link href={"/News"}>
          <button className="text-lg gap-2 flex items-center border-2 p-2 rounded-lg text-red-500 ">
            <CgArrowLongLeft />
            <span className="-mt-0.5 text-sm">Kembali</span>
          </button>
        </Link>
        <p className="h-fit md:text-3xl text-xl hidden sm:block font-normal  py-4 text-start capitalize my-auto">
          {item.headline}
        </p>
        <div className="sm:h-[50vh] h-40  mt-6 sm:mt-0 w-full max-w-3xl mx-auto">
          <Image
            alt=""
            src={item.bg_img}
            width={1000}
            height={1000}
            className=" object-cover rounded-lg w-full h-full"
          />
        </div>
        <div className="pb-20 relative sm:px-4 px-2 max-w-2xl  ">
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

          <p className="mt-10 indent-14 sm:px-12 px-4 tracking-wider leading-6  text-black-main font-semibold ">
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
