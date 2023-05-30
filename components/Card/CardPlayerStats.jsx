"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const DataStats = [
  {
    id: 1,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: "35",
    category: "goals",
  },
  {
    id: 2,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: "544",
    category: "goals",
  },
  {
    id: 3,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: " 682",
    category: "goals",
  },
  {
    id: 4,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: "521",
    category: "goals",
  },
  {
    id: 5,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: "52",
    category: "goals",
  },
  {
    id: 6,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: "5",
    category: "goals",
  },
  {
    id: 7,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: "379",
    category: "goals",
  },
  {
    id: 8,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: "5",
    category: "cleansheets",
  },
  {
    id: 9,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: "5",
    category: "cleansheets",
  },
  {
    id: 10,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: "5",
    category: "cleansheets",
  },
  {
    id: 11,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: "75",
    category: "cleansheets",
  },
  {
    id: 12,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: "4",
    category: "cleansheets",
  },
  {
    id: 13,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: "5",
    category: "cleansheets",
  },
  {
    id: 14,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: "3",
    category: "passes",
  },
  {
    id: 15,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: "579",
    category: "passes",
  },
  {
    id: 16,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: "19",
    category: "passes",
  },
  {
    id: 17,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: "32",
    category: "passes",
  },
  {
    id: 18,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: "38",
    category: "passes",
  },
  {
    id: 19,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: "359",
    category: "passes",
  },
  {
    id: 20,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: "0",
    category: "assist",
  },
  {
    id: 21,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: "10",
    category: "assist",
  },
  {
    id: 22,
    img: "/Foto_org.png",
    name: "zhidan marties alfareza",
    number: "53",
    category: "assist",
  },
];

export default function CardPlayer({ category, limit }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (id) => {
    setActiveIndex(id);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const handleClick = (id) => {
    setActiveIndex(id);
  };

  return (
    <>
      <div className=" w-96 min-w-fit divide-y-2 max-w-xs px-10">
        {DataStats.filter((product) => product.category === category) //shorting and map.item
          .sort((a, b) => b.number - a.number) //shorting
          .slice(0, limit)
          .map(({ id, name, number, img }, index) => (
            <>
              <div //for hover
                key={id}
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(id)}
              >
                {activeIndex === id && (
                  <>
                    <div className="h-28 absolute w-full max-w-[250px] pt-3 z-10 bg-white">
                      <h1 className="text-xs text-black-main opacity-60 mb-3 ">
                        {category}
                      </h1>
                      <div className="flex justify-between">
                        <div>
                          {" "}
                          <h1 className="text-xs font-semibold  text-black-main capitalize">
                            {name}
                          </h1>
                          <p className="text-primary-red mt-2">{number}</p>
                        </div>

                        <Image
                          src={img}
                          alt={name}
                          width={1000}
                          height={1000}
                          className="h-16 object-cover w-fit"
                        />
                      </div>{" "}
                    </div>
                  </>
                )}
                <div
                  className={`${
                    id === 0 ? "opacity-0 bg-black" : "opacity-100"
                  }`}
                >
                  <div className="flex h-14 items-center text-xs text-black-main font-poppins justify-between">
                    <h1 className="w-32 truncate">
                      {" "}
                      {index + 1} {name}
                    </h1>
                    <h1 className="text-primary-red">{number}</h1>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
}
