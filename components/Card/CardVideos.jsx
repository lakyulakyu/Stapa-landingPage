import React from "react";
import { MdPlayCircleOutline } from "react-icons/md";

const CardVideos = () => {
  return (
    <div className="flex w-screen justify-between bg-cover bg-[url('https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] ">
      <div className="right w-full bg-black bg-opacity-40 flex">
        {Array.from({ length: 2 }).map((_, index) => (
          <div className="max-w-[250px] w-fit object-cover ml-10 text-white mt-24 mb-14">
            <iframe
              src="https://www.youtube.com/embed/1_f6EV2TtmA"
              width="100px"
              height="200px"
              uk-video="automute: true"
              className="w-full h-32 "
            >
            </iframe>
            <h1 className="capitalize font-normal font-poppins text-start">
              Lorem ipsum dolor sit.
            </h1>
            <div className="flex text-xl text-gray-500 mt-2 items-center gap-1">
              <MdPlayCircleOutline />{" "}
              <h1 className="text-xs font-medium">
                12.34 <span>mins</span>
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="left w-full ">
        <h1 className="ml-10 font-bold text-lg -mt-10 text-start">
          Lorem ipsum dolor sit.
        </h1>
        <div className="ml-10 flex text-xl items-center gap-1">
          <MdPlayCircleOutline />{" "}
          <h1 className="text-sm font-medium">
            12.34 <span>mins</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CardVideos;
