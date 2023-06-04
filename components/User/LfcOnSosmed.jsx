"use client";
import React from "react";
import CardLfcOnSosmed from "../Card/CardLfcOnSosmed";
const LfcOnSosmed = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-10 md:mx-auto w-full font-poppins font-semibold h-full">
      <div className="flex justify-between items-center ">
        <div>
          <h2 className="uppercase font-normal text-lg md:font-bold md:text-2xl text-black-main">
            LFC on Social media
          </h2>
        </div>
      </div>
      <div className="">
        <div className="mt-10  ">
          {/* <CardLfcOnSosmed /> */}
          <h1 className="text-center bg-neutral-200 text-neutral-400 pt-10 h-32 max-w-3xl mx-auto">belum ada berita terkini</h1>
        </div>
      </div>
    </div>
  );
};

export default LfcOnSosmed;
