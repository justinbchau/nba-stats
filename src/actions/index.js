import nba from '../apis/nba';
import { GET_PLAYER, GET_PLAYERS, GET_STATS } from './types';

export const getPlayers = () => async dispatch => {
    const response = await nba.get(`/players/?page=${Math.floor(Math.random() * 100)}`);

    dispatch({ type: GET_PLAYERS, payload: response.data });
};

export const getPlayer = firstName => async dispatch => {
    const response = await nba.get(`/players/?search=${firstName}`);
    console.log(response);

    dispatch({ type: GET_PLAYER, payload: response.data });
};

export const getStats = playerId => async dispatch => {
    const response = await nba.get(`/stats/?player_ids[]=${playerId}`);

    dispatch({ type: GET_STATS, payload: response.data });
};