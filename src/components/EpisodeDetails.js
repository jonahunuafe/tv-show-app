import React, { useEffect, useState } from "react";

import EpisodeDetail from "./EpisodeDetail";
import classes from "./EpisodeDetails.module.css"

function EpisodeDetails() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    
    const url = "https://api.tvmaze.com/shows";

    const fetchInfo = async () => {
        try {
            const response = await fetch(url);
            const resData = await response.json();
            setData(resData);
        } catch(error) {
            setError("Error fetching data!", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <>
            {loading ? (<h2>Loading...</h2>) : (
                <div className={classes.data}>
                    {data.map((tvData) => (
                        <EpisodeDetail tvData={tvData} key={tvData.id} />
                    ))}
                </div>)
            }
            <p className={classes.error}>{error}</p>
        </>
    );
}

export default EpisodeDetails;