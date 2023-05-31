"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import Image from "next/image";
import DataMatch from "../../Json/Match";

const MatchCard = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentData(DataMatch.slice(startIndex, endIndex));
  }, [currentPage]);

  const nextPage = () => {
    const totalPages = Math.ceil(DataMatch.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <div className="h-full pb-10">
        <div className="max-w-7xl  mx-auto mt-8 w-full font-poppins font-semibold">
          <div className="flex justify-between items-center ">
            <div>
              <h2 className="uppercase font-bold text-2xl text-black-main">
                Match shcedule
              </h2>
              <Link href={"/#"}>
                <p className="text-base text-zinc-500 font-medium flex items-center gap-x-1 mt-1 cursor-pointer">
                  View all matches <IoMdAdd />
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 h-fit">
          {currentData.map((item, index) => {
            const isEven = index % 2 === 0;
            const handleClick = (e) => {
              if (!(item.score_tim_1 || item.score_tim_2)) {
                e.preventDefault();
              }
            };
            return (
              <>
                <div className="w-full mx-auto max-w-2xl divide-y-2  divide-black ">
                  <div
                    className={` ${
                      isEven ? "bg-slate-100" : "bg-white"
                    } hover:bg-slate-100 py-4`}
                  >
                    <Link href={`/Matched/${item.id}`}>
                      <div className=" lg:flex mx-auto text-center  h-fit py-4 w-full min-h-fit hover:bg-opacity-5 min-w-fit ">
                        <div className="pb-4  w-full">
                          <div className="flex justify-center items-center gap-4">
                            <p className="font-semibold text-red-500 text-lg capitalize">
                              {item.name_tim1}
                            </p>
                            <Image
                              key={item.id}
                              src={item.tim_1}
                              alt="logo"
                              width={100}
                              height={100}
                              className="h-12 w-fit"
                            />
                            <p className="bg-gray-200 text-lg rounded-lg px-2 py-1 font-semibold">
                              {item.time}
                            </p>
                            <Image
                              key={item.id}
                              src={item.tim_2}
                              alt="logo"
                              width={100}
                              height={100}
                              className="h-12 w-fit"
                            />
                            <p className="font-semibold text-primary-red text-lg capitalize">
                              {item.name_tim1}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-300">
                              score
                            </p>

                            {item.score_tim_1 || item.score_tim_2 ? (
                              <h1 className="text-lg font-poppins font-bold text-red-600">
                                {item.score_tim_1} - {item.score_tim_2} : W
                              </h1>
                            ) : (
                              <h1 className="text-sm font-poppins  text-gray-400">
                                Belum bertanding
                              </h1>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className=" text-center pb-4 capitalize">
                        <p className="text-xs text-gray-500 -mt-1">
                          {item.liga}
                        </p>
                        <p className="text-xs font-semibold mt-2">
                          {item.date}
                        </p>
                        <p className="text-xs font-semibold">
                          {item.time} <span>{item.place}</span>
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <button onClick={previousPage} disabled={currentPage === 1}>
          Halaman Sebelumnya
        </button>
        <button onClick={nextPage} disabled={currentData.length < itemsPerPage}>
          Halaman Selanjutnya
        </button>
      </div>
    </>
  );
};

export default MatchCard;
