import React from "react";
import { MdPlayCircleOutline } from "react-icons/md";

const CardVideos = ({ item }) => {
  return (
    <div className="sm:max-w-xs w-full mx-auto px-4 bg-cover h-fit">
      <div className="w-full bg-opacity-40 max-w-xs mx-auto flex">
        {/* <div className="max-w-xs object-cover text-black-main  mb-14">
          <iframe
            src={item.url}
            width={1000}
            height={700}
            uk-video="automute: true"
            className="w-full h-fit  sm:h-48 aspect-video "
          ></iframe>
          <h1 className="capitalize font-semibold mt-4 font-poppins text-start">
            {item.headline}
          </h1>
          <div className="flex text-xl text-gray-500 mt-2 items-center gap-1">
            <MdPlayCircleOutline />{" "}
            <p className="text-xs mt-1 font-medium">
              {item.time} <span>mins</span>
            </p>
          </div>
          <p className=" text-xs font-normal text-primary-red mt-3">
            {item.liga}
          </p>
        </div> */}
        <h1 className="text-center px-5 bg-neutral-200 text-neutral-400 font-normal pt-12 uppercase h-32 max-w-3xl mx-auto">
          belum ada berita terkini
        </h1>
      </div>
    </div>
  );
};

export default CardVideos;
