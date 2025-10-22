import "../Pages/Leaderboard.css";
import Place from "../Components/Place";

function Leaderboard() {
    const students = [
    {
      leader: true,
      rank: 1,
      name: "Bilbo",
      course: "BFA ID",
      qpi: 4.0,
      gradient: "linear-gradient(90deg, #56630C 0%, #A2B72A 100%)",
      characClass: "charac_leaderboard-green",
    },
    {
      leader: false,
      rank: 2,
      name: "Bruno",
      course: "BFA ID",
      qpi: 3.92,
      gradient: "linear-gradient(90deg, #912540 0%, #E985B7 100%)",
      characClass: "charac_leaderboard-pink",
    },
    {
      leader: false,
      rank: 3,
      name: "Betsy",
      course: "BFA ID",
      qpi: 3.88,
      gradient: "linear-gradient(90deg, #E07D00 0%, #FFB92C 100%)",
      characClass: "charac_leaderboard-yellow",
    },
    {
      leader: false,
      rank: 4,
      name: "Binky",
      course: "BFA ID",
      qpi: 3.75,
      gradient: "linear-gradient(90deg, #253CAE 0%, #56BBC9 100%)",
      characClass: "charac_leaderboard-blue",
    },
  ];

  return (
    <div className="Desktop">
      <div className="Container-dt">
        <small className="small">Students in the running to be</small>
        <h1 className="Title">The next Valedictorian!</h1>
      </div>

      <div className="Container_Place">
          {students.map((s) => (
            <Place
              key={s.rank}
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