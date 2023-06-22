"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import axios from "axios";

const AddUser = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [data, setData] = useState({
    name: "",
    username: "",
    password: "",
    role: "",
  });

  const handleButtonClick = () => {
    setShowDetail(!showDetail);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://api-user-dev.mokletscience.online/api/v1/user/register",
        data
      );
      console.log(response.data);
      alert("Okee");
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Gagal tambah User");
    }
  };
  return (
    <div className={`max-w-6xl mx-auto ${showDetail ? "mb-10" : "mb-4"}`}>
      <button
        onClick={handleButtonClick}
        className={` flex gap-4 text-neutral-500 text-2xl hover:bg-neutral-100 items-center border-b w-full pb-2 ${
          showDetail ? " mb-6 bg-neutral-100" : "mb-0"
        } `}
      >
        {showDetail ? (
          <p className="rotate-180 duration-300 text-3xl pt-1">
            <MdOutlineKeyboardArrowDown />
          </p>
        ) : (
          <p className="rotate-0 duration-300 text-3xl pt-1">
            <MdOutlineKeyboardArrowDown />
          </p>
        )}
        <p>Register</p>
      </button>
      <div>
        {showDetail && (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 grid-cols-2">
              <div className="flex-col">
                <label htmlFor="File">Name</label>
                <input
                  type="text"
                  className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="Healine">Username</label>
                <input
                  type="text"
                  className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="username"
                  value={data.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="Healine">password</label>
                <input
                  type="text"
                  className="w-full cursor-text rounded border focus:outline-none  focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="Nickname">Role</label>
                <input
                  type="text"
                  className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="role"
                  value={data.role}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-green-400 h-10 rounded-md text-white uppercase focus:bg-white focus:border border-neutral-300 focus:text-neutral-500"
            >
              kirim
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddUser;
