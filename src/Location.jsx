import React from "react";
import "./App.css";

export default function Location(props) {
  return (
    <div className="location">
      <div className="location--container">
        <img
          className="location--image"
          src={`/${props.imagePath}`}
          width="300px"
          height="400px"
        ></img>
      </div>
      <div className="location--text">
        <div className="location--gps">
          <img
            src={"/marker.png"}
            width="21px"
            height="29px"
          ></img>
          <p className="location--country">{props.location.toUpperCase()}</p>
          <p>
            <a href={props.googleMapsUrl} target="_blank">
              View on Google Maps
            </a>
          </p>
        </div>
        <h1 className="location--title">{props.title}</h1>
        <h3 className="location--dates">{props.startDate} - {props.endDate}</h3>
        <p className="location--description">
          {props.description}
        </p>
      </div>
    </div>
  );
}
