const Header = () => {
  return (
    <header className=" bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 p-3 drop-shadow-md flex justify-between">
      <h3 className="text-md font-bold text-left">Where in the world?</h3>
      {/* Toggle button */}
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer"></input>
        <div class="w-9 h-4 bg-gray-400 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3.5px] after:left-[0px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Dark mode
        </span>
      </label>
    </header>
  );
};

export default Header;
