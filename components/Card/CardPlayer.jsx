import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

async function getData(uuid) {
  const res = await fetch(
    "http://api.mokletscience.com/api/v1/club/p/" + uuid,
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
export default async function CardPlayer({ position, params }) {
  const data = await getData(params.player);

  const filteredPlayers = data.data.club.Player.filter((player) =>
    player.position.includes(position)
  );

  return (
    <>
      <div className="w-full max-sm:px-4">
        <div className="h-fit  flex w-fit flex-wrap gap-2 ">
          {filteredPlayers.map(
            ({
              fullname,
              number_of_player,
              photo_player,
              is_verified,
              uuid,
            }) => (
              <>
                <Link href={`Team/${params.player}/${uuid}`}>
                  <div
                    key={number_of_player}
                    className="max-sm:w-40 sm:w-60 border rounded-xl h-full  md:h-80 "
                  >

                    <div className="h-52 md:h-60 w-full ">
                      <Image
                        alt=""
                        src={photo_player || "/default-human.png"}
                        width={1000}
                        height={1000}
                        className="w-full rounded-t-2xl hover:opacity-60 h-full  object-cover"
                      />
                    </div>
                    <article className="px-2 gap-2 my-3 items-center max-sm:divide-x-2 h-fit justify-between  flex ">
                      <p className="sm:hidden text-2xl text-primary-red border-b-2 border-primary-red">
                        {number_of_player}
                      </p>
                      <div className="flex pl-1 overflow-hidden gap-2 text-base font-normal items-center">
                        <p className="line-clamp-2 leading-tight tracking-wide">
                          {fullname}{" "}
                        </p>
                        {is_verified === true && (
                          <p className="text-blue-600 text-lg">
                            <FaCheckCircle />
                          </p>
                        )}
                      </div>
                      <p className="max-sm:hidden pl-2 text-primary-red border-l-2 text-2xl underline ">
                        {number_of_player}
                      </p>
                    </article>
                  </div>
                </Link>
              </>
            )
          )}
        </div>
      </div>
    </>
  );
}
