import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import EpisodeDetail from "./EpisodeDetail";
import classes from "./EpisodeDetails.module.css"

function EpisodeDetails() {
    const [data, setData] = useState([]);
    const [loading, setLoading] useState(true);
    
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
            <ul>
                {data.map((tvData) => (
                    <div className={classes.data}>
                        <div key={tvData.id}>
                            <EpisodeDetail tvData={tvData} />
                        </div>
                        <Link to={`/details/${tvData.id}`}>Show Details</Link>
                    </div>
                ))}
            </ul>
        </>
    );
}

export default EpisodeDetails;