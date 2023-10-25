import CountryCard from "./CountryCard";
import SearchBar from "./SearchBar";
import SelectCountry from "./SelectCountry";

const Main = () => {
  return (
    <div className="main container">
      <div className="flex flex-col lg:flex-row lg:justify-between  ">
        <SearchBar />
        <SelectCountry />
      </div>
      <div className="container px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </div>
    </div>
  );
};
export default Main;
