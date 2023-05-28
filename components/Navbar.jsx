"use client";
import React from "react";
import { useEffect, useState } from "react";
import { MdArrowRight } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "News", href: "/news" },
  { name: "Tim", href: "/Team" },
  { name: "Match", href: "/match" },
  { name: "Video", href: "#" },
  { name: "More", href: "/More" },
];
const NavBar_ = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const smoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      const position = window.pageYOffset;
      setScrollPosition(position);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-10 top-0`}>
      <div
        className={`flex absolute z-50 w-full py-4 justify-between items-center px-6 duration-200 ${
          scrollPosition > 10
            ? "text-black-main bg-white"
            : "text-white bg-transparent hover:bg-black-main hover:text-white "
        }`}
      >
        <div>
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="h-16 w-fit"
          />
        </div>
        <div>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={` ${
                scrollPosition > 10 ? "border-black-main" : "border-white"
              } hover:border-b-2 focus:borderb-2 bg-opacity-5 pb-3  uppercase mx-3 font-normal`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="uppercase flex items-center divide-x-2 divide-white gap-4">
          <h1 className="flex items-center">
            Id{" "}
            <span className="rotate-90 text-xl">
              <MdArrowRight />
            </span>
          </h1>
          <Menu>
            <div className="pl-4 pt-1">
              <Menu.Button>
                {" "}
                <HiOutlineSearch />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform scale-95"
              enterTo="transform scale-100"
              leave="transition ease-in duration=75"
              leaveFrom="transform scale-100"
              leaveTo="transform scale-95"
            >
              <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
                <input type="text" name="" id="">
                  <Menu.Item>
                    <Link
                      href="#"
                      className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                    >
                      <HiOutlineSearch className="h-4 w-4 mr-2" />
                      Cari..
                    </Link>
                  </Menu.Item>
                </input>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default NavBar_;
