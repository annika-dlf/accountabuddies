import React from "react";
import GreenImage from "../Components/GreenImage";
import ResultCard from "../Components/ResultCard";
import ActionPrompt from "../Components/ActionPrompt";

function Failed() {
  const handleRetry = () => {
    // TODO: Add retry logic
    console.log("Retry clicked");
  };

  return (
    <div className="Screen">
      <GreenImage variant={4} />
      <div className="Container">
        {/* Need to fix this since it's the wrong size*/}
        <ResultCard
          title="Failed."
          message='PooBear <span class="Negative">lost 0.10 QPI points</span> since you failed to commit your remaining of 10 minutes.'
          qpiInfo="PooBear's New QPI: 2.40"
          // Need to fix this depending on how much time they failed to commit
        />
        <ActionPrompt
          promptText="Want to give PooBear another chance?"
          buttonText="Let's do it!"
          onButtonClick={handleRetry}
        />
      </div>
    </div>
  );
}

export default Failed;
