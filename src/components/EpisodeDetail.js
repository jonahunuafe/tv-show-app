import React from 'react';
import { useState } from 'react';
import classes from "./EpisodeDetail.module.css"
import { Link } from 'react-router-dom';

export default function EpisodeDetail({ tvData }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = tvData.summary;

  if(!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <>
        <div className={classes.detail}>
          <img src={tvData.image.original} alt="" />
          <div className={classes.detailText}>
            <h1>{tvData.name}</h1>
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
