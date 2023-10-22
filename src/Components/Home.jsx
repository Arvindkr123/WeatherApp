import React from "react";
import ChooseState from "./ChooseState";
import LeftComponent from "./Left";
import WeekInfoComponent from "./WeekInfo";
import HumidityComponent from "./HUMIDITY";
const HomeComponent = () => {
  return (
    <div className="homeWrap">
      <div className="weatherSection">
        <LeftComponent />
        <div className="rightSide">
          <ChooseState /> 
          <WeekInfoComponent />
          <HumidityComponent />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
