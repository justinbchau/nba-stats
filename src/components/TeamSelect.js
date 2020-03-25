import React, { useState } from "react";
import { connect } from "react-redux";

const TeamSelect = ({ teams, setSelectedTeam }) => {
  const [pickedTeam, setPickedTeam] = useState(null);

  const renderTeams = () => {
    if (!teams) {
      return <p>...Loading</p>;
    } else {
      return teams.map(team => {
        return (
          <option key={team.id} value={team.id}>
            {team.full_name}
          </option>
        );
      });
    }
  };

  return (
    <select
      onChange={setSelectedTeam}
      id="teamId"
      className="ui search dropdown"
    >
      <option value="">Sort by Team</option>
      {renderTeams()}
    </select>
  );
};

const mapStateToProps = state => {
  return {
    teams: state.teams
  };
};

export default connect(mapStateToProps)(TeamSelect);
