import React from "react";
import "./desktop.scss";
import BunnerText from "./BunnerText/BunnerText";
import Currency from "./Currency/Currency";
import News from "./News/News";
import NewsList from "./NewsList/NewsList";
import Search from "./Search/Search";
import Weather from "./Weather/Weather";
import Map from "./Map/Map";
import Visited from "./Visited/Visited";
import Ether from "./Ether/Ether";
import TVProgram from "./TVProgram/TVProgram";

function Decomposition() {
  return (
    <div className="Decomposition">
      <div className="top">
        <News contry date>
          <NewsList arrNews />
          <Currency />
        </News>
        <BunnerText img title body />
      </div>
      <Search random="random text" />
      <div className="bottom">
        <Weather img="" active>
          <div>Днем</div>
          <div>Ночью</div>
        </Weather>
        <Map conrty="Германия"></Map>
        <Visited items />
        <TVProgram items />
        <Ether items />
      </div>
    </div>
  );
}

export default Decomposition;
