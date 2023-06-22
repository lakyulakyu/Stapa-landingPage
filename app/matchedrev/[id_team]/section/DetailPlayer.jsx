import React from "react";
import { BsClock } from "react-icons/bs";
import { GiSoccerField, GiWhistle } from "react-icons/gi";

const DetailPlayer = () => {
  return (
    <div>
      <div
        key={item.id}
        className="flex justify-center items-center gap-x-8 text-lg"
      >
        <div className="flex items-center gap-x-2">
          <GiWhistle size={32} />
          <h6>{item.referee}</h6>
        </div>
        <div className="flex items-center gap-x-2">
          <GiSoccerField size={32} />
          <h6>{item.stadium}</h6>
        </div>
        <div className="flex items-center gap-x-2">
          <BsClock size={24} />
          <h6>{`${Number(item.first_round) + Number(item.second_round)}'(${
            item.first_round
          } + ${item.second_round})`}</h6>
        </div>
      </div>
    </div>
  );
};

export default DetailPlayer;
