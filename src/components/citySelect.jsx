import React from "react";
import { useCity } from "../context/cityContext";
import { TbHandClick } from "react-icons/tb";
import { HiCursorClick } from "react-icons/hi";
import ErrorMessage from "../helpers/muiAlert";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const CitySelect = () => {
  const { setCity, city, setShowForecast, forecast, cityError } = useCity();
  console.log("forecast", forecast);

  const handleCity = (e) => {
    setCity(e.target.value);
    if (!forecast || forecast === undefined) {
      ErrorMessage("hata mesajı");
    }
  };

  const handleSearch = (e) => {
    setCity(e.target.value);
    setShowForecast(true);
  };
  return (
    <>
      <div className="w-full relative">
        <input
          placeholder="Search location"
          className="  px-5 py-4 w-full rounded-md bg-inputColor placeholder-gray400  placeholder:text-md focus:outline-none"
          onChange={(e) => handleCity(e)}
        />
        {city && (
          <img
            className="animate-spin absolute top-3 right-2"
            src="/images/phosphor-icons/loadingVektor.svg"
            alt=""
          />
        )}
      </div>
      {forecast ? (
        <div
          className="flex items-center justify-between w-[311px] p-5 text-md text-white bg-gray-500 rounded-md mt-2 cursor-pointer"
          onClick={handleSearch}
        >
          <span>{city}</span> <HiCursorClick size={25} />
        </div>
      ) : (
        <div
          className="disabled-btn flex items-center justify-between w-[311px] p-5 text-md text-white bg-gray-500 rounded-md mt-2 cursor-pointer"
          disabled
          onClick={handleSearch}
        >
          <span>{cityError}</span>
        </div>
      )}
    </>
  );
};

export default CitySelect;
