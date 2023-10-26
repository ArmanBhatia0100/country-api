const CountryCard = ({ countriesData }) => {
  return (
    <div class=" w-[20rem] h-[350px] pb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto flex flex-col">
      <div className="w-full">
        <img
          class="rounded-t-lg h-[150px] w-full"
          src={countriesData.flags.png}
          alt="countryFlag"
        />
      </div>

      <div class="p-5 text-md text-left flex flex-col justify-center">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
          Capital: <span className="font-normal">{countriesData.capital}</span>
        </h5>
      </div>
    </div>
  );
};
export default CountryCard;
