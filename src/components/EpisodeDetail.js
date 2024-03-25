import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from "./EpisodeDetail.module.css"

export default function EpisodeDetail({ tvData }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = tvData.summary;

  if(!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <>
        <div className={classes.detail}>
          <img src={tvData.image.original} alt="actors" />
          <div className={classes.subDetail}>
            <h2>{tvData.name}</h2>
            <p>{description.replace(/<[^>]+>/g, '')}</p>
            <button className={classes.btn}
              onClick={() => setShowFullDescription((prevState) => !prevState)}
            >
              {showFullDescription ? "Less" : "More"}
            </button>
          </div>
            <Link to={`/details/${tvData.id}`}>Show Details</Link>
        </div>
    </>
  )
}
