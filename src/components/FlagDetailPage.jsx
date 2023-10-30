import { useParams } from "react-router-dom";
import Countries from "../data/data.json";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const FlagDetailPage = () => {
  const params = useParams();

  const [countryDetail, setCountryDetail] = useState(null);
  useEffect(() => {
    setCountryDetail(() => Countries.find((country) => country.alpha2Code === params.alpha2Code));
  }, [params, countryDetail]);
  setCountryDetail(() => Countries.find((country) => country.alpha2Code === params.alpha2Code));

  return (
    <div className="p-20">
      {!countryDetail ? (
        <div>Loading...</div>
      ) : (
        <>
          <Link to="/">
            <button
              type="button"
              class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg class="w-5 h-6 pr-2 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
              </svg>
              Back
            </button>
          </Link>
          <div className="flex flex-row justify-evenly p-20">
            <div>
              <img className="w-full h-full max-w-[500px] max-h-[400px] border-2 border-black" src={countryDetail.flag} alt="" />
            </div>
            <div className="countryDetails">
              <h3 className="font-bold text-2xl py-5">{countryDetail.name}</h3>
              <div className="flex flex-row">
                <div>
                  <h5 className="font-bold">
                    Native Name:
                    <span className="font-light"> {countryDetail.nativeName}</span>
                  </h5>
                  <h5 className="font-bold">
                    Population:
                    <span className="font-light"> {countryDetail.population}</span>
                  </h5>
                  <h5 className="font-bold">
                    Region:
                    <span className="font-light"> {countryDetail.population}</span>
                  </h5>
                  <h5 className="font-bold">
                    Sub Region:
                    <span className="font-light"> {countryDetail.subregion}</span>
                  </h5>
                  <h5 className="font-bold">
                    Capital:
                    <span className="font-light"> {countryDetail.capital}</span>
                  </h5>
                </div>
                <div>
                  <h5 className="font-bold">
                    Top Level Domain:
                    <span className="font-light"> {countryDetail.topLevelDomain}</span>
                  </h5>
                  <h5 className="font-bold">
                    Currency:
                    {countryDetail.currencies.map((item) => {
                      return <span className="font-light"> {item.code}</span>;
                    })}
                  </h5>
                  <h5 className="font-bold">
                    Language:
                    {countryDetail.languages.map((item) => {
                      return <span className="font-light"> {item.name} </span>;
                    })}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FlagDetailPage;
