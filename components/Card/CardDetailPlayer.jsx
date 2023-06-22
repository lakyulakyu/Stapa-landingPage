import React from "react";
import Image from "next/image";

const DetailPlayer = ({ item }) => {
  return (
    <div className="h-fit relative">
      <div className="flex justify-center items-center mt-36">
        <Image
          alt=""
          src={"/pemain.jpg"}
          width={1000}
          height={100}
          className="h-full w-full"
        />
      </div>
      <div class="absolute top-0 left-14 right-0 bottom-0 flex items-center justify-between">
        <p>halo</p>
        <p class="text-white text-4xl font-bold">Floating Text</p>
      </div>
    </div>
  );
};

export default DetailPlayer;
