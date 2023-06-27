import React from "react";
import NewsCard from "../../components/Card/CardNews";
import NewsData from "../../Json/News";
const ListNews = () => {
  return (
    <>
      <div className=" h-fit px-2 w-3/4 mx-auto">
        {/* <div className="news-list  mt-4">
          {NewsData.map((item, index) => (
            <NewsCard key={index} item={item} id={item.id} />
          ))}
        </div> */}
        <h1 className=" relative top-1/3 mt-20 text-center max-w-3xl mx-auto w-full text-neutral-600 ">
          Belum ada berita terkini
        </h1>
      </div>
    </>
  );
};

export default ListNews;
