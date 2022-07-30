import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4 mb-3" key={index}>
                <img src={photo.src.landscape} alt="" className="img-fluid" />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
