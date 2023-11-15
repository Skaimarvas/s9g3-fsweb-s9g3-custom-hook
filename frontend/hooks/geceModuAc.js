import React, { useEffect, useState } from "react";
import useLocalStorage from "./localStorageKullan";

const initialValue = "false";

const useGeceModuAc = () => {
  const [value, setValue] = useState(localStorage.getItem("theme"));
  const [theme, setTheme] = useLocalStorage("theme", initialValue);

  //Burada localStorage'de kayıt ettiğimiz bilgiler  mevcutsa, o değeri value değerine atar

  //theme'nin dark mı light mı olacağını oluşturduğumuz useLocalStorage Hook'uyla value değerine göre belirliyoruz.

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
