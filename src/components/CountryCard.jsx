import { Link } from "react-router-dom";

const CountryCard = ({ countriesData }) => {
  return (
    <Link to={`/country/${countriesData.alpha2Code}`}>
      <div className="container box-border max-w-[20rem] h-[350px] pb-2 bg-white rounded-lg shadow m-auto flex flex-col dark:bg-gray-100">
        <div className="w-full">
          <img
            className="rounded-t-lg h-[150px] w-full"
            src={countriesData.flags.png}
            alt="countryFlag"
          />
        </div>
        <div className="p-5 text-md text-left flex flex-col justify-center w-full">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {countriesData.name.length < 20
              ? countriesData.name
              : countriesData.name.slice(0, 20) + "..."}
          </h5>
          <h5 className="font-semibold">
            Population:{" "}
            <span className="font-normal">{countriesData.population}</span>
          </h5>
          <h5 className="font-semibold">
            Region: <span className="font-normal">{countriesData.region}</span>
          </h5>
          <h5 className="font-semibold">
            Capital:{" "}
            <span className="font-normal">{countriesData.capital}</span>
          </h5>
        </div>
      </div>
    </Link>
  );
};
export default CountryCard;
