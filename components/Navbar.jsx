import React from "react";
import { MdArrowRight } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";

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
  return (
    <nav className="flex justify-between items-center px-6">
      <div>
        <img src="/logo-sepakbola.jpg" alt="logo" width={100} height={100} />
      </div>
      <div>
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className=" hover:underline  duration-500 bg-opacity-5    uppercase  px-3 py-2 rounded-md   font-normal"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="uppercase flex items-center divide-x-2 divide-black gap-1">
        <h1 className="flex items-center">
          Id{" "}
          <span className="rotate-90 text-xl">
            <MdArrowRight />
          </span>
        </h1>
        <div className="pl-2">
          <HiOutlineSearch />
        </div>
      </div>
    </nav>
  );
};

export default NavBar_;
