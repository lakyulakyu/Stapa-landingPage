"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const News = () => {
  const [showDetail, setShowDetail] = useState(true);

  const handleButtonClick = () => {
    setShowDetail(!showDetail);
  };
  return (
    <div className={` pt-32 max-w-6xl mx-auto ${showDetail ? "mb-10" : "mb-4"}`}>
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

        <p>News Input</p>
      </button>
      <div>
        {showDetail && (
          <form action="submit">
            <div className="grid gap-4 grid-cols-2">
              <div>
                <div className="w-full">
                  <p className="mt-3 uppercase" htmlFor="File">
                    Foto Berita
                  </p>
                  <input
                    type="file"
                    className="w-full cursor-pointer file:cursor-pointer rounded border  border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700  file:-mx-3 file:-my-[0.32rem]  file:border-0  file:bg-neutral-100 file:px-4 file:py-[0.32rem] "
                    name="File"
                  />
                  <p
                    className="uppercase
                  text-sm text-gray-500 dark:text-gray-300"
                    id="file_input_help"
                  >
                    IMG, IMAGE, PNG, JPG (MAX. 2MB).
                  </p>
                </div>
                <div className="w-full">
                  <p className="mt-3 uppercase" htmlFor="Healine">
                    Judul berita
                  </p>
                  <input
                    type="text"
                    className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                    name="isi_berita"
                  />
                </div>

                <div className="w-full">
                  <p className="mt-3 uppercase" htmlFor="ImgPerson">
                    liga
                  </p>
                  <input
                    type="league"
                    className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                    name="league"
                  />
                </div>
                <div className="w-full">
                  <p className="mt-3 uppercase" htmlFor="Name">
                    foto pengirim berita /
                  </p>
                  <input
                    type="text"
                    className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                    name="pict_pengirim"
                  />
                </div>
                <div className="w-full">
                  <p className="mt-3 uppercase" htmlFor="Nickname">
                    username pengirim
                  </p>
                  <input
                    type="text"
                    className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                    name="pemilik_berita"
                  />
                </div>
              </div>
              <div className="w-full">
                <p className="mt-3 uppercase" htmlFor="Tittle">
                  isi berita
                </p>
                <textarea
                  className="w-full h-96 cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="Tittle"
                />
              </div>
            </div>
            <input
              type="submit"
              className="w-full bg-green-400 h-10 rounded-md text-white uppercase focus:bg-white focus:border border-neutral-300 focus:text-neutral-500"
              value="submit"
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default News;
