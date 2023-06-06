import React from "react";
import Image from "next/image";
const CardTeam = ({ item }) => {
  return (
    <div className="flex pt-2 md:w-96">
      <div className="h-20 w-full max-w-[70px]">
        <Image
          alt=""
          height={1000}
          width={1000}
          src={item.url || "/Logo-default.png"}
          className="h-16 w-fit mix-blend-color-burn items-center"
        />
      </div>
      <div className=" w-full shadow-sm px-3 mx-auto ">
        <div className="w-full text-sm overflow-clip capitalize font-semibold  bottom-0">
          <p className="md:text-lg text-base  text-primary-red uppercase font-semibold tracking-widest">
            {item.name_tim}
          </p>
          <div className="flex">
            <p className="text-black-main md:text-base text-xs w-24 md:w-32 uppercase font-medium">
              Player
            </p>
            <p className="text-primary-red ">-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTeam;
