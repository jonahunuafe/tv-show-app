import { useEffect, useState } from "react";

import DetailsPage from "./pages/DetailsPage";
import { fetchTvShows } from "./http";



function App() {
  const [show, setShow] = useState('');

  useEffect(() => {
    async function fetchShows() {
      try {
        const shows = await fetchTvShows();
        setShow(shows);
      } catch(error) {
        throw new Error("Couldn't fetch");
      }
    } 
    fetchShows();
  }, []);

  return (
    <>
      <DetailsPage title={show} />
    </>
  );
}

export default App;
