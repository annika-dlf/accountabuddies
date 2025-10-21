import React from "react";
import GreenImage from "../Components/GreenImage";
import ResultCard from "../Components/ResultCard";
import ActionPrompt from "../Components/ActionPrompt";

function Success() {
  const handleShareTips = () => {
    // TODO: Add share tips logic
    console.log("Share tips clicked");
  };

  return (
    <div className="Screen">
      <GreenImage variant={3} />
      <div className="Container">
        {/* Need to fix this since it's the wrong size*/}
        <ResultCard
          title="You did it!"
          message='PooBear stayed focused and <span class="Positive">gained 0.60 QPI points</span> because of you!'
          qpiInfo="PooBear's New QPI: 3.50"
          // Need to fix this to adjust the QPI depending on the time accomplished
        />
        <ActionPrompt
          promptText="Want to share some tips for others to help PooBear?"
          buttonText="Let's do it!"
          onButtonClick={handleShareTips}
          showSkip={true}
        />
      </div>
    </div>
  );
}

export default Success;
