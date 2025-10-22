import React from "react";
import "./Leaderboard.css";

function Place({ rank, name, course, qpi, image }) {
  return (
    <div className="Place">
      <div className="Rank">
        <h2>{rank}</h2>
      </div>
      <div className="place-details">
        <div className="student">
          <h3>{name}</h3>
          <p>{course}</p>
        </div>
        <h2 className="qpi">{qpi.toFixed(2)}</h2>
        <img src={image} alt={`${name}'s avatar`} className="avatar" />
      </div>
    </div>
  );
}

export default Place;
