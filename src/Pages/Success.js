import React from "react";

function Success() {
  return (
    <div className="Screen">
      <div className="Green3"></div>
      <div className="Container">
        <div className="MainWrapper">
          {/* Need to fix this since it's the wrong size*/}
          <div className="MainWrapper--Text">
            <h2>You did it!</h2>
            <p>PooBear stayed focused and <span className="Positive">gained 0.60 QPI points</span> because of you!</p>
          </div>
          <small className="Description">
            PooBear’s New QPI: 3.50
            {/* Need to fix this to adjust the QPI depending on the time accomplished */}
          </small>
        </div>
        <div className="ActionWrapper">
          <div className="MainWrapper--noheight">
            <p>Want to share some tips for others to help PooBear?</p>
          </div>
          <div className="Button">
            <h2>Let’s do it!</h2>
          </div>
        </div>
        <p className="Skip">Skip this step</p>
      </div>
    </div>
  );
}

export default Success;
