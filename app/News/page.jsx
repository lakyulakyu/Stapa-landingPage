import React from "react";
import NewsCard from "../../components/Card/CardNews";
import NewsData from "../../Json/News";
import Advers from "@/components/Card/Adsvers";

const ListNews = () => {
  return (
    <>
      <div className="pt-24 lg:pt-32 h-screen xl:max-w-[1500px] lg:max-w-7xl sm:px-10 px-2  mx-auto">
        {/* <div className="lg:scale-75 md:-my-7">
          <Advers />
        </div> */}
        <p className="uppercase sm:font-semibold text-center bg-neutral-200  max-[350px]:mx-auto font-normal text-lg sm:text-xl max-w-3xl mx-auto text-neutral-500 py-2">
          News
        </p>
        {/* <div className="news-list  mt-4 grid-cols-1 lg:divide-x-2 divide-y-2 lg:divide-y-0  grid lg:grid-cols-3 max-[1199px]:grid-cols-3  xl:grid-cols-4">
          {NewsData.map((item, index) => (
            <NewsCard key={index} item={item} id={item.id} />
          ))}
      
        </div> */}
        <h1 className=" relative top-1/3 text-center max-w-3xl mx-auto w-full text-neutral-600 ">
          Belum ada berita terkini
        </h1>
      </div>
    </>
  );
};

export default ListNews;
