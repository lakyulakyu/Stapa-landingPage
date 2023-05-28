import React, { useState, useEffect } from "react";
import Image from "next/image";

const dataMatch = [
  {
    id: 1,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.0,
    place: "anfield",
  },
  {
    id: 2,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/football-logo-design-template-7105c52c1baf3854faab4569a78781fb.jpg?ts=1601226564",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/soccer-logo-design-template-3acde993fbfd39118553cb59aabc3143.jpg?ts=1599278651",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.0,
    place: "anfield",
  },

  {
    id: 3,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.0,
    place: "anfield",
  },
  {
    id: 3,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/soccer-logo-design-template-3acde993fbfd39118553cb59aabc3143.jpg?ts=1599278651",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.0,
    place: "anfield",
  },

  {
    id: 4,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.0,
    place: "anfield",
  },

  {
    id: 5,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/soccer-logo-design-template-3acde993fbfd39118553cb59aabc3143.jpg?ts=1599278651",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.0,
    place: "anfield",
  },
  {
    id: 6,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/football-logo-design-template-7105c52c1baf3854faab4569a78781fb.jpg?ts=1601226564",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.0,
    place: "anfield",
  },

  {
    id: 7,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.0,
    place: "anfield",
  },
  {
    id: 8,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.0,
    place: "anfield",
  },

  {
    id: 9,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.0,
    place: "anfield",
  },

  {
    id: 10,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.0,
    place: "anfield",
  },

  {
    id: 11,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-107473826d277deffdb2783d08297b7f.jpg?ts=1654928984",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenal",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "1-3-2023",
    time: 15.0,
    place: "anfield",
  },

  {
    id: 12,
    tim_1:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-template-design-93f3fef7ae758aa9e7b00f6fb51b1b1a.jpg?ts=1622728687",
    tim_2:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/football-logo-design-template-7105c52c1baf3854faab4569a78781fb.jpg?ts=1601226564",
    tittle: "Pertandingan di lapangan ngarep kos kossan",
    name_tim1: "moklet",
    name_tim2: "arsenaan dan kawb",
    score_tim_1: 1,
    score_tim_2: 6,
    liga: "kampung tanahan",
    date: "2023-05-28",
    time: "17:17",
    place: "anfield",
  },
];

function MatchNow() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const updateSchedule  = async () => {
      const now = new Date();
      const currentSchedule = dataMatch.filter((item) => {
        const matchDateTime = new Date(`${item.date}T${item.time}`);
        return matchDateTime <= now && matchDateTime >= new Date(now - 2 * 60 * 60 * 1000); // Hapus setelah 2 jam berlalu
      });

      setSchedule(currentSchedule);
    };

    updateSchedule();

    const interval = setInterval(updateSchedule, 600000); // Perbarui setiap 1 menit

    return () => {
      clearInterval(interval); // Membersihkan interval saat komponen di-unmount
    };
  }, []);

  return (
    <div className="text-center h-fit">
      <h2 className="text-lg uppercase font-semibold">Sedang berlangsung</h2>
      {schedule.length > 0 ? (
        <div>
          {schedule.map(
            ({ id, name_tim1, name_tim2, date, tim_1, tim_2, liga, time }) => {
              const matchDateTime = new Date(`${date}T${time}`);
              const matchTime = matchDateTime.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              });
              return (
                <div key={id}>
                  <div className="">
                    <div className="match grid grid-cols-5 items-center ">
                      <p className="font-semibold text-xl bg-black ">{name_tim1}</p>
                      <Image alt="" src={tim_1} height={100} width={100} className="mix-blend-color-burn object-center bg-green-400 h-24 w-24 " />
                      <p className="w-24 bg-red-600">Vs</p>
                      <Image alt="" src={tim_2} height={100} width={100} className="mix-blend-color-burn bg-blue-400 h-24 w-24 "/>
                      <p className="bg-red-600">{name_tim2}</p>
                    </div>
                  </div>
          {matchTime}
                </div>
              );
            }
          )}
        </div>
      ) : (
        <p>Tidak ada pertandingan yang sedang berlangsung.</p>
      )}
    </div>
  );
}

export default MatchNow;
