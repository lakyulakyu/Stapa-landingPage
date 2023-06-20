"use client";
import React from "react";
import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import LoginPopup from "./User/PopupLogin";
import Example from "./User/PopupLogin";

const navigation = [
  { name: "Home", href: "/" },
  { name: "News", href: "/News" },
  { name: "Team", href: "/Team" },
  { name: "Match", href: "/Matched" },
  { name: "Video", href: "/Video" },
  { name: "About us", href: "/about" },
];
const NavBar_ = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const smoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    };

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    const handleResize = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth > 870) {
        setIsOpen(false);
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const isDetailPage =
    typeof window !== "undefined"
      ? window.location.pathname.includes(`/admine`) 
      : undefined;
  if (isDetailPage) {
    return null;
  }

  return (
    <nav className="fixed w-full  z-50 top-0">
      <div
        className={`flex z-50 md:max-w-6xl  md:mx-auto xl:w-full lg:max-w-none py-4 justify-between items-center px-6 duration-200 ${
          scrollPosition > 10
            ? "text-black-main shadow-2xl bg-white"
            : "text-white bg-transparent  hover:bg-black-main hover:text-white "
        }`}
      >
        <Link href={"/"}>
        <Image
            src="/Logo-Web.png"
            alt="logo"
            width={100}
            height={100}
            className="md:h-20 h-10 w-fit bg-slate-50 rounded-full p-2"
          /></Link>
          
        
        <div className="max-md:hidden">
          {navigation.map((item) => (
            <Link
              key={item}
              href={item.href}
              className={` ${
                scrollPosition > 10 ? "border-black-main" : "border-white"
              } hover:border-b-2 focus:borderb-2 bg-opacity-5 pb-3  uppercase mx-3 font-normal`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {isOpen && (
          <div>
            {navigation.map((item) => (
              <Link
                key={item}
                href={item.href}
                className={` ${
                  scrollPosition > 10 ? "border-black-main" : "border-white"
                } hover:border-b-2 focus:borderb-2 bg-opacity-5 mb-3 pr-4 hover:bg-slate-300  uppercase flex font-normal`}
              >
                <p className=" text-2xl  text-center">{item.name}</p>
              </Link>
            ))}
          </div>
        )}

        <div className="uppercase max-md:hidden flex items-center divide-x-2 divide-white gap-4">
          <h1 className="flex items-center">
            Id
            <span>
              <Example />
            </span>
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default NavBar_;
