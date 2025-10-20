import React from "react";

function Failed() {
  return (
    <div className="Screen">
      <div className="Green4"></div>
      <div className="Container">
        <div className="MainWrapper">
          {/* Need to fix this since it's the wrong size*/}
          <div className="MainWrapper--Text">
            <h2>Failed.</h2>
            <p>PooBear <span className="Negative">lost 0.10 QPI points</span> since you failed to commit your remaining of 10 minutes.</p>
          </div>
          <small className="Description">
            PooBear’s New QPI: 2.40
            {/* Need to fix this depending on how much time they failed to commit */}
          </small>
        </div>
        <div className="ActionWrapper">
          <div className="MainWrapper--noheight">
            <p>Want to give PooBear another chance?</p>
          </div>
          <div className="Button">
            <h2>Let’s do it!</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Failed;
