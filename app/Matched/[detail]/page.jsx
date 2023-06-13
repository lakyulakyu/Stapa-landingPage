import Image from "next/image";
import React from "react";
import MatchReport from "@/components/Card/MatchReport";
import Match from "../../../Json/Match";
import Link from "next/link";
const MatchedRev = ({ params }) => {
  const id = params.detail;
  const item = Match.find((item) => item.id === parseInt(id));
  console.log("item.detail_match.detail", item.detail_match[0].detail);
  return (
    <div className="h-fit">
      <div className="max-w-4xl mx-auto font-poppins">
        <div className="grid grid-cols-3 mb-4 mt-24 mx-auto bg-white py-2 rounded-md shadow-xl items-center max-w-[200px] ">
          <Image
            alt=""
            src={"/Logo.png"}
            className="h-8 w-fit mx-auto"
            width={100}
            height={100}
          />
          <Image
            alt=""
            src={"/Logo-Web.png"}
            className="h-8 w-fit mx-auto"
            width={100}
            height={100}
          />
          <Image
            alt=""
            src={"/Logo_Libra.png"}
            className="h-8 w-fit mx-auto"
            width={100}
            height={100}
          />
        </div>
        {/* 
        <div className="wrapper text-sm flex  md:flex-row">
          <div className="w-full ">
            <div className="flex flex-col items-center">
              <Image
                src={"/Emha.jpeg"}
                alt=""
                width={300}
                height={300}
                className="lg:w-40 lg:h-fit h-12 w-fit"
              />
              <h3 className="md:text-3xl uppercase mt-2 text-center font-medium">
                Mutiara Solo
              </h3>
            </div>
          </div>
          <div className="flex items-center flex-col uppercase w-full ">
            <div className="sm:text-xl text-xs text-center flex items-center content-center flex-col">
              <h6>03/06/2017</h6>
              <h6 className="w-40 items-center ">Solo Premiere League</h6>
            </div>
            <h2 className="md:text-5xl text-lg mt-2 font-medium ">1 - 4</h2>
          </div>
          <div className="w-full ">
            <div className="flex flex-col items-center">
              <Image
                src={"/mutiara.jpeg"}
                alt=""
                width={300}
                height={300}
                className="lg:w-40 lg:h-fit h-12 w-fit"
              />
              <h3 className="md:text-3xl uppercase mt-2 text-center font-medium">
                EM HA RSU
              </h3>
            </div>
          </div>
        </div> */}
        <div className="mt-4 sm:mx-12 mx-12 flex flex-col gap-y-3">
          {/* <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
            <div className="flex justify-center w-1/4">
              <h6>3</h6>
            </div>
            <div className="flex justify-center uppercase w-2/4">
              <h6>Shoot Off Target</h6>
            </div>
            <div className="flex justify-center w-1/4">
              <h6>8</h6>
            </div>
          </div>
          <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
            <div className="flex justify-center w-1/4">
              <h6>4</h6>
            </div>
            <div className="flex justify-center uppercase w-2/4">
              <h6>Shoot on Target</h6>
            </div>
            <div className="flex justify-center w-1/4">
              <h6>8</h6>
            </div>
          </div>
          <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
            <div className="flex justify-center w-1/4">
              <h6>1</h6>
            </div>
            <div className="flex justify-center uppercase w-2/4">
              <h6>Yellow Cards</h6>
            </div>
            <div className="flex justify-center w-1/4">
              <h6>1</h6>
            </div>
          </div>
          <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
            <div className="flex justify-center w-1/4">
              <h6>0</h6>
            </div>
            <div className="flex justify-center uppercase w-2/4">
              <h6>Red Cards</h6>
            </div>
            <div className="flex justify-center w-1/4">
              <h6>0</h6>
            </div>
          </div>
          <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
            <div className="flex justify-center w-1/4">
              <h6>0</h6>
            </div>
            <div className="flex justify-center uppercase w-2/4">
              <h6>Offsides</h6>
            </div>
            <div className="flex justify-center w-1/4">
              <h6>2</h6>
            </div>
          </div>
          <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
            <div className="flex justify-center w-1/4">
              <h6>0</h6>
            </div>
            <div className="flex justify-center uppercase w-2/4">
              <h6>Corners</h6>
            </div>
            <div className="flex justify-center w-1/4">
              <h6>2</h6>
            </div>
          </div>
          <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
            <div className="flex justify-center w-1/4">
              <h6>0</h6>
            </div>
            <div className="flex justify-center uppercase w-2/4">
              <h6>Pinalti</h6>
            </div>
            <div className="flex justify-center w-1/4">
              <h6>0</h6>
            </div>
          </div>
          <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
            <div className="flex justify-center w-1/4">
              <h6>1</h6>
            </div>
            <div className="flex justify-center uppercase w-2/4">
              <h6>Free kick</h6>
            </div>
            <div className="flex justify-center w-1/4">
              <h6>4</h6>
            </div>
          </div>
          <div className="flex bg-primary-red text-zinc-200 font-medium p-1">
            <div className="flex justify-center w-1/4">
              <h6>40%</h6>
            </div>
            <div className="flex justify-center uppercase w-2/4">
              <h6>Possession</h6>
            </div>
            <div className="flex justify-center w-1/4">
              <h6>60%</h6>
            </div>
          </div> */}
          {item.detail_match[0].detail ? (
            <>
              <Image
                src={item.detail_match[0].detail}
                alt="hello"
                width={1000}
                height={1000}
              />
              <MatchReport item={item} key={item.id} />
            </>
          ) : (
            <>
              <div className="h-[20vh] items-center text-center">
                <p className="items-cente mt-10 uppercase text-neutral-600">
                  belum ada data
                </p>
                <Link href={"/Matched"}>
                  <button className="h-8 bg-primary-red px-4 mt-5 rounded-md text-white uppercase">
                    kembali
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchedRev;
