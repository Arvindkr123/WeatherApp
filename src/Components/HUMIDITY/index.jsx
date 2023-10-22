import React from "react";
import { UseWeatherAppContext } from "../../Context/Context";

const HumidityComponent = () => {
  const {
    state: { current, city },
    dispatch,
  } = UseWeatherAppContext();
  //console.log(city, current);

  const uvLevel = (uvlevel) => {
    if (uvlevel <= 2) return "Low";
    if (uvlevel <= 5) return "Medium";
    if (uvlevel <= 7) return "High";
    if (uvlevel > 7) return "Very High";
  };
  return (
    <>
      {current ? (
        <div className="humidityWrap">
          <div className="humidityData">
            <div className="title">VU Index</div>
            <div className="value">
              {Math.round(current.uvi)} {uvLevel(Math.round(current.uvi))}
            </div>
          </div>
          <div className="humidityData">
            <div className="title">Humidity</div>
            <div className="value">{current?.humidity} %</div>
          </div>
          <div className="humidityData">
            <div className="title">Wind</div>
            <div className="value">{Math.round(current?.wind_speed)} km/h</div>
          </div>
          <div className="humidityData">
            <div className="title">
              {city.city} - {city.admin_name} - Population
            </div>
            <div className="value">
              {parseFloat(city.population).toLocaleString("en")}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HumidityComponent;
