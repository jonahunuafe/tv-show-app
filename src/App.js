import React from "react";
import { useEffect, useState } from "react";

import DetailsPage from "./pages/DetailsPage";


function App() {
  const [data, setData] = useState([])
  
  const url = "https://api.tvmaze.com/shows?q=powerpuffgirls";

  const fetchInfo = async () => {
    const response = await fetch(url);
    const resData = await response.json()
    setData(resData);
  }


  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <DetailsPage Tvdata={data} />
    </>
  );
}

export default App;
