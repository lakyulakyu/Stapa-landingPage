"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const DetailMatch = () => {
  const [showDetail, setShowDetail] = useState(false);

  const handleButtonClick = () => {
    setShowDetail(!showDetail);
  };
  return (
    <div className={`max-w-6xl mx-auto ${showDetail ? "mb-10" : "mb-4"}`}>
      <button  onClick={handleButtonClick}
        className={` flex gap-4 text-neutral-500 text-2xl hover:bg-neutral-100 items-center border-b w-full pb-2 ${
          showDetail ? " mb-6 bg-neutral-100" : "mb-0"
        } `}
      >
        {showDetail ? (
          <p
            className="rotate-180 duration-300 text-3xl pt-1"
          >
            <MdOutlineKeyboardArrowDown />
          </p>
        ) : (
          <p
            className="rotate-0 duration-300 text-3xl pt-1"
          >
            <MdOutlineKeyboardArrowDown />
          </p>
        )}

        <p>Detail Match Input</p>
      </button>
      <div>
        {showDetail && (
          <form action="">
            <div className="grid gap-4 grid-cols-2">
              <div className="flex-col">
                <label htmlFor="File">Foto DetailMatch</label>
                <input
                  type="file"
                  className="w-full cursor-pointer file:cursor-pointer rounded border  border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700  file:-mx-3 file:-my-[0.32rem]  file:border-0  file:bg-neutral-100 file:px-4 file:py-[0.32rem] "
                  name="foto"
                />
              </div>
              <div className="flex-col">
                <label htmlFor="File">judul</label>
                <input
                  type="text"
                  className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="judul"
                />
              </div>
              <div>
                <label htmlFor="Healine">nickname</label>
                <input
                  type="text"
                  className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="nickname"
                />
              </div>
              <div>
                <label htmlFor="Healine">username</label>
                <input
                  type="text"
                  className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="username"
                />
              </div>
              <div>
                <label htmlFor="Nickname">Link DetailMatch</label>
                <input
                  type="text"
                  className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="Link DetailMatch"
                />
              </div>
            </div>
            <input
              type="submit"
              className="w-full mt-4 bg-green-400 h-10 rounded-md text-white uppercase focus:bg-white focus:border border-neutral-300 focus:text-neutral-500"
              value="submit"
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default DetailMatch;
