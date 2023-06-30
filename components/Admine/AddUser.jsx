"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// ,
const AddUser = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    role: "",
    // photo_profile: null,
  });

  const handleButtonClick = () => {
    setShowDetail(!showDetail);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      photo: file,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY4ODA0NzQwNywiZXhwIjoxNjg4MDU4MjA3fQ.OXpeTvjVCSQcQ6m_dhRPFu0BqxBcvyihazAgU8eZ32k";
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch(
        "https://api-user-dev.mokletscience.com/api/v1/user/register",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
          body: formDataToSend,
        }
      );

      if (response.ok) {
        console.log("Data sent successfully!");
      } else {
        console.log("Failed to send data.");
      }
    } catch (error) {
      console.error("Error occurred while sending data:", error);
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
      <form onSubmit={handleSubmit}>
        {showDetail && (
          <>
            <div className="grid gap-4 grid-cols-2">
              <div className="flex-col">
                <label htmlFor="File">Name</label>
                <input
                  type="text"
                  className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="Healine">Username</label>
                <input
                  type="text"
                  className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              {/* <div>
                <label htmlFor="Healine">photo</label>
                <input
                  type="file"
                  className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="photo_profile"
                  value={formData.photo_profile}
                  onChange={handleChange}
                />
              </div> */}
              <div>
                <label htmlFor="Healine">password</label>
                <input
                  type="text"
                  className="w-full cursor-text rounded border focus:outline-none  focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="Nickname">Role</label>
                <input
                  type="text"
                  className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                />
              </div>
            </div>
          </>
        )}
        <button
          type="submit"
          className="w-full mt-4 bg-green-400 h-10 rounded-md text-white uppercase focus:bg-white focus:border border-neutral-300 focus:text-neutral-500"
        >
          kirim
        </button>
      </form>
    </div>
  );
};

export default AddUser;
