import React from "react";
import CitySelect from "./citySelect";

const CitySearchPage = () => {
  return (
    <div className="container text-white w-[375px] mx-auto h-full">
      <div className="flex items-center justify-center">
        <img
          src="iWeatherLogo.svg"
          alt=""
          className="w-[186px] h-[32px] mt-12"
        />
      </div>

      <div className="w-[311px] flex flex-col items-center justify-center mx-auto mt-[162px]">
        <h2 className="heading-md mb-1">
          Welcome to <span className="text-blueLight">TypeWeather</span>
        </h2>
        <p className="text-sm text-gray200 mb-8">
          Choose a location to see the weather forecast
        </p>
        <CitySelect />
      </div>
    </div>
  );
};

export default CitySearchPage;
