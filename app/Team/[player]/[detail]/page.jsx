import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import DataStats from "../../../../Json/Player.json";

const detailIndividu = ({ params }) => {
  const id = params.detail;
  const item = DataStats.find((item) => item.id === parseInt(id));

  console.log(item);

  const calculateYear = (birthdate) => {
    const birthdateObj = new Date(birthdate);
    const currentYear = new Date().getFullYear();
    const birthYear = birthdateObj.getFullYear();
    const age = currentYear - birthYear;

    return age;
  };

  return (
    <div className="h-screen text-black-main">
      <div className="w-full h-full pt-32 flex">
        <div className="mx-auto w-3/5 px-10">
          <div>
            <div className="flex justify-between items-center">
              <p className="text-5xl font-semibold max-w-md">{item.name}</p>
              <p className="text-5xl font-bold max-w-md border-b-4 border-primary-red text-primary-red">
                {item.number}
              </p>
            </div>
            <p className="uppercase text-lg mt-4">{item.position}</p>
            <Link href={item.link_sosmed} target="blank">
              <p className="text-3xl flex  hover:bg-neutral-200 px-2 py-1 w-fit rounded-md border items-center gap-2 mt-4">
                <AiOutlineInstagram />
                <span className="text-lg">Instagram</span>
              </p>
            </Link>
          </div>
          <div className="border-b-2 py-8 mt-6  uppercase grid grid-cols-2">
            <p className="flex items-center gap-2">
              <MdOutlineDoubleArrow />
              Tempat Lahir :{" "}
              <span className="text-primary-red font-medium">{item.asal}</span>
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineDoubleArrow />
              Umur :
              <span className="text-primary-red font-medium">
                ( {calculateYear(item.birthday)} Tahun )
              </span>
              {item.birthday}
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineDoubleArrow /> tinggi badan :{" "}
              <span className="text-primary-red font-medium">
                {item.height}
              </span>
              Cm
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineDoubleArrow /> berat badan :
              <span className="text-primary-red font-medium">
                {item.berat_badan}
              </span>{" "}
              Kg
            </p>
          </div>
          <p className="uppercase">stats...</p>
        </div>
        <Image
          alt=""
          src={item.img}
          height={1000}
          width={1000}
          className="h-full w-2/5 object-cover"
        />
      </div>
    </div>
  );
};

export default detailIndividu;

// "id": ,
//     "img":
//     "name":
//     "number":
//     "birthday":
//     "position":
