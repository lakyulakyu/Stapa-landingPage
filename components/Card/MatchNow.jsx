"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GiSoccerField } from "react-icons/gi";
import DataMatch from "../../Json/Match";
import YouTubeLive from "../User/YoutubeLive";
import Link from "next/link";

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
                group,
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
              const isEven = index % 2 === 0;
              return (
                <div key={id} className="max-w-7xl mx-auto text-black-main  ">
                  <div
                    className={` ${
                      isEven ? "" : "bg-neutral-100"
                    } hover:bg-neutral-100 py-4`}
                  >
                    <h1 className="text-primary-red text-xs font-semibold mb-2">
                      {liga}
                    </h1>
                    <p>{matchTime}</p>
                    <div className="flex mx-auto justify-center h-4 items-center mt-2">
                      <h2 className="capitalize text-sm right-0 px-2  text-end w-full  font-semibold py-2">
                        group {group}
                      </h2>

                      <p className="flex items-center gap-2 px-2 w-full border-l font-semibold capitalize text-sm mx-auto ">
                        <span className="text-2xl ">
                          <GiSoccerField />
                        </span>
                        {place}
                      </p>
                    </div>

                    <table className="min-w-full">
                      <tbody>
                        <tr>
                          <td className="px-6 py-4 w-60 ">
                            {" "}
                            <p className="font-semibold text-end capitalize text-xl ">
                              {name_tim1}
                            </p>
                          </td>
                          <td className="py-4 w-24  ">
                            <Image
                              alt=""
                              src={tim_1 || "/Logo-default.png"}
                              height={100}
                              width={100}
                              className="object-contain right-0 mx-auto  sm:h-14 py-auto"
                            />
                          </td>
                          <td className="px-6 py-4 w-8 ">VS</td>
                          <td className=" w-24 py-4 ">
                            <Image
                              alt=""
                              src={tim_2 || "/Logo-default.png"}
                              height={100}
                              width={100}
                              className="object-contain left-0 h-10 mx-auto sm:h-14 py-auto"
                            />
                          </td>
                          <td className="px-6 py-4 w-60 max-w-[240px]">
                            <p className="font-semibold text-start capitalize text-xl ">
                              {name_tim2}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <YouTubeLive />
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
