"use client";
import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import React from "react";
import CardLfcOnSosmed from "./Card/CardLfcOnSosmed";
const LfcOnSosmed = () => {
  return (
    <div className="max-w-7xl mx-auto  w-full font-poppins font-semibold h-full">
      <div className="flex justify-between items-center ">
        <div>
          <h2 className="uppercase font-bold text-2xl text-black-main">
            LFC on Social media
          </h2>
          <Link href={"/#"}>
            <p className="text-base text-zinc-500 font-medium flex items-center gap-x-1 mt-1 cursor-pointer">
              View all news <IoMdAdd />
            </p>
          </Link>
        </div>
      </div>
      <div className="w-screen ">
        <div className="mt-10 w-screen  lg:translate-x-12">
          <CardLfcOnSosmed />
        </div>
      </div>
    </div>
  );
};

export default LfcOnSosmed;
