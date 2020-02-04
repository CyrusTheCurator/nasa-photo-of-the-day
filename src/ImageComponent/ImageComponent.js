import React from "react";
import "./ImageComponentContainer.css";
function ImageComponent(props) {
  if (!props.currentImageObj) return <h3>Loading...</h3>;
  if (props.currentImageObj.media_type != "image")
    return (
      <h3>
        Error: Media type is:
        <a href={props.currentImageObj.url}>
          {props.currentImageObj.media_type}
        </a>
      </h3>
    );
  console.log(props.currentImageObj);
  const img = props.currentImageObj.url;
  const date = props.currentImageObj.date;

  return (
    <div className="imageComponentContainer">
      <div className="date">{date}</div>
      <h2>{props.currentImageObj.title}</h2>
      <img className="spaceImage" src={img}></img>
      <h3>Image Description</h3>
      <p className="description">{props.currentImageObj.explanation}</p>
      <p>©{props.currentImageObj.copyright}</p>
    </div>
  );
}

export default ImageComponent;
