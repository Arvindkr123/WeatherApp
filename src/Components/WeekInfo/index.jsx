import React, { useEffect, useState } from "react";
import { UseWeatherAppContext } from "../../Context/Context";
import SingleCard from "../SingleCard";

const WeekInfoComponent = () => {
  const {
    state: { daily },
    dispatch,
  } = UseWeatherAppContext();
  //console.log(daily);
  const [selectedCard, setSelectedCard] = useState(0);

  const updateCurrent = () => {
    dispatch({ type: "SET_CURRENT", payload: daily[selectedCard] });
  };

  useEffect(() => {
    updateCurrent();
  }, [daily, selectedCard]);
  return (
    <>
      <div className="cardWrap">
        <ul className="cardList">
          {daily && daily.length > 0
            ? daily.map((item, index) => {
                {
                  if (index < 7) {
                    return (
                      <SingleCard
                        onClick={() => {
                          setSelectedCard(index);
                          updateCurrent();
                        }}
                        key={index}
                        item={item}
                        className={index === selectedCard ? "active" : ""}
                      />
                    );
                  }
                }
              })
            : ""}
        </ul>
      </div>
    </>
  );
};

export default WeekInfoComponent;
