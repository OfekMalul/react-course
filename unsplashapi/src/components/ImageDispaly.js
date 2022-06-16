import React from "react";
import "../styles/ImageDisplay.css";
import ImageCard from "./ImageCard";

const ImageDispaly = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="grid__dispaly">{images}</div>;
};
export default ImageDispaly;
