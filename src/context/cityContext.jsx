import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useDebounce } from 'use-debounce';

const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const userId = "4ad4130b46f0f7f6a3c3a9f9bc60d85b";
  const [city, setCity] = useState();
  const [forecast, setForecast] = useState();
  const [showForecast, setShowForecast] = useState(false);
  const [cityError, setCityError] = useState();
  const [debouncedCity]=useDebounce(city,300)
  let apiKey=process.env.REACT_APP_NINJA_API_KEY;
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        let dataLatLon = await axios.get(
          `https://api.api-ninjas.com/v1/city?name=${debouncedCity}`,
          {
            headers: {
              "X-Api-Key": `${apiKey}`,
             
            },
            contentType: "application/json",
          }
        );
      
        let suggestions =
          dataLatLon.data[0].name + ", " + dataLatLon.data[0].country;
        setCity(suggestions);
        let lat = await dataLatLon.data[0].latitude;
        let lon = await dataLatLon.data[0].longitude;

        let cityWeatherData = await axios.get(
          `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=60&appid=${userId}&units=metric`
        );
        setForecast(cityWeatherData);
       
      } catch (error) {
        console.error("Error fetching data:", error);
        setCityError("Please enter valid city name..");
      }
    };

    fetchData();
  }, [debouncedCity]);

  const values = {
    city,
    setCity,
    forecast,
    setForecast,
    setShowForecast,
    showForecast,
    cityError,
  };

  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};

export const useCity = () => useContext(StoreContext);
