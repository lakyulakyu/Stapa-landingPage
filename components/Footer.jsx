"use client";
import Image from "next/image";
import React,{useEffect} from "react";
import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";

const Footer = () => {
  // if (
  //   (typeof window !== "undefined" &&
  //     window.location.pathname.includes(`/admine`)) ||
  //   window.location.pathname.includes(`/login`)
  // ) {
  //   return null;
  // }

  const pathname =
  typeof window !== "undefined" ? window.location.pathname : null;
if (
  pathname === "/login" ||
  pathname === "/Admine" ||
  pathname === "/about" 
) {
  return null;
}
  return (
    <div
      id="More"
      className="bg-primary-red pb-10 max-md:px-10 h-full md:h-fit py-8"
    >
      <div className="max-w-7xl mx-auto md:flex items-center h-full gap-x-16">
        <Image
          src="/Logo-Web.png"
          alt=""
          width={400}
          height={400}
          className="md:h-44 h-20 w-auto bg-slate-50 p-4 rounded-full"
        />
        <div className="w-4/5">
          <div className="flex text-light-grey text-2xl gap-x-4 mt-6">
            <Link
              href={"https://www.instagram.com/labmokletsport_science/"}
              rel="stylesheet"
              target="_blank"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://youtube.com/@labmokletsportscience"
              rel="stylesheet"
              target="_blank"
            >
              <FaYoutube />
            </Link>
            <Link target="_blank" href="https://wa.me/+6281296939020">
              <button id="whatsappButton" alt="hubungi admin">
                <MdWhatsapp />
              </button>
            </Link>
          </div>
          <div className="md:flex text-light-grey gap-x-6 mt-4 text-lg font-semibold opacity-90">
            <p>Contact Us</p>
            <Link href={"/about"}>
              <p>About Us</p>
            </Link>
          </div>
          <div className="mt-4">
            <Link target="_blank" href="https://wa.me/+6281296939020">
              <button className="bg-green-500 py-3 px-6 rounded-xl text-zinc-100">
                <div className="flex justify-between gap-x-3 items-center">
                  <p className="text-xl">
                    <MdWhatsapp />
                  </p>
                  <p className="text-medium font-semibold">Hubungi Admin</p>
                </div>
              </button>
            </Link>
          </div>
          <div className="mt-8 text-light-grey opacity-80">
            <p>©Copyright 2022 The Moklet Sport Science. All rights reserved</p>
            <p className="mt-1">
              Developed and maintained by{" "}
              <Link
                target="_blank"
                href={"https://www.instagram.com/ciboox.id"}
              >
                <span className="hover:text-blue-600 hover:underline">
                  @Ciboox Indonesia
                </span>
              </Link>{" "}
              software and game developers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
