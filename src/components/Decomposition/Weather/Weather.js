import React from "react";

function Weather(props) {
  return (
    <div className="Weather">
      <h3> Погода</h3>
      <div className="prev">
        <img className="icon" src={props.img} />
        <div className="text">{props.active}</div>
      </div>
      <div className="body">{props.children}</div>
    </div>
  );
}

export default Weather;
