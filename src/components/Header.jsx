import { useEffect, useState } from "react";

const Header = ({ getTheme }) => {
  const [themeChecked, setThemeChecked] = useState(false);
  useEffect(() => {
    if (themeChecked) {
      getTheme("dark");
    } else {
      getTheme("");
    }
  }, [themeChecked, getTheme]);
  return (
    <header className="bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 p-3 drop-shadow-md flex justify-between">
      <h3 className="dark:text-gray-300 text-md font-bold text-left">
        Where in the world?
      </h3>
      {/* Toggle button */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={themeChecked}
          className="sr-only peer"
          onChange={() => {
            setThemeChecked(!themeChecked);
          }}
        ></input>
        <div className="w-9 h-4 bg-gray-400 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute max-[320px]:after:top-[1rem] after:top-[3.5px] after:left-[0px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Dark mode
        </span>
      </label>
    </header>
  );
};

export default Header;
