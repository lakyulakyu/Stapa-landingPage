// import React from "react";
// import gambah from "../../public/pemain.jpg";

// const NewsPage = () => {
//   const news = [
//     {
//       titel: "okee",
//       isi: "Lorem vitae erat egetjsfnsjdff sisfsfs ff djfbsf sjf s fsf sffasfdsjh;ohfsdfds shbfbdf sfgsf fbsfbdfsaffbf bfsbfbfipsf fbfusfp s d hsbf fdfa fsif snf dfbfn fd iasdfh p orci consequat sodales. Duis suscipit sagittis interdum ",
//       img: "../../../pemain.jpg",
//     },
//   ];
//   const newsContent = news[0].isi;
//   const words = newsContent.split(" ");

//   const getImage = () => {
//     return <img src={news[0].img} alt="News Image" className="mx-auto my-8" />;
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">News Title</h1>
//       {words.map((word, index) => {
//         if (index === 19) {
//           return (
//             <React.Fragment key={index}>
//               {word} {getImage()}
//             </React.Fragment>
//           );
//         }
//         return word + " ";
//       })}
//     </div>
//   );
// };

// export default NewsPage;


"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';

const data = [
  { id: 1, name: 'Item 1', image: '/path/to/image1.jpg' },
  { id: 2, name: 'Item 2', image: '/path/to/image2.jpg' },
  { id: 3, name: 'Item 3', image: '/path/to/image3.jpg' },
  { id: 4, name: 'Item 3', image: '/path/to/image3.jpg' },
  { id: 5, name: 'Item 3', image: '/path/to/image3.jpg' },
  { id: 6, name: 'Item 3', image: '/path/to/image3.jpg' },
  { id: 7, name: 'Item 3', image: '/path/to/image3.jpg' },


  // Tambahkan data lainnya sesuai kebutuhan
];

const GridOrCarousel = () => {
  const [isCarousel, setIsCarousel] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCarousel(window.innerWidth < 600);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Data</h1>
      {isCarousel ? (
        <div className="overflow-x-auto whitespace-nowrap">
          {data.map((item) => (
            <div key={item.id} className="inline-block px-2">
              <div className="max-w-xs">
                <Image src={item.image} alt={item.name} width={300} height={200} />
                <p className="text-center">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {data.map((item) => (
            <div key={item.id} className="p-4 bg-gray-100">
              <div className="max-w-xs">
                <Image src={item.image} alt={item.name} width={300} height={200} />
                <p className="text-center">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GridOrCarousel;
