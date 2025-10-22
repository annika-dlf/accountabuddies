import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Timer from "./Pages/Timer";
import Failed from "./Pages/Failed";
import Success from "./Pages/Success";
import Leaderboard from "./Pages/Leaderboard"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/failed" element={<Failed />} />
      <Route path="/success" element={<Success />} />
      <Route path="/leaderboard" element={<Leaderboard />} /> {/* add this */}
    </Routes>
  </BrowserRouter>
);
