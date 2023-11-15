import React, { useState } from "react";

const useLocalStorage = (key, val) => {
  const [localstorage, setLocalstorage] = useState(() => {
    const localValue = localStorage.getItem(key);
    console.log("LocalValue", localValue);
    return JSON.parse(localValue);
  });

  const localeChange = (val) => {
    setLocalstorage(val);
    localStorage.setItem(key, JSON.stringify(val));
    console.log("val", val);
    console.log("key", key);
  };

  return [localstorage, localeChange];
};

export default useLocalStorage;
