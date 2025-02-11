import React, { useState, useEffect } from "react";
import axios from "axios";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import useGeceModuAc from "./hooks/geceModuAc";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [geceModu, handleGeceModu] = useGeceModuAc("");

  //Gece Modu useState'i kaldırıp kendi yaptığımız useGeceModuAc hook'umuzu kullandık.

  //handleGeceModu ile geceModu'nun değerini boolean değeri olarak ayarlıyoruz.

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={geceModu ? "dark-mode App" : "App"}>
      {/* GeceModu true olduğunda dark-mode aktif oluyor*/}
      <Navbar geceModu={geceModu} setGeceModu={handleGeceModu} />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
