import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { ButtonBack } from "@/components/User/Button";
async function getData(uuid) {
  const res = await fetch(
    "http://api.mokletscience.com/api/v1/player/" + uuid,
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

export default async function detailIndividu({ params }) {
  const data = await getData(params.detail);

  const calculateYear = (birthday) => {
    const birthdateObj = new Date(birthday);
    const currentYear = new Date().getFullYear();
    const birthYear = birthdateObj.getFullYear();
    const age = currentYear - birthYear;
    return age;
  };

  return (
    <div className="h-screen max-w-6xl mx-auto text-black-main mt-36">
      <div className="w-fit">
        <ButtonBack />
      </div>
      <div className="w-full h-full pt-8 flex">
        <div className="mx-auto w-4/5 px-10">
          <div>
            <div className="flex justify-between items-center">
              <p className="text-5xl font-semibold max-w-md">
                {data.data.fullname}
              </p>
              <p className="text-5xl font-bold max-w-md border-b-4 border-primary-red text-primary-red">
                {data.data.number_of_player}
              </p>
            </div>
            <p className="uppercase text-lg mt-4">{data.data.position}</p>
            <p className="text-3xl   hover:bg-neutral-200 px-2 py-1 w-fit rounded-md border items-center  mt-4">
              <Link
                href={`https://www.instagram.com/${data.data.nickname}`}
                target="blank "
                className="flex gap-2"
              >
                <AiOutlineInstagram />
                <span className="text-lg">{data.data.nickname}</span>
              </Link>
            </p>
          </div>
          <div className="border-b-2 py-8 mt-6  uppercase grid grid-cols-2">
            <p className="flex items-center gap-2">
              <MdOutlineDoubleArrow />
              Tempat Lahir :{" "}
              <span className="text-primary-red font-medium">
                {data.data.place_of_birth}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineDoubleArrow />
              Umur :
              <span className="text-primary-red font-medium">
                ( {calculateYear(data.data.date_of_birth)} Tahun )
              </span>
              {data.data.date_of_birth}
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineDoubleArrow /> tinggi badan :{" "}
              <span className="text-primary-red font-medium">
                {data.data.height}
              </span>
              Cm
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineDoubleArrow /> berat badan :
              <span className="text-primary-red font-medium">
                {data.data.weight}
              </span>{" "}
              Kg
            </p>
          </div>
          <p className="uppercase">stats...</p>
        </div>
        <Image
          alt=""
          src={data.data.photo_player}
          height={1000}
          width={1000}
          className=" h-96 w-1/5 object-cover"
        />
      </div>
    </div>
  );
}
