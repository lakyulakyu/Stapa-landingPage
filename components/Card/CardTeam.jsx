"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdArrowRight } from "react-icons/md";
import Link from "next/link";
const CardTeam = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  
  const handleHover = () => {
    setIsHovered(true);
  };
  const handleLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    setShowDetail(isHovered || window.innerWidth < 700);
  }, [isHovered]);

  
  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className="flex w-full shadow-md rounded-lg pt-2  "
    >
      <div className="h-20 w-full max-w-[70px]">
        <Image
          alt=""
          height={1000}
          width={1000}
          src={item.club_image || "/Logo-default.png"}
          className="h-16 w-fit mix-blend-color-burn items-center"
        />
      </div>
      <div className=" w-full px-3 mx-auto ">
        <div className="w-full text-sm overflow-clip capitalize font-semibold  bottom-0">
          <p className="md:text-lg text-base  text-primary-red uppercase font-semibold tracking-widest">
            {item.club_name}
          </p>
          <div className="flex">
            <p className="text-neutral-400 md:text-base text-xs w-24 md:w-32 uppercase font-medium">
              Player
            </p> 
          </div>
        </div>
      </div>
      {isHovered && (
        <Link href={`/Team/${item.uuid}`}>
          <button className="bg-neutral-400 h-16 active:duration-200  ease-out flex px-2 my-2 rounded-sm  sm:w-24 justify-between items-center text-light-grey font-semibold text-xs  uppercase tracking-widest">
            <p className="hidden sm:block">Detail</p>
            <span className="text-2xl rotate-90 sm:rotate-0  ">
              <MdArrowRight />
            </span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default CardTeam;
