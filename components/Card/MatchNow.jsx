"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GiSoccerField } from "react-icons/gi";
import DataMatch from "../../Json/Match";
import YouTubeLive from "../User/YoutubeLive";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import idLocale from "date-fns/locale/id";
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
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : null;
  return (
    <div className="text-center h-fit mt-10 ">
      <h2 className="text-lg uppercase font-semibold">Sedang berlangsung</h2>
      {schedule.length > 0 ? (
        <div className="max-w-7xl mx-auto">
          {schedule.map(
            (
              {
                id,
                name_tim1,
                name_tim2,
                tim_1,
                tim_2,
                liga,
                group,
                time,
                place,
              },
              index
            ) => {
              const isEven = index % 2 === 0;
              return (
                <div key={id} className="max-w-7xl mx-auto text-black-main  ">
                  <div
                    className={` ${
                      isEven ? "" : "bg-neutral-100"
                    } hover:bg-neutral-100 py-4 text-base lg:text-[9px] xl:text-sm`}
                  >
                    <h1 className="text-primary-red text-xs font-semibold ">
                      {liga}
                    </h1>
                    <div
                      className={
                        pathname === "/Matched"
                          ? " flex flex-col lg:flex-row  items-center justify-center gap-y-2 lg:gap-2"
                          : " flex-col flex gap-y-2 "
                      }
                    >
                      <p className="w-fit ">{time}</p>
                      <div className="flex justify-center h-4 items-center ">
                        <h2 className="capitalize max-lg:text-sm right-0 px-2  text-end w-full  font-semibold py-2">
                          group {group}
                        </h2>
                        <p className="flex items-center gap-2 px-2 w-full border-l font-semibold capitalize max-lg:text-sm mx-auto ">
                          <span className="text-2xl ">
                            <GiSoccerField />
                          </span>
                          {place}
                        </p>
                      </div>{" "}
                    </div>

                    <table
                      className={`
                        pathname === "matched"
                          ? " min-w-full"
                          : " font-light"
                      mx-auto `}
                    >
                      <tbody >
                        <tr>
                          <td className="px-6 py-4  w-3/12 ">
                            {" "}
                            <p className="font-semibold text-end  lg:leading-3 xl:leading-4 capitalize ">
                              {name_tim1}
                            </p>
                          </td>
                          <td className="py-4 w-2/12  ">
                            <Image
                              alt=""
                              src={tim_1 || "/Logo-default.png"}
                              height={100}
                              width={100}
                              className="object-contain right-0 mx-auto sm:h-14  py-auto"
                            />
                          </td>
                          <td className="max-lg:px-6 py-4 w-fit px-2 ">VS</td>
                          <td className=" w-2/12  py-4 ">
                            <Image
                              alt=""
                              src={tim_2 || "/Logo-default.png"}
                              height={100}
                              width={100}
                              className="object-contain left-0 h-10 mx-auto sm:h-14 py-auto"
                            />
                          </td>
                          <td className="px-6 py-4 w-3/12 ">
                            <p className="font-semibold  lg:leading-3 xl:leading-4 text-start capitalize  ">
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
