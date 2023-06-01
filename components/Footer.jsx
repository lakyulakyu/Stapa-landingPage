"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
const Footer = () => {
  useEffect(() => {
    const handleClick = () => {
      var phoneNumber = "+6289529028582";
      var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent();
      typeof window != undefined ? window.open(whatsappUrl, "_blank") : undefined;
    };
    const button = document.getElementById("whatsappButton");
    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);

  // Menentukan halaman detail berdasarkan jalur URL
  const isDetailPage = !isNaN(Number("/Admin"));

  // Tampilkan navbar hanya pada halaman selain detail
  if (isDetailPage) {
    return null;
  }
  return (
    <div id="More" className="bg-primary-red h-[40vh] py-8">
      <div className="max-w-7xl mx-auto flex h-full gap-x-16">
        <Image src="/Logo-Web.png" alt="" width={400} height={400} className="h-44 w-auto bg-slate-50 p-4 rounded-full" />
        <div className="w-4/5">
          <div className="flex text-light-grey text-2xl gap-x-3 mt-6">
            <FaInstagram />
            <FaYoutube />
            <button id="whatsappButton" alt="hubungi admin">
              <MdWhatsapp />
            </button>
          </div>
          <div className="flex text-light-grey gap-x-6 mt-4 text-lg font-semibold opacity-90">
            <p>Privacy Policy</p>
            <p>Help</p>
            <div>
              <p>Contact Us</p>
              <Link target="_blank" href="https://wa.me/081333717212">
                <button className="w-full mt-1  bg-green-500 p-2">
                  <div className="flex justify-between items-center">
                    <p className="text-xl">
                      <MdWhatsapp />
                    </p>
                    <p className="text-medium font-semibold">Hubungi Admin</p>
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-8 text-light-grey opacity-80">
            <p>©Copyright 2022 The Moklet Sport Science. All rights reserved</p>
            <p className="mt-2">Developed and maintained by Ciboox Indonesia software and game developers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
