"use client";
import React, { Fragment, useEffect, useState } from "react";
import { BsClock, BsSquareFill } from "react-icons/bs";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { GiWhistle, GiSoccerField } from "react-icons/gi";
import MatchResult from "../../Json/MatchResult.json";
import SamplePlayer from "../../Json/SamplePlayerOne.json";

const MatchTable = (props) => {
  const [startingOne, setStartingOne] = useState();
  const [subtitutesOne, setSubtitutesOne] = useState();

  useEffect(() => {
    const getData = () => {
      const filteredStartingOne = SamplePlayer.filter(
        (player) => player.player_in === "0" || player.player_out !== "90"
      );

      const filteredSubOne = SamplePlayer.filter(
        (player) => player.player_in != 0
      );

      setStartingOne(filteredStartingOne);
      setSubtitutesOne(filteredSubOne);
    };

    getData();
  }, []);

  const filteredData = MatchResult.filter((item) => item.id == 3);
  const splitName = (playerName) => {
    const nameArray = playerName.split(" ");
    const shortenedName = `${nameArray[0].charAt(0)}. ${nameArray[1]}`;
    return shortenedName;
  };

  return (
    <div className="">
      <div className="wrapper grid grid-cols-2 font-poppins text-sm font-normal mt-6">
        {/* Team One */}
        <div>
          {props.TeamOne.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`flex w-full gap-x-4 py-1 pr-8 px-3 ${
                  index % 2 ? "" : "bg-red-100"
                }`}
              >
                <p>{index}</p>
                <p className="w-[5%]">{item.number}</p>
                <p className="w-[5%]">{item.position}</p>
                <p className="w-[30%]">{`${splitName(item.name)} ('${
                  item.minutes_played
                })`}</p>
                <div className="w-[10%] flex items-center gap-2 text-end">
                  {item.player_out != 90 && (
                    <Fragment key={item.id}>
                      <p>{`${item.player_out}'`}</p>
                      <FaLongArrowAltLeft color="red" size={24} />
                    </Fragment>
                  )}
                  {item.player_in != 0 && (
                    <Fragment key={item.id}>
                      <p>{`${item.player_in}'`}</p>
                      <FaLongArrowAltRight color="green" size={24} />
                    </Fragment>
                  )}
                </div>
                <div className="w-[25%] flex items-center gap-2 justify-end">
                  {item.yellow_card.length > 0 && (
                    <>
                      {item.yellow_card.map((card) => {
                        return <p key={card}>{card + "'"}</p>;
                      })}
                      <BsSquareFill color="yellow" />
                    </>
                  )}
                  {item.red_card.length > 0 && (
                    <>
                      {item.red_card.map((card) => {
                        return <p key={card}>{card + "'"}</p>;
                      })}
                      <BsSquareFill color="red" />
                    </>
                  )}
                </div>
                <div className="w-[20%] flex items-center gap-2 justify-end">
                  {item.goal.length > 0 && (
                    <>
                      {item.goal.map((goal) => {
                        return <p key={goal}>{goal + "'"}</p>;
                      })}
                      <IoMdFootball size={24} />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/* Team Two */}
        <div>
          {props.TeamTwo.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`flex w-full gap-x-4 py-1 pl-8 px-3 ${
                  index % 2 ? "" : "bg-red-100"
                }`}
              >
                <p className="w-[5%]">{item.number}</p>
                <p className="w-[5%]">{item.position}</p>
                <p className="w-[30%]">{`${splitName(item.name)} ('${
                  item.minutes_played
                })`}</p>
                <div className="w-[10%] flex items-center gap-2 text-end">
                  {item.player_out != 90 && (
                    <Fragment>
                      <p>{`${item.player_out}'`}</p>
                      <FaLongArrowAltLeft color="red" size={24} />
                    </Fragment>
                  )}
                  {item.player_in != 0 && (
                    <Fragment>
                      <p>{`${item.player_in}'`}</p>
                      <FaLongArrowAltRight color="green" size={24} />
                    </Fragment>
                  )}
                </div>
                <div className="w-[25%] flex items-center gap-2 justify-end">
                  {item.yellow_card.length > 0 && (
                    <>
                      {item.yellow_card.map((card) => {
                        return <p key={card}>{card + "'"}</p>;
                      })}
                      <BsSquareFill color="yellow" />
                    </>
                  )}
                  {item.red_card.length > 0 && (
                    <>
                      {item.red_card.map((card) => {
                        return <p key={card}>{card + "'"}</p>;
                      })}
                      <BsSquareFill color="red" />
                    </>
                  )}
                </div>
                <div className="w-[20%] flex items-center gap-2 justify-end">
                  {item.goal.length > 0 && (
                    <>
                      {item.goal.map((goal) => {
                        return <p key={goal}>{goal + "'"}</p>;
                      })}
                      <IoMdFootball size={24} />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MatchTable;
