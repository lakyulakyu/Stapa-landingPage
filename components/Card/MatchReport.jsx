import React, { useState } from "react";
import { GiSoccerField } from "react-icons/gi";

const data = [
  {
    id: 1,
    position: "Gkp",
    name: "A.windartono",
    number: "5",
    menute: "23",
    switched: [
      { id: 1, in: "30", status: true },
      {
        id: 2,
        time: "",
        status: false,
      },
    ],

    red: [
      {
        time: "",
        status: false,
      },
    ],
    yellow: [
      {
        time: "20",
        status: true,
      },
    ],
    goal: [
      {
        id: 1,
        time: "40",
        status: true,
      },
      {
        id: 2,
        time: "38",
        status: true,
      },
    ],
  },
  {
    id: 2,
    position: "Gkp",
    name: "A.windartono",
    number: "5",
    menute: "23",
    switched: [
      { id: 1, in: "30", status: true },
      {
        id: 2,
        time: "",
        status: false,
      },
    ],

    red: [
      {
        time: "",
        status: false,
      },
    ],
    yellow: [
      {
        time: "20",
        status: true,
      },
    ],
    goal: [
      {
        id: 1,
        time: "40",
        status: true,
      },
      {
        id: 2,
        time: "38",
        status: true,
      },
    ],
  },
  {
    id: 3,
    position: "Gkp",
    name: "A.windartono",
    number: "5",
    menute: "23",
    switched: [
      { id: 1, in: "30", status: true },
      {
        id: 2,
        time: "",
        status: false,
      },
    ],

    red: [
      {
        time: "",
        status: false,
      },
    ],
    yellow: [
      {
        time: "20",
        status: true,
      },
    ],
    goal: [
      {
        id: 1,
        time: "40",
        status: true,
      },
      {
        id: 2,
        time: "38",
        status: true,
      },
    ],
  },
];

const MatchReport = () => {
  const [showDetail, setShowDetail] = useState(false);
  const filteredData = data.filter((item) => typeof item.status === "boolean");

  const handleButtonClick = () => {
    setShowDetail(!showDetail);
  };
  var match_1 = 47;
  var match_2 = 51;
  var total_match = match_1 + match_2;
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
            <h1 className="text-2xl text-gray-400 text-center font-light ">
              Halaman ini masih dalam proses pengembangan
            </h1>
          </>
        )}
      </div>
    </>
  );
};

export default MatchReport;
