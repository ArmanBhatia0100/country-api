const CountryCard = () => {
  return (
    <div class=" max-w-[15rem] md:max-w-md lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
      <img class="rounded-t-lg" src="https://flagcdn.com/ar.svg" alt="" />
      <div class="p-5 text-md text-left">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Germany
          </h5>
        </a>
        <h5 className="font-semibold">
          Population: <span className="font-normal">12,000</span>
        </h5>
        <h5 className="font-semibold">
          Region: <span className="font-normal">America</span>
        </h5>
        <h5 className="font-semibold">
          Capital: <span className="font-normal">New York</span>
        </h5>
      </div>
    </div>
  );
};
export default CountryCard;
