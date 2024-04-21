import React from "react";
import CitySelect from "./components/citySelect";
import CityForecast from "./components/cityForecast";
import CitySearchPage from "./components/citySearchPage";
import { useCity } from "./context/cityContext";

const App = () => {
  const { showForecast } = useCity();

  return <>{!showForecast ? <CitySearchPage /> : <CityForecast />}</>;
};

export default App;
