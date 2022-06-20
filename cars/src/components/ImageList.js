import React from "react";
import "../styles/imageListStyle.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    //transfer every image by itself to imageCard and the result is assigned to images
    return <ImageCard key={image.id} image={image} />;
  });
  //images is transfered and been shown in the final UI.

  return <div className="gridView">{images}</div>;
};
export default ImageList;
