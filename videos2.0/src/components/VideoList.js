import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, chosenVideo }) => {
  const video = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        chosenVideo={chosenVideo}
      />
    );
  });
  return <div>{video}</div>;
};
export default VideoList;
