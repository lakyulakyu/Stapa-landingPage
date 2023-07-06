"use client";
import React, { useEffect, useState } from "react";
import CardVideos from "@/components/Card/CardVideos";

export default function page() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  async function fetchVideos() {
    try {
      const response = await fetch(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAdzQyw7F__Nr1IfTMFh-GGhwvhG6wMAG0&channelId=UCeHsWLotqZDJTdl1xJZLk-w&part=snippet&maxResults=10"
      );
      const data = await response.json();

      console.log(data);
      const videos = data.items.map((item) => ({
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url,
        videoId: item.id.videoId,
        description: item.snippet.description,
      }));

      setVideos(videos);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  }
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
