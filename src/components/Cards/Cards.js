import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import "./desktop.scss";

function Cards(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {props.children}
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Cards;
