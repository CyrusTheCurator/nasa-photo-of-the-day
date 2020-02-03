import React from "react";
function ImageComponent(props) {
  if (!props.currentImageObj) return <h3>Loading...</h3>;

  console.log(props.currentImageObj);

  return (
    <div className="imageComponentContainer">
      <div className="date">1-1-2020</div>
      <img alt="Image Failed To Load" src={props.currentImageObj.url}></img>
    </div>
  );
}

export default ImageComponent;
