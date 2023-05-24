import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary-red h-[34vh] py-8">
      <div className="max-w-7xl mx-auto flex h-full gap-x-16">
        <Image
          src={
            "https://www.freepnglogos.com/uploads/adidas-logo-png-transparent-24.png"
          }
          alt=""
          width={400}
          height={400}
          className="invert-[1] brightness-0 h-full w-auto"
        />
        <div className="w-4/5">
          <div className="flex text-light-grey text-2xl gap-x-3 mt-6">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
          <div className="flex text-light-grey gap-x-6 mt-4 text-lg font-semibold opacity-90">
            <p>Privacy Policy</p>
            <p>Term and Condition</p>
            <p>Anti-Slavery</p>
            <p>Cookies</p>
            <p>Help</p>
            <p>Contact Us</p>
            <p>Accessibility</p>
          </div>
          <div className="mt-8 text-light-grey opacity-80">
            <p>©Copyright 2022 The Moklet Sport Science. All rights reserved</p>
            <p className="mt-2">
              Developed and maintained by Ciboox Indonesia software and game
              developers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
