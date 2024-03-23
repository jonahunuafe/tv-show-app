import React from 'react';
import classes from "./EpisodeDetail.module.css"

export default function EpisodeDetail({ tvData }) {
  return (
    <>
        <div className={classes.detail}>
            <img src={tvData.image.original} alt="" />
            <div className={classes.detailText}>
                <h1>{tvData.name}</h1>
                <p>{tvData.summary.replace(/<[^>]+>/g, '')}</p>
            </div>
        </div>
    </>
  )
}
