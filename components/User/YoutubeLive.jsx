import { useState } from "react";

const YouTubeLive = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div>
      <button onClick={handleFullScreen}>
        {isFullScreen ? (
          <p className=" text-xs pt-1 mb-2 px-6 rounded-se-xl rounded-es-xl text-white duration-500  font-semibold bg-red-500 p-1.5">
           Tutup Live
          </p>
        ) : (
          <p className="text-xs pt-1 rounded-se-xl rounded-es-xl text-primary-red font-semibold duration-500 border-2  border-red-500 p-1.5">
            Tonton Live
          </p>
        )}
      </button>
      {isFullScreen && (
        <iframe
          src="https://www.youtube.com/embed/qMnEmS9hDfk"
          autoPlay
          width="100%"
          height="100%"
        className={isFullScreen&&`aspect-video`}
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeLive;
