import Hero from "./Sections/Hero";
import Sponsorship from "./Sections/Sponsorship";
import Match from "@/components/MatchScedle";
import FeaturedVideos from "@/components/FeaturedVideos";
import LatestNews from "@/components/LatestNews";
import LfcOnSosmed from "@/components/LfcOnSosmed";
import Adsvers from "@/components/Card/Adsvers";

export default function Home() {
  return (
    <div className="w-screen overflow-hidden">
      <Hero />
      <Match />
      <FeaturedVideos />
      <LatestNews />
      <Adsvers />
      <LfcOnSosmed />
      <Sponsorship />
    </div>
  );
}
