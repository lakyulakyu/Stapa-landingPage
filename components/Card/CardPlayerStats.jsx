"use client";
import Image from "next/image";
import React from "react";
import DataStats from "../../Json/Player";

export default function CardPlayer({ category }) {
  return (
    <>
      <div className=" mb-10">
        <div className=" grid grid-cols-4 gap-8  min-w-fit px-10">
          {DataStats.filter((product) => product.category === category).map(
            ({ name, number, img }) => (
              <>
                <div>
                  <div className="flex h-14 items-center relative text-base text-black-main font-poppins justify-between">
                    <h1 className="w-52 truncate">{name}</h1>
                    <h1 className="text-primary-red text-2xl">{number}</h1>
                  </div>
                  <div className="h-80 w-72  ">
                    <div className="opacity-90 h-48 mt-32 absolute bg-gradient-to-t  from-slate-800 rounded-2xl w-72 "></div>
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
