import React from "react";
import Link from "next/link";
import Image from "next/image";

// const navigation = [
//   { name: "News", href: "/Admine" },
//   { name: "Sosial media", href: "/Admine/Sosmed" },
//   { name: "Sponsor", href: "/Admine/Sponsor" },
//   { name: " Match Schedule", href: "/Admine/Schedule" },
//   { name: "Video Youtub", href: "/Admine/#Video" },
// ];
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
        {/* <div className=" w-full -ml-14 ">
          <div className=" max-w-fit mx-auto">
            {navigation.map((item) => (
              <Link
                key={item}
                href={item.href}
                className="border-black-main hover:border-b ease-out duration-500 bg-opacity-5 pb-3 uppercase mx-3 font-normal"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div> */}
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
