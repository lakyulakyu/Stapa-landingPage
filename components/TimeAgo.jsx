'use client'
import { useEffect, useState } from "react";
function TimeAgo({ date, time }) {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const uploadedDate = new Date(`${date} ${time}`);

      const timeDifference = currentDate.getTime() - uploadedDate.getTime();
      const seconds = Math.floor(timeDifference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const months = Math.floor(days / 30);
      const years = Math.floor(months / 12);

      if (years > 0) {
        setTimeAgo(`${years} Year Ago`);
      } else if (months > 0) {
        setTimeAgo(`${months} Month Ago`);
      } else if (days > 0) {
        setTimeAgo(`${days} Day Ago`);
      } else if (hours > 0) {
        setTimeAgo(`${hours} Hour Ago`);
      } else if (minutes > 0) {
        setTimeAgo(`${minutes} minute Ago`);
      } else {
        setTimeAgo(`${seconds} Second Ago`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [date, time]);

  return <span>{timeAgo}</span>;
}

export default TimeAgo;
