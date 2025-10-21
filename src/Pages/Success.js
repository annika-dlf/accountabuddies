import React from "react";
import { useLocation } from "react-router-dom";
import Charac from "../Components/Charac";
import ResultCard from "../Components/ResultCard";
import ActionPrompt from "../Components/ActionPrompt";
import Screen from "../Components/Screen";

function Success() {
  const { state } = useLocation();
  const { qpiChange = 0 } = state || {};

  const handleShareTips = () => {
    console.log("Share tips clicked");
  };

  // For example: base QPI = 2.90 (you can make this dynamic later)
  const baseQPI = 2.90;
  const newQPI = (baseQPI + qpiChange).toFixed(2);

  return (
    <Screen>
      <Charac />
      <div className="Container">
        <ResultCard
          title="You did it!"
          message={`PooBear stayed focused and <span class="Positive">gained ${qpiChange.toFixed(
            2
          )} QPI points</span> because of you!`}
          qpiInfo={`PooBear's New QPI: ${newQPI}`}
        />
        <ActionPrompt
          promptText="Want to share some tips for others to help PooBear?"
          buttonText="Let's do it!"
          onButtonClick={handleShareTips}
          showSkip={true}
        />
      </div>
    </Screen>
  );
}

export default Success;