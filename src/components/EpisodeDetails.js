import React, { useEffect, useState, useCallback } from "react";
// import { useParams } from "react-router-dom";
import Header from "./Header";
import EpisodeDetail from "./EpisodeDetail";
import classes from "./EpisodeDetails.module.css"

function EpisodeDetails() {
    // const { id } = useParams();
    const [showData, setShowData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    
    const url = "https://api.tvmaze.com/shows";

    useEffect(() => {
        const data = localStorage.getItem('list');
        if ( data !== null ) setShowData(JSON.parse(data));
    }, []);

    const fetchInfo = useCallback(async () => {
        try {
            const response = await fetch(url);
            const resData = await response.json();
            localStorage.setItem('list', JSON.stringify(showData));
            setShowData(resData);
        } catch(error) {
            setError("Error fetching data!", error);
        } finally {
            setLoading(false);
        }
    }, [showData])

    useEffect(() => {
        fetchInfo();
    }, [fetchInfo]);

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