"use client";
import Image from "next/image";
import React from "react";
import DataStats from "../../Json/Match"

export default function CardPlayer({ category }) {
  return (
    <>
      <div className=" mb-10">
        <div className=" grid grid-cols-1 divide-y-4  sm:divide-y-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  sm:gap-4 xl:gap-8  min-w-fit px-10">
          {DataStats.filter((product) => product.category === category).map(
            ({ name, number, img }) => (
              <>
                <div className="mb-4 sm:mb-0">
                  <div className="sm:flex  md:flex-col md:items-start md:h-fit md:py-2 h-20 sm:h-14 items-center text-base text-black-main font-poppins justify-between">
                    <h1 className="w-52 ">{name}</h1>
                    <h1 className="text-primary-red sm:text-2xl text-4xl border-b-4 w-fit sm-w-full  md:text-7xl md:border-b-4 md:pt-4 border-primary-red ">
                      {number}
                    </h1>
                  </div>
                  <div className="sm:h-80  lg:max-w-[34vh] w-full">
                    <div className="opacity-90 lg:max-w-[34vh] hidden lg:block w-full h-48 mt-32 absolute bg-gradient-to-t  from-slate-800 rounded-2xl "></div>
                    <Image
                      alt=""
                      src={img}
                      width={1000}
                      height={1000}
                      className="w-full  rounded-2xl  h-full hover:scale-105 duration-500 ease-out object-cover "
                    />
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </>
  );
}
