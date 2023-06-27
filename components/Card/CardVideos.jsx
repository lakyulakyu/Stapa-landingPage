import React from "react";
import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";

const CardVideos = ({ item }) => {
  return (
    <div className="sm:max-w-xs w-full px-4 bg-cover h-fit">
      <div className="w-full bg-opacity-40 max-w-xs mx-auto flex">
        <div className="max-w-xs object-cover text-black-main mb-4 md:mb-8">
          <iframe
            src={item.url}
            autoPlay
            width="100%"
            className="w-full h-fit rounded-lg aspect-video "
          ></iframe>
          <h1 className="capitalize font-semibold mt-4 hover:underline font-poppins text-start">
            {item.headline}
          </h1>
          <div className="flex text-xl text-gray-500 mt-2 items-center gap-1">
            <Link href={item.url} target="_blank">
              <p className="hover:scale-125 duration-200 ease-out">
                <MdPlayCircleOutline />
              </p>
            </Link>
            <p className="text-xs mt-1 font-medium">
              {item.time} <span>mins</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVideos;
