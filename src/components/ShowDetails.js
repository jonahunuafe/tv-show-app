import { Link, useLoaderData } from "react-router-dom";

import classes from "./ShowDetail.module.css";

function ShowDetails() {
    const show = useLoaderData({});
    
    return (
        <div className={classes.showDetail}>
            <img src={show.image.original} alt="actors" />
            <h2>{show.name}</h2>
            <p>{show.summary.replace(/<[^>]+>/g, '')}</p>
            <button className={classes.linkBtn}>
                <Link to="/">Back to episode lists</Link>
            </button>
        </div>
    );
};

const movieLoader = async ({ params }) => {
    const res = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
    const data = res.json();
    return data;
};

export { ShowDetails as default, movieLoader };