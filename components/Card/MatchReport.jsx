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
          className={`  py-2 w-fit px-20 text-center uppercase mx-auto text-xl justify-between rounded-lg font-normal flex items-center ${
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
            <div className="flex justify-evenly max-w-3xl mx-auto ">
              <p>Dimas</p>
              <p className="flex gap-2 justify-center">
                <GiSoccerField />
                Lapangan solo raya
              </p>
              <p>
                {total_match}({match_1} + {match_2})
              </p>
            </div>
            {data.map((item) => {
              <table key={item.id}>
                <tbody>
                  <tr>
                    <td>{item.number}</td>
                    <td>{item.position}</td>
                    <td>{item.name}</td>
                    <td>
                      {filteredData.map((item) => (
                        <>
                          <div key={item.switched.id}>
                            <p>{item.switched.time}</p>
                          </div>
                        </>
                      ))}
                    </td>
                    <td>25</td>
                    <td>Jakarta</td>
                  </tr>
                  <tr>
                    <td>Jane Smith</td>
                    <td>30</td>
                    <td>Bandung</td>
                  </tr>
                  <tr>
                    <td>David Johnson</td>
                    <td>35</td>
                    <td>Surabaya</td>
                  </tr>
                </tbody>
              </table>;
            })}
          </>
        )}
      </div>
    </>
  );
};

export default MatchReport;
