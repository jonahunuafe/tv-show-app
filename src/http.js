export async function fetchTvShows() {
    const response = await fetch("https://api.tvmaze.com/shows?q=powerpuffgirls");
    const resData = await response.json();
    
    if(!response.ok) {
        throw new Error("Failed to fetch Tv-show")
    }

    return resData[0].name;
}

fetchTvShows();