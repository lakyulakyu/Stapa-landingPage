import { useState } from "react";
import ReactPlayer from "react-player";

const YouTubeLive = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div>
      <button onClick={handleFullScreen}>
        {isFullScreen ? (
          <p className=" text-sm pt-1 mb-2 px-6 rounded-se-xl rounded-es-xl text-white duration-500  font-semibold bg-red-500 p-1.5">
            Close Live
          </p>
        ) : (
          <p className="text-sm pt-1 rounded-se-xl rounded-es-xl text-primary-red font-semibold duration-500 border-2  border-red-500 p-1.5">
            Watch Live
          </p>
        )}
      </button>
      {isFullScreen && (
        <ReactPlayer
          url="https://www.youtube.com/embed/qMnEmS9hDfk"
          controls
          width="100%"
          height={isFullScreen ? "55vh" : "auto"}
        />
      )}
    </div>
  );
};

export default YouTubeLive;
