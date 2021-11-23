import React from "react";

function News(props) {
  return (
    <div className="News">
      <h2 className="News-title">
        Сейчас в Сми {props.contry} рекомендуем {props.date}{" "}
      </h2>
      {props.children}
    </div>
  );
}

export default News;
