import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Charac from "../Components/Charac";
import ResultCard from "../Components/ResultCard";
import ActionPrompt from "../Components/ActionPrompt";
import Screen from "../Components/Screen";
import supabase from "../supabase-client";

function Failed() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { qpiChange = 0, minutesLeft = 0 } = state || {};
  const [currentQPI, setCurrentQPI] = useState(4.0);

  // Update Bilbo's QPI in the database
  useEffect(() => {
    const updateBilboQPI = async () => {
      try {
        // Fetch Bilbo's current QPI
        const { data, error } = await supabase
          .from("users")
          .select("qpi")
          .eq("name", "Bilbo")
          .single();

        if (error) {
          console.error("Error fetching QPI:", error);
          return;
        }

        const oldQPI = data.qpi;
        const newQPI = Math.max(oldQPI + qpiChange, 0); // Don't go below 0
        setCurrentQPI(newQPI);

        // Update Bilbo's QPI in the database
        const { error: updateError } = await supabase
          .from("users")
          .update({ qpi: newQPI })
          .eq("name", "Bilbo");

        if (updateError) {
          console.error("Error updating QPI:", updateError);
        } else {
          console.log(`Bilbo's QPI updated from ${oldQPI} to ${newQPI}`);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };

    updateBilboQPI();
  }, [qpiChange]);

  const handleRetry = async () => {
    try {
      // Restore the lost QPI points before retrying
      const { data, error } = await supabase
        .from("users")
        .select("qpi")
        .eq("name", "Bilbo")
        .single();

      if (!error && data) {
        // Add back the lost points (qpiChange is negative, so subtract it)
        const restoredQPI = Math.min(data.qpi - qpiChange, 4.0); // Cap at 4.0

        const { error: updateError } = await supabase
          .from("users")
          .update({ qpi: restoredQPI })
          .eq("name", "Bilbo");

        if (!updateError) {
          console.log(
            `Bilbo's QPI restored from ${data.qpi} to ${restoredQPI}`
          );
        }
      }
    } catch (err) {
      console.error("Error restoring QPI:", err);
    }

    // Retrieve saved time from localStorage
    const remainingTime = localStorage.getItem("remainingTime");
    const activeTime = localStorage.getItem("activeTime");

    if (remainingTime && activeTime) {
      navigate("/timer", {
        state: {
          activeTime: Number(activeTime),
          resumeTime: Number(remainingTime), // resume from where they left off
        },
      });
    } else {
      // fallback (no saved state)
      navigate("/timer", { state: { activeTime: 20 } }); // default 20 min
    }
  };

  return (
    <Screen>
      <Charac />
      <div className="Container">
        <ResultCard
          title={qpiChange === 0 ? "Failed." : "Failed."}
          message={
            qpiChange === 0
              ? `Bilbo <span class="Neutral">didn't get any QPI points</span> because you didn't even get through half of what you committed!`
              : `Bilbo <span class="Negative">lost ${Math.abs(
                  qpiChange
                ).toFixed(
                  2
                )} QPI points</span> since you failed to commit your remaining ${minutesLeft} minutes.`
          }
          qpiInfo={`Bilbo's New QPI: ${currentQPI.toFixed(2)}`}
        />
        <ActionPrompt
          promptText="Want to give Bilbo another chance?"
          buttonText="Let's do it!"
          onButtonClick={handleRetry}
        />
      </div>
    </Screen>
  );
}

export default Failed;
