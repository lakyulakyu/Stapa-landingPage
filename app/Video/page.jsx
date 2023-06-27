import React from "react";
import CardVideos from "@/components/Card/CardVideos";

const Video = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/7vs-Xz9uGwc",
    headline: "HIGHLIGHT MULIA HATI VS MUTIARA SOLO 5-0",
    time: "03:09",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/ktBGuVsxTIQ",
    headline: "HighLight Putra Gendangan vs Walisongo 1-0",
    time: "04:07",
  },

  {
    id: 3,
    url: "https://www.youtube.com/embed/BevJqPWHtOg",
    headline: "HIGHLIGHT SKM KRJAN VS PSHW ANDBOY FC 1-0",
    time: "02:26",
  },

  {
    id: 4,
    url: "https://www.youtube.com/embed/xwade8dZ-OY",
    headline: "Technical Meeting ASKOT Batu bersama LabMokletScience",
    time: "00.51",
  },
];
const page = () => {
  return (
    <>
      <div className=" w-full h-fit md:mt-44 mx-auto mt-24 flex flex-wrap   ">
        {Video.map((item) => (
          <CardVideos key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default page;
