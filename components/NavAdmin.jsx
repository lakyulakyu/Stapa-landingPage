import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavAdmin = () => {
  return (
    <nav className="fixed w-full top-0 bg-white shadow-lg">
      <div className="flex items-center mx-20 justify-between">
        <div className="">
          <Image
            src="/Logo-Web.png"
            alt="logo"
            width={100}
            height={100}
            className="md:h-20 h-10 w-fit rounded-full p-2"
          />
        </div>
        <Link href={"/"}>
          <button className="px-4 py-1 text-primary-red text-lg border-red-500 border-2 rounded-md ">
            Keluar
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavAdmin;
