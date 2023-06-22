import Hero from "./Sections/Hero";
import Match from "./Sections/MatchSchedule";
import FeaturedVideos from "./Sections/FeaturedVideos";
import LatestNews from "./Sections/LatestNews";
import Advers from "@/components/Card/Adsvers";
import Error from "./not-found";
import LfcOnSosmed from "./Sections/Sosmed";
export default function Home() {
  return (
    <div className="w-screen overflow-hidden">
      <Hero />
      <Match />
      <FeaturedVideos />
      <LatestNews />
      <Advers />
      <LfcOnSosmed />
    </div>
  );
}
