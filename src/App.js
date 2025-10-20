import './App.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  // State to store the selected time (e.g., 20, 40, or 60)
  const [activeTime, setActiveTime] = useState(null);
  const navigate = useNavigate();

  const times = [20, 40, 60];
  return (
    <div className="Screen">
      <div className="Green1"></div>
      <div className="Container">
        <div className="MainWrapper">
          <div className="MainWrapper--Text">
            <h2>Let’s study together!</h2>
            <p>How long can I keep <br></br>your phone?</p>
          </div>
            <div className="TimerWrapper">
            {times.map((time) => (
              <div
                key={time}
                className={`TimerBox ${activeTime === time ? "active" : ""}`}
                onClick={() => setActiveTime(time)}
              >
                <h2>{time}</h2>
                <small>mins</small>
              </div>
            ))}
          </div>
        </div>
        <div className="ActionWrapper">
          <div className="Button"
              onClick={() => {
                if (activeTime) navigate("/timer", { state: { activeTime } });
                else alert("Please select a time first!");
              }}
            >
            <h2>Let's go!</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;