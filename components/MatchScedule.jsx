"use client";

import React from "react";
import MatchCard from "./Card/CardMatch";
import MatchNow from "./Card/MatchNow";

const MatchScedule = () => {
  return (
    <div className="max-w-7xl">
      <div className="w-screen">
        <div className="mt-10 w-screen ">

          <MatchCard />
        </div>
      </div>
    </div>
  );
};

export default MatchScedule;
