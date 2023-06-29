"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import EditPasswordPage from "./User/EditPassword";
import { AiFillCaretDown } from "react-icons/ai";
import { Logout, Login } from "./User/Button";

const navigation = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "News", href: "/News" },
  { id: 3, name: "Team", href: "/Team" },
  { id: 4, name: "Match", href: "/Matched" },
  { id: 5, name: "Video", href: "/Video" },
  { id: 6, name: "About us", href: "/about" },
];
const UserDatas = [
  {
    id: 1,
    name: "zhidan",
    photo_profile: "/pemain.jpg",
    username: "zhidan",
    password: "adadeh",
  },
];

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const Popup = () => {
    setOpenPopup(!openPopup);
  };
  const handleProfile = () => {
    setOpenProfile(!openProfile);
  };

  const checkLoggedInStatus = () => {
    const isLoggedInStorage = localStorage.getItem("isLoggedIn");
    if (isLoggedInStorage) {
      setIsLoggedIn(true);
    }
  };
  useEffect(() => {
    checkLoggedInStatus();
    const handleResize = () => {
      if (window.innerWidth > 870) {
        setIsOpen(false);
      }
    };
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });
    window.addEventListener("scroll", () =>
      setScrollPosition(window.pageYOffset)
    );
    window.addEventListener("resize", handleResize);

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
      window.removeEventListener("scroll", () =>
        setScrollPosition(window.pageYOffset)
      );
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pathname =
    typeof window !== "undefined" ? window.location.pathname : null;
  if (
    pathname === "/login" ||
    pathname === "/admine" ||
    pathname === "/about"
  ) {
    return null;
  }
  return (
    <nav>
      <div className="fixed w-full  z-40 top-0">
        <div
          className={`flex z-50  md:mx-auto xl:w-full lg:max-w-none py-4  justify-between px-6 duration-200 
          
${
  pathname === "/"
    ? ` ${
        scrollPosition > 10
          ? `${
              isOpen
                ? "text-black  bg-neutral-50 top-0 mb-auto"
                : "bg-neutral-50 items-center"
            }  shadow-2xl text-black `
          : `${
              isOpen ? "top-0 mb-auto text-black-main   " : "text-white "
            } items-center bg-transparent `
      } `
    : ` bg-white text-black-main items-center`
}
            `}
        >
          <div className="md:h-fit h-12 w-12  md:w-fit">
            <Link href={"/"}>
              <Image
                src="/Logo-Web.png"
                alt="logo"
                width={100}
                height={100}
                className=" object-contain  bg-slate-50 rounded-full p-2"
              />
            </Link>
          </div>

          <div className="md:block hidden  mx-auto  w-fit">
            {navigation.map((item) => (
              <Link
                onSelect={"bg-slate-400"}
                key={item.id}
                href={item.href}
                onClick={() => handleItemClick(item.id)}
                className={`text-lg pb-3 uppercase mx-3 font-normal ${
                  selectedItem === item.id
                    ? "border-b-2 border-neutral-700"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className={`${
                scrollPosition > 10 ? "border-black-main" : "border-white"
              }text-neutral-400 text-3xl focus:outline-none focus:text-white"`}
            >
              {isOpen ? <MdOutlineClose /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
          {/* for list whren is open  */}
          {isOpen && (
            <div className="w-2/5 text-end z-50 shadow-lg rounded-lg bg-white mt-10 top-8 absolute right-4 ">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => handleItemClick(item.id)}
                  className={`${
                    selectedItem === item.id
                      ? " bg-neutral-200 rounded-lg pr-2 mx-2 font-semibold "
                      : ""
                  }  hover:bg-neutral-200 hover:underline focus:borderb-2  pr-4 uppercase flex font-normal`}
                >
                  <p className=" text-sm py-4 ml-auto right-0  pl-2 text-end ">
                    {item.name}
                  </p>
                </Link>
              ))}
              <div className="px-2 w-full mb-4">
                {isLoggedIn ? (
                  <>
                    <div className="flex items-center pl-4 p-2 mt-10  mb-4 px-4 rounded-lg border border-neutral-400">
                      <button
                        className="flex justify-end w-full"
                        onClick={handleProfile}
                      >
                        <p className="pr-2 border-r-2  text-black-main truncate border-neutral-200 sm:max-w-[200px] max-w-[100px] w-fit ">
                          ur name here
                        </p>
                        <Image
                          width={1000}
                          alt=""
                          height={1000}
                          className="h-8 w-8 ml-2 object-cover border rounded-full"
                          src={"/pemain.jpg"}
                        />
                      </button>
                    </div>
                    <Logout />
                  </>
                ) : (
                  <Login />
                )}
              </div>
            </div>
          )}

          <div className="uppercase max-md:hidden  flex items-center  gap-4">
            <h1 className="truncate w-32">Loginbvjlvbljvbvvijvbsjv vbsabv</h1>
            <button onClick={Popup}>
              {isLoggedIn ? (
                <>
                  <div className="pl-2 border-l-2">
                    <Image
                      width={1000}
                      alt=""
                      height={1000}
                      className="h-8 w-8 object-cover border rounded-full"
                      src={"/pemain.jpg"}
                    />
                  </div>
                </>
              ) : (
                <div className="pl-4 border-l-2">
                  <AiFillCaretDown />
                </div>
              )}
              {/* this is popup */}
            </button>
            {openPopup && (
              <div className="absolute  top-24 w-52 h-fit  right-6">
                <div className="mt-2 bg-white text-sm  uppercase font-medium py-0.5 w-full px-2 rounded-lg">
                  {isLoggedIn ? (
                    <>
                      <div className="w-full">
                        <button
                          className="text-black-main border-2 border-neutral-300 rounded-lg mt-2 mb-6 py-4 w-full "
                          onClick={handleProfile}
                        >
                          profile
                        </button>

                        <Logout />
                      </div>
                    </>
                  ) : (
                    <Login />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* popup for update */}
        {openProfile ? <EditPasswordPage /> : ""}
      </div>
    </nav>
  );
};

export default Navbar;
