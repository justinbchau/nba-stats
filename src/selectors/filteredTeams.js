import { createSelector } from "reselect";
import _ from "lodash";

const filteredTeams = state => state.teams;
const selectedTeamSelector = state => state.selectedTeam;

const getTeams = (teams, selectedTeamId) => {
  const selectedTeam = _.filter(teams, team =>
    _.includes(selectedTeamId, team.id)
  );

  return selectedTeam;
};

export default createSelector(filteredTeams, selectedTeamSelector, getTeams);
