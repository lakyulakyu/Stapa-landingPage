"use client";
import React, { useEffect, useState } from "react";
import CardVideos from "@/components/Card/CardVideos";

async function getData() {
  const res = await fetch(
    "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAdzQyw7F__Nr1IfTMFh-GGhwvhG6wMAG0&channelId=UCeHsWLotqZDJTdl1xJZLk-w&part=snippet&maxResults=10"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function page() {
  const data = await getData();

  console.log(data);
  const videos = data.items.map((item) => ({
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.default.url,
    videoId: item.id.videoId,
    description: item.snippet.description,
  }));

  return (
    <>
      <div className=" w-full h-fit md:mt-44 mx-auto mt-24 flex flex-wrap   ">
        {videos.map((video) => (
          <CardVideos key={video.videoId} video={video} />
        ))}
      </div>
    </>
  );
}
