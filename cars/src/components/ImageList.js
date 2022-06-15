import React from "react";
import "../styles/imageListStyle.css";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <img key={image.id} src={image.urls.regular} alt={image.description} />
    );
  });
  return <div className="gridView">{images}</div>;
};
export default ImageList;
