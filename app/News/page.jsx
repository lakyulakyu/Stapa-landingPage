"use client";
import React, { useState } from "react";
import NewsCard from "../../components/Card/CardNews";
import NewsData from "../../Json/News";
import Advers from "@/components/Card/Adsvers";

const NewsList = () => {
  return (
    <>
      <div className="pt-24 max-w-5xl  mx-auto ">
        <div className="scale-50 -my-7">
          <Advers />
        </div>
        <h1 className="uppercase font-bold text-2xl text-black-main">News</h1>
        <div className="news-list gap-4 mt-4  grid grid-cols-4">
          {NewsData.map((item, index) => (
            <NewsCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsList;
