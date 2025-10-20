import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

function Timer() {
  const location = useLocation();
  const navigate = useNavigate();

  const { activeTime } = location.state || { activeTime: 0 };
  const [secondsLeft, setSecondsLeft] = useState(activeTime * 60);

  // Countdown logic
  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  // Format mm:ss
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  // Swipe logic
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleStart = (e) => {
    setDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleMove = (e) => {
    if (!dragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    const slider = sliderRef.current;
    const container = containerRef.current;
    if (!slider || !container) return;

    const deltaX = startX - clientX; // swipe right-to-left = positive
    const maxSlide = container.offsetWidth - 70;

    // Restrict between 0 and maxSlide
    const newX = Math.min(Math.max(deltaX, 0), maxSlide);
    slider.style.transform = `translateX(-${newX}px)`;

    // Navigate when mostly swiped
    if (newX > container.offsetWidth * 0.8) {
      navigate("/failed");
    }
  };

  const handleEnd = () => {
    setDragging(false);
    const slider = sliderRef.current;
    if (slider) slider.style.transform = "translateX(0px)";
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchend", handleEnd);
    return () => {
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchend", handleEnd);
    };
  }, []);

  return (
    <div className="Screen">
      <div className="Green2"></div>
      <div className="Container">
        <div className="MainWrapper">
          <div className="MainWrapper--Text">
            <small>TIME LEFT</small>
            <h1>{formattedTime}</h1>
            <p>
              I’m learning so much!
              <br />
              Please don’t leave yet...
            </p>
          </div>
          <small className="Description">
            If you leave now, the time you fail to commit will be{" "}
            <span className="Negative">deducted</span> from Cat’s QPI (10 mins =
            0.10 deducted).
          </small>
        </div>

        <div className="ActionWrapper">
          <div className="SlideToExit" ref={containerRef}>
            <h3>Slide to exit</h3>
            <div
              className="ArrowBox"
              ref={sliderRef}
              onMouseDown={handleStart}
              onTouchStart={handleStart}
              onMouseMove={handleMove}
              onTouchMove={handleMove}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
              >
                <path
                  d="M10 24.5L22 12.5M10 24.5L22 36.5M10 24.5H38"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
