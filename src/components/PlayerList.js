import React from "react";
import { Link, Redirect } from "react-router-dom";
import Loader from "./Loader";

const PlayerList = ({ players, showStats }) => {
  if (!players) {
    return <Redirect to="/" />;
  } else {
    return (
      players &&
      players.map(player => {
        return (
          <div key={player.id}>
            <div className="ui link raised card">
              <div className="content">
                <div className="header">
                  {player.first_name} {player.last_name} | {player.position}
                </div>
                <div className="ui inverted divider"></div>
                <div className="description">
                  Team: {player.team.full_name} | {player.team.abbreviation}
                </div>
              </div>
              <Link to={`/player/stat/${player.id}`}>
                <div
                  className="ui bottom attached button"
                  onClick={() => showStats(player.id)}
                >
                  Stats
                </div>
              </Link>
            </div>
          </div>
        );
      })
    );
  }
};

export default PlayerList;
