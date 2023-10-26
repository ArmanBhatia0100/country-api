import CountryCard from "./CountryCard";
import SearchBar from "./SearchBar";
import SelectCountry from "./SelectCountry";
import Countries from "../data/data.json";

const Main = () => {
  return (
    <div className="main container">
      <div className="flex flex-col lg:flex-row lg:justify-between  ">
        <SearchBar />
        <SelectCountry />
      </div>
      <div className="container px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {Countries.map((country) => {
          return <CountryCard key={country.name} countriesData={country} />;
        })}
      </div>
    </div>
  );
};
export default Main;
