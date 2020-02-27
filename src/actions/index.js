import nba from "../apis/nba";
import { GET_PLAYER, GET_PLAYERS, GET_STATS, GET_AVG } from "./types";

export const getPlayers = playerId => async dispatch => {
  const response = await nba.get(
    `/players?page=${Math.floor(Math.random() * 100)}`
  );

  dispatch({ type: GET_PLAYERS, payload: response.data });
};

export const getPlayer = playerId => async dispatch => {
  const response = await nba.get(`/players/${playerId}`);

  dispatch({ type: GET_PLAYER, payload: response.data });
};

export const getStats = (playerName = "") => async dispatch => {
  const response = await nba.get(`/stats${playerName}`);

  dispatch({ type: GET_STATS, payload: response.data });
};

export const getAverage = playerId => async dispatch => {
  const response = await nba.get(
    `/season_averages?season=2019&player_ids[]=${playerId}`
  );

  dispatch({ type: GET_AVG, payload: response.data });
};
