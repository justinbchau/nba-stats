import React from "react";

import { Link } from "react-router-dom";
const PlayerList = ({ stats, showStats }) => {
  return (
    stats &&
    stats.map(stat => {
      return (
        <div key={stat.player.id}>
          <div className="ui link raised card">
            <div className="content">
              <div className="header">
                {stat.player.first_name} {stat.player.last_name} |{" "}
                {stat.player.position}
              </div>
              <div className="ui inverted divider"></div>
              <div className="description">
                Team: {stat.team.full_name} | {stat.team.abbreviation}
              </div>
            </div>
            <Link to={`/player/stat/${stat.player.id}`}>
              <div
                className="ui bottom attached button"
                onClick={() => showStats(stat.player.id)}
              >
                Stats
              </div>
            </Link>
          </div>
        </div>
      );
    })
  );
};

export default PlayerList;
