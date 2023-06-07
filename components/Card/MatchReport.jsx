"use client";
import React, { useState } from "react";
import Image from "next/image";

const MatchReport = ({item}) => {
  const [showDetail, setShowDetail] = useState(false);
  const handleButtonClick = () => {
    setShowDetail(!showDetail);
  };

  
  return (
    <>
      <div className="w-full mx-auto">
        <button
          onClick={handleButtonClick}
          className={`  py-2 w-fit px-20 text-center uppercase mx-auto text-lg justify-between rounded-lg font-normal flex items-center ${
            showDetail
              ? "text-primary-red  font-medium hover:bg-gray-100 "
              : "text-gray-400"
          } `}
        >
          <p className="text-center w-full">
            {showDetail ? "Close Detail" : "Detail Match "}
          </p>
        </button>
      </div>

      <div>
        {showDetail && (
          <>
            <div>
              <Image
                alt=""
                src={item.detail_match[0].detail_match}
                height={1000}
                width={1000}
                className="object-contain mr-0 ml-0 mx-auto h-full py-auto"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MatchReport;
