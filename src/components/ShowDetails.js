import { useLoaderData } from "react-router-dom";

function ShowDetails() {
    const show = useLoaderData({});
    return (
        <>
            <img src={show.image.original} alt="" />
            <h2>{show.name}</h2>
            <p>{show.summary.replace(/<[^>]+>/g, '')}</p>
        </>
    );
};

const movieLoader = async ({ params }) => {
    const res = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
    const data = res.json();
    return data;
};

export { ShowDetails as default, movieLoader };