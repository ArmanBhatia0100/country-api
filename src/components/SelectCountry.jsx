const SelectCountry = ({ methods }) => {
  return (
    <select
      id="default"
      onChange={(e) => {
        methods.getRegion(e.target.value);
      }}
      className="bg-gray-50 border border-gray-300 text-gray-900 m-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 dark:focus:border-blue-500"
    >
      <option defaultValue>Filter by region</option>
      <option value="Aferica">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};
export default SelectCountry;
