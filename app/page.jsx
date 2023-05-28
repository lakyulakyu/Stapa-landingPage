import Hero from "./Sections/Hero";
import Sponsorship from "./Sections/Sponsorship";
import MatchScedule from "@/components/MatchScedule";
import FeaturedVideos from "@/components/FeaturedVideos";
import LatestNews from "@/components/LatestNews";
import LfcOnSosmed from "@/components/LfcOnSosmed";
import LfcRecomd from "@/components/LfcRecomd";
import Adsvers from "@/components/Card/Adsvers";
import PlayerStats from "@/components/PlayerStats";

export default function Home() {
  return (
    <div className="w-screen">
      <Hero />
      <div id="video" className="overflow-hidden">
        <MatchScedule />
        <FeaturedVideos />
        <LatestNews />
        <PlayerStats />
        <Adsvers />
        <LfcOnSosmed />
        <LfcRecomd />
      </div>

      <Sponsorship />
    </div>
  );
}
