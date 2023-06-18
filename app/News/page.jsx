import React from "react";
import NewsCard from "../../components/Card/CardNews";
import NewsData from "../../Json/News";
import Advers from "@/components/Card/Adsvers";

const ListNews = () => {
  return (
    <>
      <div className="pt-24 lg:pt-32 h-fit xl:max-w-[1500px] lg:max-w-7xl sm:px-10 px-2  mx-auto">
        <div className="lg:scale-75 md:-my-7">
          <Advers />
        </div>
        <h1 className="text-xl h-fit sm:text-4xl mt-4 text-center max-w-2xl w-full bg-neutral-100 mx-auto font-normal text-black-main uppercase">
          News
        </h1>
        <div className="news-list  mt-4">
          {NewsData.map((item, index) => (
            <NewsCard key={index} item={item} id={item.id} />
          ))}
        </div>
        {/* <h1 className=" relative top-1/3 mt-20 text-center max-w-3xl mx-auto w-full text-neutral-600 ">
          Belum ada berita terkini
        </h1> */}
      </div>
    </>
  );
};

export default ListNews;
