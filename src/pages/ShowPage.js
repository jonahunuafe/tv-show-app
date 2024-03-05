import { Link } from "react-router-dom";

function ShowPage() {
    return (
        <div className="show-container">
            <center className="center">
                <h1>Movie series</h1>
                <p>Check out these exciting and captivating movies</p>
                <p>Go to <Link to="details">the list of movies</Link></p>
            </center>
        </div>
    );
}

export default ShowPage;