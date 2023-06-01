"use client";
import React, { useState } from "react";
import NewsCard from "../../components/Card/CardNews";
import NewsData from "../../Json/News";
import Advers from "@/components/Card/Adsvers";

const NewsList = () => {
  return (
    <>
      <div className="pt-24 max-w-5xl px-2  mx-auto ">
        <div className="lg:scale-50 md:-my-7">
          <Advers />
        </div>
        <h1 className="uppercase  sm:font-bold sm:text-2xl sm:pt-10 lg:pt-0 text-black-main">
          News
        </h1>
        <div className="news-list gap-4 mt-4 grid-cols-1  sm:grid-cols-2 md:grid-cols-3  grid lg:grid-cols-4">
          {NewsData.map((item, index) => (
            <NewsCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsList;
