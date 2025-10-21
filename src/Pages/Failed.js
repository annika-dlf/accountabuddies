import React from "react";
import { useLocation } from "react-router-dom";
import Charac from "../Components/Charac";
import ResultCard from "../Components/ResultCard";
import ActionPrompt from "../Components/ActionPrompt";
import Screen from "../Components/Screen";

function Failed() {
  const { state } = useLocation();
  const { qpiChange = 0, minutesLeft = 0 } = state || {};

  const handleRetry = () => {
    console.log("Retry clicked");
  };

  const baseQPI = 2.90;
  const newQPI = (baseQPI + qpiChange).toFixed(2); // qpiChange will be negative

  return (
    <Screen>
      <Charac />
      <div className="Container">
        <ResultCard
          title="Failed."
          message={`PooBear <span class="Negative">lost ${Math.abs(
            qpiChange
          ).toFixed(2)} QPI points</span> since you failed to commit your remaining ${minutesLeft} minutes.`}
          qpiInfo={`PooBear's New QPI: ${newQPI}`}
        />
        <ActionPrompt
          promptText="Want to give PooBear another chance?"
          buttonText="Let's do it!"
          onButtonClick={handleRetry}
        />
      </div>
    </Screen>
  );
}

export default Failed;
