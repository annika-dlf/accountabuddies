import "../Pages/Leaderboard.css";
import Place from "../Components/Place";
import { useEffect, useState } from "react";
import supabase from "../supabase-client";

// Gradient mappings based on character name
const getGradientByCharacter = (name) => {
  const gradients = {
    Bilbo: "linear-gradient(90deg, #56630C 0%, #A2B72A 100%)", // Green
    Bruno: "linear-gradient(90deg, #912540 0%, #E985B7 100%)", // Pink
    Betsy: "linear-gradient(90deg, #E07D00 0%, #FFB92C 100%)", // Yellow
    Binky: "linear-gradient(90deg, #253CAE 0%, #56BBC9 100%)", // Blue
  };
  return gradients[name] || "linear-gradient(90deg, #253CAE 0%, #56BBC9 100%)"; // Default blue
};

// Character class mappings based on character name
const getCharacClassByCharacter = (name) => {
  const characClasses = {
    Bilbo: "charac_leaderboard-green",
    Bruno: "charac_leaderboard-pink",
    Betsy: "charac_leaderboard-yellow",
    Binky: "charac_leaderboard-blue",
  };
  return characClasses[name] || "charac_leaderboard-blue"; // Default blue
};

function Leaderboard() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const { data, error } = await supabase.from("users").select("*");
    if (error) {
      console.error("Error fetching students:", error);
    } else {
      console.log(data);
      // Sort by QPI descending and add rank, gradient, and characClass
      const sortedData = data
        .sort((a, b) => b.qpi - a.qpi)
        .map((student, index) => {
          const rank = index + 1;
          return {
            ...student,
            rank,
            leader: rank === 1,
            gradient: getGradientByCharacter(student.name),
            characClass: getCharacClassByCharacter(student.name),
          };
        });
      setStudents(sortedData);
    }
  };

  useEffect(() => {
    fetchStudents();

    // Subscribe to realtime changes
    const channel = supabase
      .channel("users-changes")
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "users" },
        (payload) => {
          console.log("User updated:", payload);
          // Refresh students when any user data is updated
          fetchStudents();
        }
      )
      .subscribe();

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="Desktop">
      <div className="Container-dt">
        <small className="small">Students in the running to be</small>
        <h1 className="Title">The next Valedictorian!</h1>
      </div>

      <div className="Container_Place">
        {students.map((s) => (
          <Place
            key={s.id || s.rank}
            leader={s.leader}
            rank={s.rank}
            name={s.name}
            course={s.course}
            qpi={s.qpi}
            gradient={s.gradient}
            characClass={s.characClass}
          />
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
