import React from "react";

function NewsItem(props) {
  return (
    <div className="NewsItem">
      <div className="NewsItem-icon"> {props.icon}</div>
      <div className="NewsItem-text"> {props.text}</div>
    </div>
  );
}

export default NewsItem;
