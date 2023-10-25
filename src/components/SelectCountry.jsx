const SelectCountry = () => {
  return (
    <select
      id="default"
      class="bg-gray-50 border border-gray-300 text-gray-900 m-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option selected>Filter by region</option>
      <option value="AF">Africa</option>
      <option value="AM">America</option>
      <option value="AS">Asia</option>
      <option value="EU">Europe</option>
      <option value="OC">Oceania</option>
    </select>
  );
};
export default SelectCountry;
