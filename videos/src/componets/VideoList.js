import React from "react";

const DisplayVideos = (props) => {
  const videos = props.videos.map((video) => {
    return <video key={videos.indexOf(video)} src={video.props.src}></video>;
  });
  console.log(videos);
  return <div>{videos}</div>;
};
export default DisplayVideos;
