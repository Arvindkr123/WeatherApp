import dayjs from "dayjs";
import React from "react";

const SingleCard = ({ onClick, className, key, item }) => {
  const WEEKDAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const weekDayIndex = dayjs.unix(item?.dt).day();
  return (
    <li key={key} className={className} onClick={onClick}>
      <img
        className="day-icon"
        alt="day icon"
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
      />
      <span className="day-name">{WEEKDAYS[weekDayIndex].slice(0, 3)}</span>
      <span className="day-temp">
        {Math.round(item.temp.max)}
        <sup>o</sup>C
      </span>
    </li>
  );
};

export default SingleCard;
