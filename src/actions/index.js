import nba from "../apis/nba";
import { normalize, schema } from "normalizr";
import {
  GET_PLAYER,
  GET_PLAYERS,
  GET_STATS,
  GET_AVG,
  GET_PLAYER_STAT,
  GET_PAGE,
  GET_SEARCH,
  GET_TEAMS,
  GET_TEAM,
  FILTER_PLAYERS,
  CHANGE_PAGE
} from "./types";
// import history from "../history";

export const getPlayers = () => async dispatch => {
  const response = await nba.get(`/players?per_page=24`);

  dispatch({
    type: GET_PLAYERS,
    payload: {
      players: response.data.data,
      pages: response.data.meta
    }
  });
};

export const getPlayer = playerName => async dispatch => {
  const response = await nba.get(`/players?search=${playerName}&per_page=24`);

  dispatch({
    type: GET_PLAYER,
    payload: {
      players: response.data.data,
      pages: response.data.meta
    }
  });
};

export const changePage = (pageNumber = 1) => async dispatch => {
  const response = await nba.get(`/players?per_page=24&page=${pageNumber}`);

  dispatch({
    type: CHANGE_PAGE,
    payload: {
      players: response.data.data,
      pages: response.data.meta
    }
  });
};

export const getTeams = () => async dispatch => {
  const response = await nba.get(`/teams`);

  dispatch({ type: GET_TEAMS, payload: response.data });
};

export const getTeam = id => async (dispatch, getState) => {
  const response = await nba.get(`/teams/${id}`);

  dispatch({
    type: GET_TEAM,
    payload: {
      id: response.data.id,
      teamName: response.data.full_name
    }
  });
};

export const filterPlayersByTeam = () => async (dispatch, getState) => {
  const playerList = getState();

  console.log(playerList);
  // const selectedTeam = getTeam(teamId);

  const { id } = getState().teams;

  const filteredPlayers = playerList.filter(player => {
    return player.team.id === id;
  });

  dispatch({ type: FILTER_PLAYERS, payload: filteredPlayers });
};

export const getStats = () => async dispatch => {
  const response = await nba.get(`/stats?seasons[]=2019`);

  const playerSchema = new schema.Entity("player");
  const playersArray = new schema.Array({
    players: playerSchema
  });

  const normalizedData = normalize(response.data.data, playersArray);

  dispatch({ type: GET_STATS, payload: normalizedData });
};

//Possibly use a non-async action creator to be called within this action
//so that it can update the state with a molded object
export const getSearchedStats = playerId => async (dispatch, getState) => {
  const response = await nba.get(
    `/stats?seasons[]=2019&player_ids[]=${playerId}`
  );

  dispatch({ type: GET_SEARCH, payload: response.data });
};

export const getPlayerStat = playerId => async dispatch => {
  const response = await nba.get(`/stats?player_ids[]=${playerId}`);

  dispatch({ type: GET_PLAYER_STAT, payload: response.data });
};

export const getAverage = playerId => async dispatch => {
  const response = await nba.get(
    `/season_averages?season=2019&player_ids[]=${playerId}`
  );

  dispatch({ type: GET_AVG, payload: response.data });
};

export const getPage = page => async dispatch => {
  const response = await nba.get(`/stats?page=${page}`);

  dispatch({ type: GET_PAGE, payload: response.data });
};
