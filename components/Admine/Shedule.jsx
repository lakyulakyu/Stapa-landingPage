"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Shedule = () => {
  const [showDetail, setShowDetail] = useState(false);

  const handleButtonClick = () => {
    setShowDetail(!showDetail);
  };
  return (
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

        <h1>Match schedule Input</h1>
      </button>

      <div>
        {showDetail && (
          <form action="">
            <div className="grid gap-4 grid-cols-2">
              <div className="flex-col">
                <label className="mt-3 uppercase" htmlFor="">
                  Group
                </label>
                <select
                  name=""
                  id=""
                  className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                >
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">B</option>
                  <option value="D">D</option>
                </select>
              </div>
              <div className="flex-col">
                <label className="mt-3 uppercase" htmlFor="">
                  Liga
                </label>
                <select
                  name=""
                  id=""
                  className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                >
                  <option value="Solo premiere">Solo premiere</option>
                  <option value="Liga 2">Liga 2</option>
                  <option value="Liga 3">Liga 3</option>
                  <option value="Liga 4">Liga 4</option>
                </select>
              </div>
              <div className="flex-col">
                <label className="mt-3 uppercase" htmlFor="File">
                  Foto Tim 1
                </label>
                <input
                  type="file"
                  className="w-full cursor-pointer file:cursor-pointer rounded border  border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700  file:-mx-3 file:-my-[0.32rem]  file:border-0  file:bg-neutral-100 file:px-4 file:py-[0.32rem] "
                  name="tim_1"
                />
              </div>
              <div className="flex-col">
                <label className="mt-3 uppercase" htmlFor="File">
                  Foto Tim 2
                </label>
                <input
                  type="file"
                  className="w-full cursor-pointer file:cursor-pointer rounded border  border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700  file:-mx-3 file:-my-[0.32rem]  file:border-0  file:bg-neutral-100 file:px-4 file:py-[0.32rem] "
                  name="tim_2"
                />
              </div>
              <div>
                <label className="mt-3 uppercase" htmlFor="Healine">
                  Nama tim 1
                </label>
                <input
                  type="text"
                  className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="Headline"
                />
              </div>
              <div>
                <label className="mt-3 uppercase" htmlFor="Healine">
                  Nama tim 2
                </label>
                <input
                  type="text"
                  className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="Headline"
                />
              </div>
              <div>
                <label className="mt-3 uppercase" htmlFor="Nickname">
                  Score tim 1
                </label>
                <input
                  type="number"
                  className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="NickName"
                />
              </div>
              <div>
                <label className="mt-3 uppercase" htmlFor="Nickname">
                  Score tim 2
                </label>
                <input
                  type="number"
                  className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="NickName"
                />
              </div>
              <div>
                <label className="mt-3 uppercase" htmlFor="ImgPerson">
                  Tempat
                </label>
                <input
                  type="text"
                  className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="ImgPerson"
                />
              </div>

              <div>
                <label className="mt-3 uppercase" htmlFor="Name">
                  Jam tanding
                </label>
                <input
                  type="time"
                  className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="Name"
                />
              </div>
              <div>
                <label className="mt-3 uppercase" htmlFor="Name">
                  tanggal tanding
                </label>
                <input
                  type="date"
                  className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="Name"
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

export default Shedule;
