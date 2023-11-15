import React, { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [localstorage, setLocalstorage] = useState(() => {
    const localValue = localStorage.getItem(key);
    console.log("LocalValue", localValue);
    return localValue ? JSON.parse(localValue) : initialValue;
  });

  //localstorage'un değeri localde eğer kayıtlı bilgi varsa o değeri alıyor.

  //JSON.parse()=> JSON olarak alınan verileri parse etmek yani ayrıştırmak için kullanılır; bir JSON string'ini bir Javascript object haline getirir.

  const localeChange = (val) => {
    setLocalstorage(val);
    localStorage.setItem(key, JSON.stringify(val));
    console.log("val", val);
    console.log("key", key);
  };

  return [localstorage, localeChange];
};

export default useLocalStorage;
