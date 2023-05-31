"use client";
import Image from "next/image";
import React from "react";
import DataStats from "../../Json/Player";

export default function CardPlayer({ category}) {
  return (
    <>
      <div className="grid grid-cols-4 bg-slate-200 ">
        <div className="  min-w-fit px-10">
          {DataStats.filter((product) => product.category === category)
            .map(({ id, name, number, img }, index) => (
              <>
                
                    <div className="flex h-14 border-2 border-black items-center text-xs text-black-main font-poppins justify-between">
                      <h1 className="w-32 truncate">
                        {" "}
                        {index + 1} {name}
                      </h1>
                      <h1 className="text-primary-red">{number}</h1>
                    </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
}
