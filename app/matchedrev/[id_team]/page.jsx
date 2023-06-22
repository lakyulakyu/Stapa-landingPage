"use client";
import TeamResultSection from "./section/TeamSection";
import MatchTable from "@/components/Match/MatchTable";
import TeamOne from "../../../Json/SamplePlayerOne.json";
import TeamTwo from "../../../Json/PlayerResult.json";

const MatchResult = ({ params }) => {
  const ID = params.id_team;
  return (
    <div className="h-fit">
      <div className="bg-zinc-200 border-b-2 border-zinc-400 py-16">
        <TeamResultSection id={ID} />
      </div>
      <div className="max-w-7xl mx-auto font-poppins mt-8">
        <MatchTable TeamOne={TeamOne} TeamTwo={TeamTwo} />
      </div>
    </div>
  );
};

export default MatchResult;
