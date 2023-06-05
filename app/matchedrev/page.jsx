import Image from "next/image";
import React from "react";

const MatchedRev = () => {
  return (
    <div className="h-fit">
      <div className="max-w-4xl mx-auto font-poppins">
        <div className="wrapper text-sm flex  md:flex-row">
          <div className="w-full md:w-1/4 mt-16">
            <div className="flex flex-col items-center">
              <Image
                src={"/Logo.png"}
                alt=""
                width={300}
                height={300}
                className="lg:w-40 h-16 w-fit"
              />
              <h3 className="md:text-3xl uppercase mt-8 text-center font-medium">
                Menolak Tua
              </h3>
              <h6 className="sm:text-lg mt-1 text-xs  text-zinc-500">
                Coach: M. Almagiri
              </h6>
            </div>
          </div>
          <div className="flex items-center flex-col uppercase w-full md:w-2/3">
            <div className="sm:text-xl text-sm flex items-center content-center flex-col">
              <h6>03/06/2017</h6>
              <h6 className="w-40 items-center flex">Solo Premiere League</h6>
            </div>
            <h2 className="md:text-5xl text-lg mt-24 font-medium ">1 - 4</h2>
          </div>
          <div className="w-full md:w-1/4 mt-16">
            <div className="flex flex-col items-center">
              <Image
                src={"/Logo.png"}
                alt=""
                width={300}
                height={300}
                className="lg:w-40 h-16 w-fit"
              />
              <h3 className="md:text-3xl  uppercase mt-8 text-center font-medium">
                Menolak Tua
              </h3>
              <h6 className="sm:text-lg mt-1 text-xs text-zinc-500">
                Coach: M. Almagiri
              </h6>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:mx-12 mx-2 flex flex-col gap-y-3">
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
