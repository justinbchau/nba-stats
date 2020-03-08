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

export const getPlayers = () => async dispatch => {
  const response = await nba.get(
    `/players?page=${Math.floor(Math.random() * 100)}`
  );

  dispatch({ type: GET_PLAYERS, payload: response.data });
};

export const getPlayer = playerName => async dispatch => {
  const response = await nba.get(`/players?search=${playerName}`);

  dispatch({ type: GET_PLAYER, payload: response.data });
};

export const getStats = () => async dispatch => {
  const response = await nba.get(`/stats`);

  dispatch({ type: GET_STATS, payload: response.data });
};

export const getSearchedStats = playerId => async dispatch => {
  const response = await nba.get(
    `/stats?season=2019&player_ids[]=${playerId}&per_page=2`
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
