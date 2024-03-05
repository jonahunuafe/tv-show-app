import React from "react";
import { useEffect, useState } from "react";


function DetailsPage() {
    const [data, setData] = useState([])
    
    const url = "https://api.tvmaze.com/shows?q=powerpuffgirls";

    const fetchInfo = async () => {
        const response = await fetch(url);
        const resData = await response.json();
        setData(resData);
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <div className="show-container">
        <ul className="show-data">
            {data.map((tvData) => (
                <li className="datas-list" key={tvData.id}>
                    <img src={tvData.image.original} alt="" />
                    <div className="mapped-text">
                        <h1>{tvData.name}</h1>
                        <p>{tvData.summary}</p>
                    </div>
                </li>
            ))}
        </ul>
        </div>
    );
}

export default DetailsPage;