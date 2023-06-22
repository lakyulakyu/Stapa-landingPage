"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const PlayerDetail = () => {
  const [showDetail, setShowDetail] = useState(false);

  const handleButtonClick = () => {
    setShowDetail(!showDetail);
  };

  return (
    <>
      <div className={`max-w-6xl mx-auto ${showDetail ? "mb-10" : "mb-4"}`}>
        <button
          onClick={handleButtonClick}
          className={` flex gap-4 text-neutral-500 text-2xl hover:bg-neutral-100 items-center border-b w-full pb-2 ${
            showDetail ? " mb-6 bg-neutral-100" : "mb-0"
          } `}
        >
          {showDetail ? (
            <p className="rotate-180 duration-300 text-3xl pt-1">
              <MdOutlineKeyboardArrowDown />
            </p>
          ) : (
            <p className="rotate-0 duration-300 text-3xl pt-1">
              <MdOutlineKeyboardArrowDown />
            </p>
          )}

          <p>Detail Player match</p>
        </button>
        <div>
          {showDetail && (
            <>
              <form>
                <input type="file" accept=".xlsx" />
                <button type="submit">Import Excel</button>
              </form>

              <div className="flex w-ful divide-x-2">
                <div className="flex divide-x-2 w-full">
                  <div className=" bg-slate-200 w-full">halo</div>
                  <div className=" bg-slate-400 w-40">halo</div>
                  <div className=" bg-slate-400 w-40">halo</div>
                  <div className=" bg-slate-400 w-40">halo</div>
                  <div className=" bg-slate-400 w-40">halo</div>
                </div>
                <div className="grid grid-cols-5 divide-x-2 w-full">
                  <div className=" bg-blue-200 w-full">halo</div>
                  <div className=" bg-blue-400 w-40">halo</div>
                  <div className=" bg-blue-400 w-40">halo</div>
                  <div className=" bg-blue-400 w-40">halo</div>
                  <div className=" bg-blue-400 w-40">halo</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PlayerDetail;
