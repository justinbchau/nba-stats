import React from "react";

import { Link } from "react-router-dom";
const PlayerList = ({ stats, showStats }) => {
  if (!stats) {
    return <div>...Loading</div>;
  } else {
    return (
      stats &&
      stats.map(stat => {
        return (
          <div key={stat.id}>
            <div className="ui link raised card">
              <div className="content">
                <div className="header">
                  {stat.first_name} {stat.last_name} | {stat.position}
                </div>
                <div className="ui inverted divider"></div>
                <div className="description">
                  Team: {stat.team.full_name} | {stat.team.abbreviation}
                </div>
              </div>
              <Link to={`/player/stat/${stat.id}`}>
                <div
                  className="ui bottom attached button"
                  onClick={() => showStats(stat.id)}
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
