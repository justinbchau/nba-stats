import React from "react";
import { Link, Redirect } from "react-router-dom";
import '../styles/playerCard.css'

const PlayerList = ({ players, showStats }) => {
  if (!players) {
    return <Redirect to="/" />;
  } else {
    return (
      players &&
      players.map(player => {
        return (
            <div key={player.id} className="playerCard">
                <h2 className="header">
                  {player.first_name} {player.last_name}
                  {player.position ? ' | ' + player.position : ''}
                  {/* Not Showing | if there is no position available */}
                </h2>
                <hr/>
                <div className="description">
                  Team: {player.team.full_name} | {player.team.abbreviation}
                </div>
                <Link to={`/player/stat/${player.id}`}>
                <button class="stat">
                  Stat
                </button>
                </Link>
            </div>
        );
      })
    );
  }
};

export default PlayerList;
