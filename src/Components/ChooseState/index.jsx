import React, { useEffect } from "react";
import cities from "../../Data/in.json";
import { UseWeatherAppContext } from "../../Context/Context";
import axios from "axios";
const ChooseState = () => {
    const {
        state: { city },
        dispatch,
    } = UseWeatherAppContext();

    const handleChange = (e) => {
        const selectedCity = cities.filter(
            (city) => city.city === e.target.value
        )[0];
        dispatch({ type: "SET_CITY", payload: selectedCity });
    };

    // api call
    const APIKEY = String(import.meta.env.VITE_API_KEY);
    let lat = city && city.lat ? city.lat : "";
    let long = city && city.lng ? city.lng : "";
    let exclude = "hourly,minutely";
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}`;

    const fetchData = async () => {
        const data = await axios(url);
        let _daily = data.data.daily;
        dispatch({
            type: "SET_DAILY",
            payload: _daily,
        });
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="stateWrap">
            <select className="stateMenu" defaultValue={city} onChange={handleChange}>
                {cities &&
                    cities.length > 0 &&
                    cities.map((city) => (
                        <option key={`${city.population}${city.lat}`} value={city.city}>
                            {city.city}-{city.admin_name}
                        </option>
                    ))}
            </select>
        </div>
    );
};

export default ChooseState;
