import React from "react";

function Search(props) {
  return (
    <div className="Search">
      <div className="top-block">/ генерируем мапом список категорий </div>
      <div className="center-block">
        <img className="logo" src="" alt="logo" />
        <input className="input"></input>
        <button className="button">Найти</button>
      </div>
      <div className="botton-block">{props.random}</div>
    </div>
  );
}

export default Search;
