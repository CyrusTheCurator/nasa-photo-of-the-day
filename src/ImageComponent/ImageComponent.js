import React from "react";
import "./ImageComponentContainer.css";
function ImageComponent(props) {
  if (!props.currentImageObj) return <h3>Loading...</h3>;

  console.log(props.currentImageObj);
  const img = props.currentImageObj.url;
  const date = props.currentImageObj.date;

  return (
    <div className="imageComponentContainer">
      <div className="date">{date}</div>
      <img className="spaceImage" src={img}></img>
    </div>
  );
}

export default ImageComponent;
