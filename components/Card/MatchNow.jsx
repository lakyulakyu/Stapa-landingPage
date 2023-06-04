"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GiSoccerField } from "react-icons/gi";
import DataMatch from "../../Json/Match";

function MatchNow() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const updateSchedule = async () => {
      const now = new Date();
      const currentSchedule = DataMatch.filter((item) => {
        const matchDateTime = new Date(`${item.date}T${item.time}`);
        return (
          matchDateTime <= now &&
          matchDateTime >= new Date(now - 2 * 60 * 60 * 1000)
        );
      });

      setSchedule(currentSchedule);
    };

    updateSchedule();

    const interval = setInterval(updateSchedule, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="text-center h-fit mt-10">
      <h2 className="text-lg uppercase font-semibold">Sedang berlangsung</h2>
      {schedule.length > 0 ? (
        <div className="max-w-7xl mx-auto">
          {schedule.map(
            (
              {
                id,
                name_tim1,
                name_tim2,
                date,
                tim_1,
                tim_2,
                liga,
                time,
                place,
              },
              index
            ) => {
              const matchDateTime = new Date(`${date}T${time}`);
              const matchTime = matchDateTime.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              });
              const isEven = index % 2 === 0; // Memeriksa apakah index genap
              return (
                <div key={id} className="max-w-3xl mx-auto text-black-main  ">
                  <div
                    className={` ${
                      isEven ? "bg-slate-100" : "bg-white"
                    } hover:bg-slate-100 py-4`}
                  >
                    <h1>{liga}</h1>
                    <div
                      className={`match w-full  grid justify-center sm:grid-cols-5 items-center  object-center`}
                    >
                      <p className="font-semibold capitalize text-xl ">
                        {name_tim1}
                      </p>
                      <div className="h-full w-full left-5 ">
                        <Image
                          alt=""
                          src={tim_1 || "/Logo-default.png"}
                          height={100}
                          width={100}
                          className=" object-contain mr-0 h-10 ml-0 mx-auto sm:h-full py-auto"
                        />
                      </div>
                      <p className=" py-1 rounded-md sm:text-xl w-full text-sm  sm:w-20 font-semibold text-light-grey mx-auto bg-red-600 ">
                        Vs
                      </p>
                      <Image
                        alt=""
                        src={tim_2 || "/Logo-default.png"}
                        height={100}
                        width={100}
                        className="object-contain  h-10 ml-0 mx-auto sm:h-full py-auto"
                      />
                      <p className="font-semibold capitalize text-xl ">
                        {name_tim2}
                      </p>
                    </div>
                    <p>{matchTime}</p>
                    <p className="w-fit flex items-center gap-2 px-4 py-2 mt-3 font-semibold capitalize rounded-lg text-sm mx-auto sm:bg-slate-300">
                      <span className="text-2xl ">
                        <GiSoccerField />
                      </span>
                      {place}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      ) : (
        <p className="text-gray-400">
          Tidak ada pertandingan yang sedang berlangsung.
        </p>
      )}
    </div>
  );
}

export default MatchNow;
