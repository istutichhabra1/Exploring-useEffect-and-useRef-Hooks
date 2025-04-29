import React, { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const restartVideo = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <div>
      <h2>React Video Player</h2>
      <video
        ref={videoRef}
        width="600"
        controls
        style={{ border: "1px solid #000", marginBottom: "10px" }}
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
        <button onClick={restartVideo}>Restart</button>
      </div>
    </div>
  );
}

export default VideoPlayer;
