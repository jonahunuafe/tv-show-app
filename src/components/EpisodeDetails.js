import React, { useEffect, useState } from "react";
import Header from "./Header";
import EpisodeDetail from "./EpisodeDetail";
import classes from "./EpisodeDetails.module.css"

function EpisodeDetails() {
    const [showData, setShowData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    
    const url = "https://api.tvmaze.com/shows";

    const fetchInfo = async () => {
        try {
            const response = await fetch(url);
            const resData = await response.json();
            setShowData(resData);
        } catch(error) {
            setError("Error fetching data!", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <>
            <Header />
            {loading ? (<h2>Loading...</h2>) : (
                <div className={classes.data}>
                    {showData.map((tvData) => (
                        <EpisodeDetail tvData={tvData} key={tvData.id} />
                    ))}
                </div>)
            }
            <p className={classes.error}>{error}</p>
        </>
    );
}

export default EpisodeDetails;