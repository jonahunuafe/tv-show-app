import { useLoaderData } from "react-router-dom";
import classes from "./ShowDetail.module.css";

function ShowDetails() {
    const show = useLoaderData({});
    return (
        <div className={classes.showDetail}>
            <div className={classes.imgContainer}>
                <img src={show.image.original} alt="" />
            </div>
            <h2>{show.name}</h2>
            <p>{show.summary.replace(/<[^>]+>/g, '')}</p>
        </div>
    );
};

const movieLoader = async ({ params }) => {
    const res = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
    const data = res.json();
    return data;
};

export { ShowDetails as default, movieLoader };