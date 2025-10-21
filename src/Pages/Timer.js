import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Charac from "../Components/Charac";
import TimerDisplay from "../Components/TimerDisplay";
import SlideToExit from "../Components/SlideToExit";
import "../App.css";
import Screen from "../Components/Screen";
import { calculateQPIChange } from "../Utils/calculateQPIChange";

function Timer() {
  const location = useLocation();
  const navigate = useNavigate();

  const { activeTime } = location.state || { activeTime: 0 };
  const [secondsLeft, setSecondsLeft] = useState(activeTime * 60);

  // Countdown logic
  useEffect(() => {
    if (secondsLeft <= 0) {
      // When timer finishes, go to success screen
      const minutesLeft = 0;
      const qpiChange = calculateQPIChange(activeTime, minutesLeft);

      navigate("/success", {
        state: { selectedMinutes: activeTime, minutesLeft, qpiChange },
      });
      return;
    }

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft, activeTime, navigate]);

  // Format mm:ss
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

 const handleSlideComplete = () => {
  const totalSeconds = activeTime * 60;
  const remainingSeconds = secondsLeft;
  const qpiChange = calculateQPIChange(totalSeconds, remainingSeconds);

  if (qpiChange > 0) {
    navigate("/success", { state: { qpiChange, selectedMinutes: activeTime } });
  } else {
    navigate("/failed", { state: { qpiChange, selectedMinutes: activeTime } });
  }
};

  return (
    <Screen>
      <Charac />
      <div className="Container">
        <TimerDisplay formattedTime={formattedTime} />
        <SlideToExit onSlideComplete={handleSlideComplete} />
      </div>
    </Screen>
  );
}

export default Timer;

