import React from "react";
import Advers from "@/components/Card/Adsvers";
const layout = ({ children }) => {
  return (
    <div className="pt-24 lg:pt-32   xl:max-w-[1500px] sm:px-10">
      <Advers />
      <div className="max-w-6xl mx-auto">
        <div className="lg:scale-75  "></div>
        <h1 className="text-xl h-fit sm:text-4xl mt-4 text-center max-w-2xl w-full  mx-auto font-normal text-black-main uppercase">
          News
        </h1>
        <div className="flex">
          {children}
          <div className="hidden sticky top-56 md:block border-l w-1/4">halo</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
