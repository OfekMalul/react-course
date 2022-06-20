import React from "react";
import "../styles/VideoItem.css";

//getting the publish time of the video
const publishTime = (publishedTime) => {
  const date = new Date(publishedTime);
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-us", options).format(date);
};
//shorten the amount of letters so it wont collapse on one another.
const channelTitle = (title) => {
  if (title.length > 25) {
    return `${title.slice(0, 24)}...`;
  } else return title;
};

const VideoItem = ({ video, chosenVideo }) => {
  const videoPublish = publishTime(video.snippet.publishTime);

  return (
    <div className="item__container" onClick={() => chosenVideo(video)}>
      <div className="video__item">
        <img
          className="col"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <div className="video__info">
          <h4 className="col video__header">{video.snippet.title}</h4>
          <p>{channelTitle(video.snippet.channelTitle)}</p>
          <p className="video__date">{videoPublish}</p>
        </div>
      </div>
    </div>
  );
};
export default VideoItem;
