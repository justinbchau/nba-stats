import nba from "../apis/nba";
import {
  GET_PLAYER,
  GET_PLAYERS,
  GET_STATS,
  GET_AVG,
  GET_PLAYER_STAT,
  GET_PAGE,
  GET_SEARCH
} from "./types";
// import history from "../history";

export const getPlayers = () => async dispatch => {
  const response = await nba.get(`/players`);

  dispatch({ type: GET_PLAYERS, payload: response.data });
};

export const getPlayer = playerName => async dispatch => {
  const response = await nba.get(`/players?search=${playerName}`);
  console.log(response.data.data);

  dispatch({ type: GET_PLAYER, payload: response.data });
};

export const getStats = () => async dispatch => {
  const response = await nba.get(`/stats?seasons[]=2019&per_page=24`);

  dispatch({ type: GET_STATS, payload: response.data });
};

//Possibly use a non-async action creator to be called within this action
//so that it can update the state with a molded object
export const getSearchedStats = playerId => async dispatch => {
  let multiCall = [];

  const response = await nba.get(`/stats?seasons[]=2019${playerId}&per_page=1`);

  response.data.data.forEach(i => {
    return multiCall.push(i);
  });

  console.log(multiCall);

  // const id = await response.data.data.map(i => i);
  // let playerFilter = response.data.data.filter(
  //   (v, i, a) => a.findIndex(t => t.player.id === v.player.id) === i
  // );

  dispatch({ type: GET_SEARCH, payload: multiCall });
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
