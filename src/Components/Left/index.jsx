import React from "react";
import { UseWeatherAppContext } from "../../Context/Context";
import dayjs from "dayjs";

const LeftComponent = () => {
  const {
    state: { city, current },
  } = UseWeatherAppContext();

  const WEEKDAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const weekDayIndex = dayjs.unix(current?.dt).day();

  if (!current) return <div className="leftWrap">loading....</div>;
  return (
    <div className="leftWrap">
      <div className="dateWrap">
        <h2>{WEEKDAYS[weekDayIndex]}</h2>
        <span className="dateDay">
          {dayjs?.unix(current?.dt).format("DD MMM YYYY")}
        </span>
        <span className="locationName">
          {city.city} - {city.admin_name} - {city.country}
        </span>
      </div>
      <div className="weatherContainer">
        <img
          className="weatherIcon"
          alt="day icon"
          src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
        />
        <h1 className="weatherTemp">
          {Math.round(current.temp.max)} <sup>o</sup>C
        </h1>
        <h3 className="weatherDesc">{current.weather[0].main}</h3>
      </div>
    </div>
  );
};

export default LeftComponent;
