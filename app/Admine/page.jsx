import React from "react";
import NavAdmin from "@/components/NavAdmin";
import News from "@/components/Admine/News";
import Shedule from "@/components/Admine/Shedule";
import Sosmed from "@/components/Admine/Sosmed";
import Video from "@/components/Admine/Video";
import Sponsor from "@/components/Admine/Sponsor";
import DetailMatch from "@/components/Admine/DetailMatch";
import PlayerDetail from "@/components/Admine/playerDetail";
const page = () => {
  return (
    <>
      <NavAdmin />
      <News />
      <Shedule />
      <Sosmed />
      <Sponsor />
      <Video />
      <DetailMatch />
      <PlayerDetail/>
    </>
  );
};

export default page;
