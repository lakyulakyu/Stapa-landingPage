import { headers } from "@/next.config";
import Image from "next/image";

async function getData() {
  const res = await fetch(
    "http://api.mokletscience.com/api/v1/club/p/5dea308c-cde0-40db-bb4c-53e543482bbf",
    {
      headers: {
        cache: "no-store",
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function CardPlayer({ position }) {
  const data = await getData();

  const filteredPlayers = data.data.club.Player.filter((player) =>
    player.position.includes(position)
  );
  return (
    <div className="mb-10 flex h-full max-sm:grid max-sm:grid-cols-2 flex-wrap  sm:gap-4 xl:gap-8 min-w-fit px-10">
      {filteredPlayers.map(({ fullname, number_of_player, photo_player }) => (
        <div
          key={number_of_player}
          className="mb-4 max-sm:w-44  max-md:mx-auto w-52 max-sm:h-40  pt-2 sm:mb-0 hover:scale-105 duration-500 ease-out"
        >
          <div className="h-64 max-sm:w-32 max-sm:h-36 w-full">
            <Image
              alt=""
              src={photo_player || "/default-human.png"}
              width={1000}
              height={1000}
              className="w-full rounded-t-2xl hover:opacity-60 h-full object-cover"
            />
          </div>
          <div className="sm:flex bg-neutral-200 rounded-b-md px-2 md:flex-col md:items-start md:h-fit md:py-2 h-20 sm:h-14 items-center text-base text-black-main font-poppins justify-between">
            <div className="flex gap-3 items-center divide-x-2 divide-black-main">
              <p className="md:block hidden text-xl -mt-1 border-b-2 border-primary-red text-primary-red">
                {number_of_player}
              </p>
              <p className="w-44 pl-2 text-xs text-black-main truncate">
                {fullname}
              </p>
            </div>
            <h1 className="text-primary-red md:hidden block sm:text-2xl text-4xl border-b-4 w-fit sm-w-full md:text-7xl md:border-b-4 md:pt-4 border-primary-red">
              {number_of_player}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}
