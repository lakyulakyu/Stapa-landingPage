import React from "react";
import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";
import Image from "next/image";
const CardVideos = ({ video }) => {
  return (
    <div className="sm:max-w-xs w-full px-4 bg-cover h-fit">
      <div className="w-full bg-opacity-40 max-w-xs mx-auto flex">
        <div className="max-w-xs object-cover text-black-main mb-4 md:mb-8">
          <Link href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank">
            <Image
              alt=""
              height={1000}
              width={1000}
              src={video.thumbnail}
              className="w-96 h-fit object-cover rounded-lg aspect-video "
            />
          </Link>

          <h1 className="capitalize font-semibold mt-4 hover:underline line-clamp-2 font-poppins text-start">
            {video.title}
          </h1>
          <p className="line-clamp-3 ">{video.description}</p>
          <div className="flex text-xl text-gray-500 mt-2 items-center gap-1">
            <Link
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
            >
              <p className="hover:scale-125 duration-200 ease-out">
                <MdPlayCircleOutline />
              </p>
            </Link>
            <p className="text-xs mt-1 font-medium">
              {video.duration} <span>mins</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVideos;
