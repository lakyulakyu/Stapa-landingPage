"use client";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import axios from "axios";
const AddUser = () => {
  const [showDetail, setShowDetail] = useState(true);
  const handleButtonClick = () => {
    setShowDetail(!showDetail);
  };
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    role: "",
    photo_profile: null,
    username: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jsonData = JSON.stringify(formData); // Convert formData to JSON string
      const response = await axios.post(
        "https://api-user-dev.mokletscience.com/api/v1/user/register",
        jsonData, // Send JSON data
        {
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
        }
      );

      if (response.status === 200) {
        alert("oke");
        const responseData = response.data;
        console.log(responseData);
      } else {
        alert("berhasil tambah user");
        throw new Error("Terjadi kesalahan saat mengirim data ke API");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("User sudah ada");
      } else {
        alert("Terjadi kesalahan saat mengirim data ke API");
        console.error(error);
      }
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "photo") {
      // If the changed input is the photo input field
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.files[0], // Set the photo property to the selected file
      }));
    } else {
      // If the changed input is not the photo input field
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }
  };
  return (
    <div className={`max-w-6xl mx-auto mt-44 ${showDetail ? "mb-10" : "mb-4"}`}>
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
        <p>New User</p>
      </button>
      <form onSubmit={handleSubmit}>
        {showDetail && (
          <>
            <div className="grid gap-4 grid-cols-2">
              <div className="flex-col">
                <label htmlFor="File">Name</label>
                <input
                  type="text"
                  className="w-full cursor-text rounded border focus:outline-none  focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="Healine">Username</label>
                <input
                  type="text"
                  className="w-full cursor-text rounded border focus:outline-none  focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="Healine">photo</label>
                <input
                  type="file"
                  className="w-full cursor-text rounded border focus:outline-none  focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="photo_profile"
                  onChange={handleChange}
                />
              </div>
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
                <select
                  className="w-full cursor-text rounded border focus:outline-none focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="">Select Role</option>
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                  <option value="MEDIA">Media</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-green-400 h-10 rounded-md text-white uppercase focus:bg-white focus:border border-neutral-300 focus:text-neutral-500"
            >
              kirim
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default AddUser;
