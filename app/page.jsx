import Hero from "./Sections/Hero";
import Match from "@/components/User/MatchSchedule";
import FeaturedVideos from "@/components/User/FeaturedVideos";
import LatestNews from "@/components/User/LatestNews";
import LfcOnSosmed from "@/components/User/LfcOnSosmed";
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
    </div>
  )
}
