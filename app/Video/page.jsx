import React from "react";
import CardVideos from "@/components/Card/CardVideos";

const Video = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    time: "20.12",
    liga: "solo premiere league",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    time: "20.12",
    liga: "solo premiere league",
  },

  {
    id: 3,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    time: "20.12",
    liga: "solo premiere league",
  },

  {
    id: 4,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    time: "20.12",
    liga: "solo premiere league",
  },
  {
    id: 7,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    time: "20.12",
    liga: "solo premiere league",
  },
  {
    id: 8,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    time: "20.12",
    liga: "solo premiere league",
  },
  {
    id: 9,
    url: "https://www.youtube.com/embed/1_f6EV2TtmA",
    headline: "Deddy corbuziez makan bersama andika lopes",
    time: "20.12",
    liga: "solo premiere league",
  },
];

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
