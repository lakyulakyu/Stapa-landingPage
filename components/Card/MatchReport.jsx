"use client";
import React, { Fragment,useState } from "react";
import { BsSquareFill } from "react-icons/bs";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import TeamOne from "../../Json/PlayerResult.json";
import TeamTwo from "../../Json/PlayerResult.json";
// const data = [
//   {
//     id: 1,
//     position: "Gkp",
//     name: "A.windartono",
//     number: "5",
//     menute: "23",
//     switched: [
//       { id: 1, in: "30", status: true },
//       {
//         id: 2,
//         time: "",
//         status: false,
//       },
//     ],

//     red: [
//       {
//         time: "",
//         status: false,
//       },
//     ],
//     yellow: [
//       {
//         time: "20",
//         status: true,
//       },
//     ],
//     goal: [
//       {
//         id: 1,
//         time: "40",
//         status: true,
//       },
//       {
//         id: 2,
//         time: "38",
//         status: true,
//       },
//     ],
//   },
//   {
//     id: 2,
//     position: "Gkp",
//     name: "A.windartono",
//     number: "5",
//     menute: "23",
//     switched: [
//       { id: 1, in: "30", status: true },
//       {
//         id: 2,
//         time: "",
//         status: false,
//       },
//     ],

//     red: [
//       {
//         time: "",
//         status: false,
//       },
//     ],
//     yellow: [
//       {
//         time: "20",
//         status: true,
//       },
//     ],
//     goal: [
//       {
//         id: 1,
//         time: "40",
//         status: true,
//       },
//       {
//         id: 2,
//         time: "38",
//         status: true,
//       },
//     ],
//   },
//   {
//     id: 3,
//     position: "Gkp",
//     name: "A.windartono",
//     number: "5",
//     menute: "23",
//     switched: [
//       { id: 1, in: "30", status: true },
//       {
//         id: 2,
//         time: "",
//         status: false,
//       },
//     ],

//     red: [
//       {
//         time: "",
//         status: false,
//       },
//     ],
//     yellow: [
//       {
//         time: "20",
//         status: true,
//       },
//     ],
//     goal: [
//       {
//         id: 1,
//         time: "40",
//         status: true,
//       },
//       {
//         id: 2,
//         time: "38",
//         status: true,
//       },
//     ],
//   },
// ];

const MatchReport = () => {
  const [showDetail, setShowDetail] = useState(false);

  const splitName = (playerName) => {
    const nameArray = playerName.split(" ");
    const shortenedName = `${nameArray[0].charAt(0)}. ${nameArray[1]}`;
    return shortenedName;
  };
  const handleButtonClick = () => {
    setShowDetail(!showDetail);
  };

  return (
    <>
      <div className="max-w-3xl mx-auto">
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
            <div className="h-screen max-w-7xl mx-auto">
              <div className="wrapper grid grid-cols-2 font-poppins text-sm font-normal">
                {/* Team One */}
                <div>
                  {TeamOne.map((item, index) => {
                    return (
                      <div
                        key={item.id}
                        className={`flex w-full gap-x-4 py-1 pr-8 px-3 ${
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
                {/* Team One */}
                <div>
                  {TeamOne.map((item, index) => {
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
          </>
        )}
      </div>
    </>
  );
};

export default MatchReport;
