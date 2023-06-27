'use client'
import React from "react";
import { CgArrowLongLeft } from "react-icons/cg";

// Login button
export function Login() {
  const handleLogin = () => {
    window.location.href = "/login";
  };
  return (
    <button className="w-full" onClick={handleLogin}>
      <p className="py-2 rounded-lg border  text-primary-red  w-full   ">
        Login
      </p>
    </button>
  );
}

//logout button
export function Logout() {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"), (window.location.href = "/");
  };
  return (
    <button className=" w-full mb-2 " onClick={handleLogout}>
      <p className="py-2 w-full rounded-lg  border-2 text-primary-red  border-primary-red ">
        Logout
      </p>
    </button>
  );
}

export function ButtonBack() {
  function goBack() {
    window.history.back();
  }
  return (
    <button
      onClick={goBack}
      className="text-lg w-full  gap-2 md:ml-10 ml-2 flex items-center border-2 p-2 rounded-lg text-red-500 "
    >
      <CgArrowLongLeft />
      <span className="-mt-0.5 text-sm">Kembali</span>
    </button>
  );
}
