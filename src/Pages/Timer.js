import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GreenImage from "../Components/GreenImage";
import TimerDisplay from "../Components/TimerDisplay";
import SlideToExit from "../Components/SlideToExit";
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

  const handleSlideComplete = () => {
    navigate("/failed");
  };

  return (
    <div className="Screen">
      <GreenImage variant={2} />
      <div className="Container">
        <TimerDisplay formattedTime={formattedTime} />
        <SlideToExit onSlideComplete={handleSlideComplete} />
      </div>
    </div>
  );
}

export default Timer;
