"use client";
import React from "react";
import { useEffect, useState } from "react";
import { MdArrowRight } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "News", href: "/news" },
  { name: "Player", href: "/players" },
  { name: "Match", href: "/match" },
  { name: "Club", href: "/club" },
  { name: "Ticket", href: "/tikect" },
  { name: "Shop", href: "/shop" },
];
const NavBar_ = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

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

  console.log(scrollPosition);
  return (
    <nav className={`fixed w-full z-10 top-0`}>
      <div
        className={`flex absolute z-50 w-full py-4 justify-between items-center px-6 duration-200 ${
          scrollPosition > 10
            ? "text-black-main bg-white"
            : "text-white bg-transparent"
        }`}
      >
        <div>
          <img src="/logo-sepakbola.jpg" alt="logo" width={100} height={100} />
        </div>
        <div>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className=" hover:underline bg-opacity-5  uppercase mx-3 font-normal"
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
                <div className="p-1">
                  <Menu.Item>
                    <Link
                      href="#"
                      className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                    >
                      <HiOutlineSearch className="h-4 w-4 mr-2" />
                      Logout
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default NavBar_;
