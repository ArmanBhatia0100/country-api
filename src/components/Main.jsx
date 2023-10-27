import CountryCard from "./CountryCard";
import SearchBar from "./SearchBar";
import SelectCountry from "./SelectCountry";
import Countries from "../data/data.json";
import { useState } from "react";

const Main = () => {
  const [countriesList, setCountriesList] = useState(Countries);

  const getCountriesHandler = (countryName = "") => {
    const filterCountries = Countries.filter((country) =>
      country.name.toLowerCase().includes(countryName)
    );
    setCountriesList(() => filterCountries);
  };
  const getSelectedRegion = (selectedRegion = "") => {
    console.log(selectedRegion);
  };

  return (
    <div className="main ">
      {/* flexbox */}
      <div className=" dark:bg-gray-800 flex flex-col lg:flex-row lg:justify-between  ">
        <SearchBar methods={{ filter: getCountriesHandler }} />
        <SelectCountry methods={{ getRegion: getSelectedRegion }} />
      </div>
      <div className="dark:bg-gray-800 px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {countriesList.map((country) => {
          return <CountryCard key={country.name} countriesData={country} />;
        })}
      </div>
    </div>
  );
};
export default Main;
