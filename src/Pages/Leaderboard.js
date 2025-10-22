import "./Leaderboard.css";
import Place from "../Components/Place";

function Leaderboard() {

  return (
    <div className="Desktop">
        <div className="Container">
            <small>Students in the running to be</small>
            <h1 className="Title">The next Valedictorian!</h1>
        </div>

        <div className="Leaderboard">
            <div className="Leaderboard_Label">
                <div className="Rank">

                </div>
                <div className="Place_Details">
                    
                </div>
            </div>
            <div className="Container_Place">
                <Place
                 Leader={true}
                 Rank={1}
                 CharacName="Ruby"
                 Course="BFA ID"
                 QPI={4.0}
               />
                <Place
                 Leader={false}
                 Rank={2}
                 CharacName="Alice"
                 Course="BFA ID"
                 QPI={4.0}
               />
                <Place
                 Leader={false}
                 Rank={3}
                 CharacName="Jane"
                 Course="BFA ID"
                 QPI={4.0}
               />
               <Place
                 Leader={false}
                 Rank={4}
                 CharacName="Apple"
                 Course="BFA ID"
                 QPI={4.0}
               />
            </div>
        </div>
    </div>
  );
}
export default Leaderboard;
