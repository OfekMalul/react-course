import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;
  //creating and returning a user interface for the user
  return (
    <div>
      <div className="ui embed">
        <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} />
      </div>
      <div className="ui segment">
        <h4 className="ui header"> {video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VideoDetail;
