import React from "react";
import NewsCard from "../../components/Card/CardNews";
import NewsData from "../../Json/News";
import Advers from "@/components/Card/Adsvers";

const ListNews = () => {
  return (
    <>
      <div className="pt-24 lg:pt-32 xl:max-w-[1500px] lg:max-w-7xl sm:px-10 px-2  mx-auto">
        <div className="lg:scale-75 md:-my-7">
          <Advers />
        </div>
        <h1 className="uppercase  sm:font-bold sm:text-2xl sm:pt-10 lg:pt-5 text-black-main">
          News
        </h1>
        {/* <div className="news-list  mt-4 grid-cols-1 lg:divide-x-2 divide-y-2 lg:divide-y-0  grid lg:grid-cols-3 max-[1199px]:grid-cols-3  xl:grid-cols-4">
         {NewsData.map((item, index) => (
            <NewsCard key={index} item={item} id={item.id} />
          ))} 
               

        </div> */}
        <h1 className="text-center bg-neutral-200 text-neutral-400 pt-16 h-52 mx-auto">
          
          belum ada berita terkini        </h1>
      </div>
    </>
  );
};

export default ListNews;
