"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EditPasswordPage from "./User/EditPassword";
import { AiFillCaretDown } from "react-icons/ai";
const navigation = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "News",
    href: "/News",
  },
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
  const [openProfile, setOpenProfile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [UserData, setUserData] = useState(null);

  const handleLogin = () => {
    setIsLoggedIn();
    window.location.href = "/login";
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
  };
  const handleProfile = () => {
    setOpenProfile(!openProfile);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const Popup = () => {
    setOpenPopup(!openPopup);
  };

  const checkLoggedInStatus = () => {
    const isLoggedInStorage = localStorage.getItem("isLoggedIn");
    if (isLoggedInStorage) {
      setIsLoggedIn(true);
      const storedUserData = localStorage.getItem("userData");
      setUserData(JSON.parse(storedUserData));
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

  // if (
  //   typeof window !== "undefined" &&
  //   (window.location.pathname.includes(`/admine`) ||
  //     window.location.pathname.includes(`/login`))
  // ) {
  //   return null;
  // }

  return (
    <nav>
      <div className="fixed w-full  z-50 top-0">
        <div
          className={`flex z-50  md:mx-auto xl:w-full lg:max-w-none py-4  justify-between px-6 duration-200 
          ${
            window.location.pathname !== "/" || scrollPosition > 10
              ? `${
                  isOpen
                    ? "text-black  bg-neutral-50 top-0 mb-auto"
                    : "bg-neutral-50 items-center"
                }  shadow-2xl `
              : `${
                  isOpen ? "top-0 mb-auto bg-neutral-50" : " bg-transparent "
                }text-white items-center `
          }`}
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

          <div className="md:block hidden ml-auto mr-auto  w-fit">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="
                 hover:border-b-2 focus:borderb-2 bg-opacity-5 pb-3  uppercase mx-3 font-normal"
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
              }text-neutral-400 focus:outline-none focus:text-white"
              aria-label="Toggle menu`}
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
                    d="M4 6h16M4 12h16M4 18h16"
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
          {/* for list whren is open  */}
          {isOpen && (
            <div className="w-2/5 text-end z-50 shadow-lg rounded-lg bg-white mt-10 top-8 absolute right-4 ">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`border-black-main  hover:bg-neutral-200 hover:underline focus:borderb-2 bg-opacity-5 pr-4  uppercase flex font-normal`}
                >
                  <p className=" text-sm py-4 ml-auto right-0  pl-2 text-end ">
                    {item.name}
                  </p>
                </Link>
              ))}
              <button
                className="px-2 w-full mb-4"
                onClick={isLoggedIn ? handleProfile : handleLogin}
              >
                {isLoggedIn ? (
                  <>
                    <div className="flex items-center pl-4 p-2 mt-10  mb-4 px-4 rounded-lg border border-neutral-400">
                      <button>
                        <h1 className="pr-2 border-r-2 text-black-main truncate border-neutral-200 sm:max-w-[200px] max-w-[100px] w-fit ">
                          Ijddksdad ahdahd ahbsdhbabsdshb habsdh
                        </h1>
                        <Image
                          width={1000}
                          alt=""
                          height={1000}
                          className="h-8 w-8 ml-2 object-cover border rounded-full"
                          src={"/pemain.jpg"}
                        />
                      </button>
                    </div>

                    <button className=" w-full mb-2 " onClick={handleLogout}>
                      <p className="py-2 w-full rounded-lg  border-2 text-primary-red  border-primary-red ">
                        Logout
                      </p>
                    </button>
                  </>
                ) : (
                  <p className="py-2 rounded-lg border  text-primary-red  w-full   ">
                    Login
                  </p>
                )}
              </button>
            </div>
          )}

          {/* popup for login and logout ==>lebih ke sudah login apa belum? */}
          <div className="uppercase max-md:hidden flex items-center  gap-4">
            <h1 className="flex items-center">Id</h1>
            <button onClick={Popup}>
              {isLoggedIn ? (
                <>
                  <div className="pl-4 border-l-2">
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
              <div className="absolute  top-16 w-52 h-fit  -translate-x-36">
                <button className="mt-2 bg-white text-sm  uppercase font-medium py-0.5 w-full px-2 rounded-lg">
                  {isLoggedIn ? (
                    <>
                      <div className="w-full">
                        <button
                          className="text-black-main border-2 border-neutral-300 rounded-lg mt-2 mb-6 py-4 w-full "
                          onClick={handleProfile}
                        >
                          profile
                        </button>
                        <button className="w-full" onClick={handleLogout}>
                          <p className="py-2 mt-4 rounded-lg  border-2 text-primary-red mb-2 w-full  border-primary-red ">
                            Logout
                          </p>
                        </button>
                      </div>
                    </>
                  ) : (
                    <button className="w-full" onClick={handleLogin}>
                      <p className="py-2 mt-4 rounded-lg  border-2 text-primary-red mb-2 w-full  border-primary-red ">
                        Login
                      </p>
                    </button>
                  )}
                </button>
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
