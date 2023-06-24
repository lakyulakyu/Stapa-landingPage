"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import DataStats from "../../Json/Player.json";

export default function CardPlayer({ position,uuid }) {
  return (
    <>
      <div className=" mb-10">
        <div className=" grid grid-cols-1 divide-y-4  sm:divide-y-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  sm:gap-4 xl:gap-8  min-w-fit px-10">
          {DataStats.filter((player) => player.position === position).map(
            ({ name, number, img }) => (
              <>
                <Link href={`/Team/detail/${uuid}`}>
                  <div className="mb-4 pt-2 sm:mb-0 hover:scale-105 duration-500 ease-out">
                    <div className="sm:h-64  w-full">
                      <Image
                        alt=""
                        src={img}
                        width={1000}
                        height={1000}
                        className="w-full  rounded-t-2xl hover:opacity-60 h-full   object-cover "
                      />
                    </div>
                    <div className="sm:flex bg-neutral-200 rounded-b-md px-2 md:flex-col md:items-start md:h-fit md:py-2 h-20 sm:h-14 items-center text-base text-black-main font-poppins justify-between">
                      <div className="flex gap-3 items-center divide-x-2 divide-black-main ">
                        <p className="md:block hidden text-xl -mt-1 border-b-2 border-primary-red text-primary-red">
                          {number}
                        </p>
                        <p className="w-52 pl-2 text-xs text-black-main truncate ">
                          {name}
                        </p>
                      </div>
                      <h1 className="text-primary-red md:hidden block sm:text-2xl text-4xl border-b-4 w-fit sm-w-full  md:text-7xl md:border-b-4 md:pt-4 border-primary-red ">
                        {number}
                      </h1>
                    </div>
                  </div>
                </Link>
              </>
            )
          )}
        </div>
      </div>
    </>
  );
}
