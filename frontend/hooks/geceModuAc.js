import React, { useEffect, useState } from "react";
import useLocalStorage from "./localStorageKullan";

const useGeceModuAc = () => {
  const [value, setValue] = useState(localStorage.getItem("theme"));
  const [theme, setTheme] = useLocalStorage("theme", value);

  console.log("theme", theme);
  console.log(localStorage.getItem("theme"));
  console.log(localStorage);
  const toggleTheme = (e) => {
    setValue(!value);
    setTheme(!value);
  };

  return [value, toggleTheme];
};

export default useGeceModuAc;
