import React from "react";
import { useEffect, useState } from "react";

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
            setError("Error fetching data", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <>
            {loading ? "Loading..." : (
                <div className={classes.data}>
                    {data.map((tvData) => (
                        <div key={tvData.id}>
                            <EpisodeDetail tvData={tvData} />  
                        </div>
                    ))}
                </div>)
            }
            {error}
        </>
    );
}

export default EpisodeDetails;