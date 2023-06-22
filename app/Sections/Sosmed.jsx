"use client";
import React from "react";
import CardSosmed from "@/components/Card/CardSosmed";
const Sosmed = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-10 md:mx-auto w-full font-poppins font-semibold h-full">
      <div className="flex justify-between items-center ">
        <div>
          <h1 className="md:text-2xl lg:text-4xl text-xl h-fit mt-4 text-center max-w-2xl w-full mx-auto font-normal text-black-main uppercase">
            Social Media
          </h1>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 ">
        <CardSosmed />
      </div>
    </div>
  );
};

export default Sosmed;
