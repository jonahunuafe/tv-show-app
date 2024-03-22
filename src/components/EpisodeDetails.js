import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import EpisodeDetail from "./EpisodeDetail";

function EpisodeDetails() {
    const [data, setData] = useState([]);
    
    const url = "https://api.tvmaze.com/shows";

    const fetchInfo = async () => {
        const response = await fetch(url);
        const resData = await response.json();
        setData(resData);
    }

    useEffect(() => {
        fetchInfo();
    });

    return (
        <>
            <ul className="show-data">
                {data.map((tvData) => (
                    <div key={tvData.id} >
                        <EpisodeDetail tvData={tvData} />
                        <Link to={`/details/${tvData.id}`}>Show Details</Link>
                    </div>
                ))}
            </ul>
        </>
    );
}

export default EpisodeDetails;