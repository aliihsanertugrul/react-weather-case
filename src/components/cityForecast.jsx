import React from "react";
import { useCity } from "../context/cityContext";
import moment from "moment";
import { IoChevronBackCircle } from "react-icons/io5";

const CityForecast = () => {
  const { forecast, setShowForecast, setForecast } = useCity();
  console.log("first", forecast);
  let cityName = forecast?.data?.city?.name;
  let countryName = forecast?.data?.city?.country;
  let dayOfForecast = forecast?.data?.list[0]?.dt_txt;
  let mainTemp = Math.round(forecast?.data?.list[0]?.main?.temp);
  let airHumidity = forecast?.data?.list[0]?.main?.humidity;
  let maxTemp = Math.round(forecast?.data?.list[0]?.main?.temp_max);
  let minTemp = Math.round(forecast?.data?.list[0]?.main?.temp_min);
  let thermalSensation = Math.round(forecast?.data?.list[0]?.main?.feels_like);
  let visibilityMetric = forecast?.data?.list[0]?.visibility;
  let weather = forecast?.data?.list[0]?.weather[0]?.main; //??????????????yoksa desc olanımı koysam

  let windSpeed = Math.round(forecast?.data?.list[0]?.wind?.speed) * 3.6;

  // Parse a specific date using Moment.js
  const newDayofForecast = moment(dayOfForecast).format("LL");
  
  let weatherIcons = [];
  let weatherDays = [];
  let maxTempOfFiveDays = [];
  let minTempOfFiveDays = [];
  for (let i = 0; i < 5; i++) {
    let maxTempOfOneDay = Math.round(
      forecast?.data?.list[i * 8]?.main?.temp_max
    );
    let minTempOfOneDay = Math.round(
      forecast?.data?.list[i * 8]?.main?.temp_min
    );
    let weatherDay = moment(forecast?.data?.list[i * 8]?.dt_txt).format("ddd");
    let weatherIcon = forecast?.data?.list[i * 8]?.weather[0]?.icon;
    weatherDays.push(weatherDay);
    weatherIcons.push(weatherIcon);
    maxTempOfFiveDays.push(maxTempOfOneDay);
    minTempOfFiveDays.push(minTempOfOneDay);
  }

  const handleGoBack = () => {
    setShowForecast(false);
    setForecast(null);
  };
  return (
    <div className="container w-[375px] mx-auto h-full p-5 text-gray100 mb-2 lg:w-11/12 lg:grid lg:grid-rows-3 lg:grid-cols-2 lg:gap-5">
      <div className="flex flex-col items-start justify-between w-[335px] h-[304px] city-detail rounded-lg p-4    lg:h-[150px]  lg:col-start-1 lg:col-end-3 lg:w-full lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:bg-cover lg:bg-right">
        <div>
          <h2 className="heading-sm text-gray100">
            {cityName}, {countryName}
          </h2>
          <h6 className="text-xs text-gray100">{newDayofForecast}</h6>
        </div>

        <div className="flex flex-col">
          <span className="heading-xl text-white mb-2">{mainTemp}ºc</span>
          <span className="heading-sm text-white">
            {minTemp}ºc / {maxTemp}ºc
          </span>
          <span className="text-sm text-white font-normal">{weather}</span>
        </div>
      </div>

      <div className="bg-gray800 p-4 rounded-xl mt-8 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4 lg:h-[350px] lg:mt-0">
        <div className="flex items-center justify-between border-b border-gray700 py-4">
          <div className="flex items-center">
            <img src="/images/phosphor-icons/thermometerVektor.svg" alt="" />
            <p className="ml-3 heading-xs text-gray200">Thermal sensation</p>
          </div>
          <div className="heading-sm">{thermalSensation}ºc</div>
        </div>

        <div className="flex items-center justify-between border-b border-gray700 py-4">
          <div className="flex items-center">
            <img src="/images/phosphor-icons/thermometerVektor.svg" alt="" />
            <p className="ml-3 heading-xs text-gray200">Visibility</p>
          </div>
          <div className="heading-sm">{visibilityMetric} m</div>
        </div>

        <div className="flex items-center justify-between border-b border-gray700 py-4 ">
          <div className="flex items-center">
            <img src="/images/phosphor-icons/thermometerVektor.svg" alt="" />
            <p className="ml-3 heading-xs text-gray200">Wind speed</p>
          </div>
          <div className="heading-sm">{windSpeed} km/h</div>
        </div>

        <div className="flex items-center justify-between border-b border-gray700 py-4">
          <div className="flex items-center">
            <img src="/images/phosphor-icons/thermometerVektor.svg" alt="" />
            <p className="ml-3 heading-xs text-gray200">Air humidity</p>
          </div>
          <div className="heading-sm">{airHumidity}%</div>
        </div>

        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img src="/images/phosphor-icons/thermometerVektor.svg" alt="" />
            <p className="ml-3 heading-xs text-gray200">UV Index</p>
          </div>
          <div className="heading-sm">5</div>
        </div>
      </div>

      <div className="flex items-center justify-between bg-gray800 rounded-xl my-2 p-8 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4 lg:h-[350px] lg:my-0">
        {weatherDays.map((item, index) => (
          <div className="flex flex-col items-center justify-between h-[152px] py-4">
            <p className="heading-xs text-gray200">{item}</p>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${weatherIcons[index]}@2x.png`}
                alt=""
                width={56}
                height={56}
              />
            </div>
            <span className="heading-xs text-gray100">
              {maxTempOfFiveDays[index]}ºc
            </span>
            <span className="heading-xs text-gray400">
              {minTempOfFiveDays[index]}ºc
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={handleGoBack}
        className="animate-pulse text-md w-full text-center flex items-center justify-center gap-1 pb-5 pt-2 lg:absolute -bottom-5 left-0"
      >
        Go to search page <IoChevronBackCircle size={20} />
      </button>
    </div>
  );
};

export default CityForecast;
