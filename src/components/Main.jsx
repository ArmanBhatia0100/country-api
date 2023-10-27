import CountryCard from "./CountryCard";
import SearchBar from "./SearchBar";
import SelectCountry from "./SelectCountry";
import Countries from "../data/data.json";
import { useState } from "react";

// what will happen if the region is changed and user search?

const Main = () => {
  const [countriesList, setCountriesList] = useState(Countries);
  const [selectedRegion, isSelectedRegion] = useState("default");
  console.log(selectedRegion);
  // input countries
  const getCountriesHandler = (countryName = "") => {
    if (selectedRegion != "default") {
      console.log("wor");
      const filterCountries = Countries.filter((country) => {
        return (
          country.name.toLowerCase().includes(countryName) &&
          country.region.toLowerCase() == selectedRegion.toLowerCase()
        );
      });
      setCountriesList(() => filterCountries);
    } else {
      const filterCountries = Countries.filter((country) =>
        country.name.toLowerCase().includes(countryName)
      );
      setCountriesList(() => filterCountries);
    }
  };

  // input Regions
  const getSelectedRegion = (selectedRegion = "default") => {
    isSelectedRegion(() => selectedRegion);
    const filterCountries = Countries.filter((country) => {
      if (selectedRegion == "default") {
        return countriesList;
      } else {
        return country.region.toLowerCase() === selectedRegion.toLowerCase();
      }
    });
    setCountriesList(() => filterCountries);
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
