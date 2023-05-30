import Hero from "./Sections/Hero";
import Sponsorship from "./Sections/Sponsorship";
import Match from "@/components/Match";
import FeaturedVideos from "@/components/FeaturedVideos";
import LatestNews from "@/components/LatestNews";
import LfcOnSosmed from "@/components/LfcOnSosmed";
import Adsvers from "@/components/Card/Adsvers";

export default function Home() {
  return (
    <div className="w-screen">
      <Hero />
      <Match />
      <div id="video" className="overflow-hidden">
        <FeaturedVideos />
      </div>
      <LatestNews />
      <Adsvers />
      <LfcOnSosmed />
      {/* <LfcRecomd /> */}
      <Sponsorship />
    </div>
  );
}
