import React from "react";
import "../styles/VideoItemStyle.css";

const VideoItem = ({ video, onVideoSelect }) => {
  //
  return (
    <div onClick={() => onVideoSelect(video)} className="item video__item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
