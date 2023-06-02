import React from "react";
import CardVideos from "@/components/Card/CardVideos";
import Video from "../../Json/video.Json"

const page = () => {
  return (
    <>
      <div className="grid grid-cols-4 pt-24 ">
        {Video.map((item) => (
          <CardVideos key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default page;
