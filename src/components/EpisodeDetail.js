import React from 'react'

export default function EpisodeDetail({ tvData }) {
  return (
    <>
        <div className="datas-list">
            <img src={tvData.image.original} alt="" />
            <div className="mapped-text">
                <h1>{tvData.name}</h1>
                <p>{tvData.summary.replace(/<[^>]+>/g, '')}</p>
            </div>
        </div>
    </>
  )
}
