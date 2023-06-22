"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import axios from "axios";

const News = () => {
  const [showDetail, setShowDetail] = useState(true);
  const [data, setData] = useState({
    title: "",
    excerpt: "",
    body: "",
    useId: 2,
    bg_image: "",
  });

  const handleButtonClick = () => {
    setShowDetail(!showDetail);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY4NzQxODcyOCwiZXhwIjoxNjg3NDI5NTI4fQ.F7sR-9y7CmK951sgRZGuBdRjzDq_rjh40PKsgxi6cgc";

      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      };

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("excerpt", data.excerpt);
      formData.append("body", data.body);
      formData.append("bg_image", data.bg_image);

      const response = await axios.post(
        "http://api-user-dev.mokletscience.online/api/v1/news/",
        formData,
        { headers }
      );
      console.log(response.data);
      alert("Data berhasil dikirim!");

      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat mengirim data!");
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div
      className={` pt-32 max-w-6xl mx-auto ${showDetail ? "mb-10" : "mb-4"}`}
    >
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

        <p>News Input</p>
      </button>
      <div>
        {showDetail && (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 grid-cols-2">
              <div>
                <div className="w-full mt-3">
                  <label className="uppercase" htmlFor="File">
                    Foto Berita
                  </label>
                  <input
                    type="file"
                    value={data.bg_image}
                    name="bg_image"
                    onChange={handleChange}
                    className="w-full cursor-pointer file:cursor-pointer rounded border  border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700  file:-mx-3 file:-my-[0.32rem]  file:border-0  file:bg-neutral-100 file:px-4 file:py-[0.32rem] "
                  />
                  {/* <p
                    className="uppercase
                  text-sm text-gray-500 dark:text-gray-300"
                    id="file_input_help"
                  >
                    IMG, IMAGE, PNG, JPG (MAX. 2MB).
                  </p> */}
                </div>

                <div className="w-full mt-3">
                  <label className=" uppercase" htmlFor="Healine">
                    excerpt
                  </label>
                  <input
                    type="text"
                    value={data.excerpt}
                    name="excerpt"
                    onChange={handleChange}
                    className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  />
                </div>

                <div className="w-full mt-3">
                  <label className=" uppercase" htmlFor="Healine">
                    Judul berita
                  </label>
                  <input
                    type="text"
                    value={data.title}
                    name="title"
                    onChange={handleChange}
                    className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  />
                </div>

                {/* <div className="w-full">
                  <p className="mt-3 uppercase" htmlFor="ImgPerson">
                    liga
                  </p>
                  <input
                    type="league"
                    className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                  />
                </div> */}
                {/* <div className="w-full">
                  <p className="mt-3 uppercase" htmlFor="Name">
                    foto pengirim berita /
                  </p>
                  <input
                    type="text"
                    className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                    name="pict_pengirim"
                  />
                </div> */}
                {/* <div className="w-full">
                  <p className="mt-3 uppercase" htmlFor="Nickname">
                    username pengirim
                  </p>
                  <input
                    type="text"
                    className="w-full cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                    name="pemilik_berita"
                  />
                </div> */}
              </div>
              <div className="w-full">
                <p className="mt-3 uppercase" htmlFor="Tittle">
                  isi berita
                </p>
                <textarea
                  value={data.body}
                  name="body"
                  onChange={handleChange}
                  className="w-full h-96 cursor-text rounded border focus:outline-none capitalize focus:border-blue-400 border-neutral-300 file:mr-4 px-3 py-[0.32rem] text-neutral-700"
                />
              </div>
            </div>
            <input
              type="submit"
              className="w-full bg-green-400 h-10 rounded-md text-white uppercase focus:bg-white focus:border border-neutral-300 focus:text-neutral-500"
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default News;
