"use client";
import Image from "next/image";
import DataStats from "../../Json/Player.json";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CardPlayer(props) {
  // const uuid = props.params;
  // const [player, setPlayer] = useState(null);
  // useEffect(() => {
  //   axios
  //     .get(`http://api.mokletscience.com/api/v1/club/p/${uuid}`)
  //     .then((player) => {
  //       console.log(player.data);
  //       setPlayer(player.data);
  //     })
  //     .catch((err) => {
  //       throw new Error(err);
  //     });
  // }, []);
  return (
    <>
      <div className=" mb-10">
        <div className=" grid grid-cols-1 divide-y-4  sm:divide-y-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  sm:gap-4 xl:gap-8  min-w-fit px-10">
         data player
        </div>
      </div>
    </>
  );
}
