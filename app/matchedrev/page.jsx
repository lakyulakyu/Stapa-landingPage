import Image from "next/image";
import React from "react";

const MatchedRev = () => {
  return (
    <div className="h-screen">
      <div className="max-w-4xl mx-auto font-poppins">
        <div className="wrapper flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 mt-12">
            <div className="flex flex-col items-center">
              <Image
                src={"/Logo.png"}
                alt=""
                width={300}
                height={300}
                className="w-40"
              />
              <h3 className="text-3xl uppercase mt-8 text-center font-medium">
                Menolak Tua
              </h3>
              <h6 className="text-lg mt-1 text-zinc-500">Coach: M. Almagiri</h6>
            </div>
          </div>
          <div className="flex items-center flex-col uppercase w-full md:w-2/4">
            <div className="text-xl flex items-center flex-col">
              <h6>03/06/2017</h6>
              <h6>Solo Premiere League 2023</h6>
            </div>
            <h2 className="text-5xl mt-14 font-medium">1 - 4</h2>
          </div>
          <div className="w-full md:w-1/4 mt-12">
            <div className="flex flex-col items-center">
              <Image
                src={"/Logo.png"}
                alt=""
                width={300}
                height={300}
                className="w-40"
              />
              <h3 className="text-3xl uppercase mt-8 text-center font-medium">
                Menolak Tua
              </h3>
              <h6 className="text-lg mt-1 text-zinc-500">Coach: M. Almagiri</h6>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-y-3">
          <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
            <div className="flex justify-center w-1/4">
              <h6>56</h6>
            </div>
            <div className="flex justify-center uppercase w-2/4">
              <h6>Shoot</h6>
            </div>
            <div className="flex justify-center w-1/4">
              <h6>30</h6>
            </div>
          </div>
          <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
            <div className="flex justify-center w-1/4">
              <h6>56</h6>
            </div>
            <div className="flex justify-center uppercase w-2/4">
              <h6>Shoot on Target</h6>
            </div>
            <div className="flex justify-center w-1/4">
              <h6>4</h6>
            </div>
          </div>
          <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
            <div className="flex justify-center w-1/4">
              <h6>20</h6>
            </div>
            <div className="flex justify-center uppercase w-2/4">
              <h6>Yellow Cards</h6>
            </div>
            <div className="flex justify-center w-1/4">
              <h6>10</h6>
            </div>
          </div>
          <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
            <div className="flex justify-center w-1/4">
              <h6>20</h6>
            </div>
            <div className="flex justify-center uppercase w-2/4">
              <h6>Red Cards</h6>
            </div>
            <div className="flex justify-center w-1/4">
              <h6>10</h6>
            </div>
          </div>
          <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
            <div className="flex justify-center w-1/4">
              <h6>20</h6>
            </div>
            <div className="flex justify-center uppercase w-2/4">
              <h6>Offsides</h6>
            </div>
            <div className="flex justify-center w-1/4">
              <h6>10</h6>
            </div>
          </div>
          <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
            <div className="flex justify-center w-1/4">
              <h6>20</h6>
            </div>
            <div className="flex justify-center uppercase w-2/4">
              <h6>Corners</h6>
            </div>
            <div className="flex justify-center w-1/4">
              <h6>10</h6>
            </div>
          </div>
          <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
            <div className="flex justify-center w-1/4">
              <h6>20</h6>
            </div>
            <div className="flex justify-center uppercase w-2/4">
              <h6>Possession</h6>
            </div>
            <div className="flex justify-center w-1/4">
              <h6>10</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchedRev;
