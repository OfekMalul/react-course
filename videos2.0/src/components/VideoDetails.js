import React from "react";
import "../styles/VideoDetails.css";

const VideoDetails = ({ video }) => {
  if (!video) return <div className="video__details">Loading...</div>;
  const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="video__details__container">
      <div className="video__details">
        <iframe src={videoSRC} alt={video.snippet.title}></iframe>
        <div className="video__details__info">
          <h2>{video.snippet.title}</h2>
          <h4>{video.snippet.description}</h4>
        </div>
      </div>
    </div>
  );
};
export default VideoDetails;
