import React from "react";
import MatchNow from "@/components/Card/MatchNow";

const layout = ({ children }) => {
  return (
    <div className="pt-24 lg:pt-32  mx-auto xl:max-w-[1500px] ">
    
        <h1 className="text-xl h-fit sm:text-4xl mt-4 text-center max-w-2xl w-full  mx-auto font-normal text-black-main uppercase">
          Match
        </h1>
        <div className="flex lg:flex-row flex-col-reverse w-full">
          <div className="w-3/4 mx-auto">{children}</div>
          <div className=" border-l px-2 mx-auto  w-full lg:w-1/4">
            <div className="sticky top-28 mx-auto divide-y-2 divide-neutral-400">
              <MatchNow />
            </div>
          </div>
      </div>
    </div>
  );
};

export default layout;
