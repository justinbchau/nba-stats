import { GET_PLAYER_STAT } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_PLAYER_STAT:
      let avg = {};
      action.payload.data.forEach(player => {
        // const playerStats = {};
        avg[player.player.id] = player.player;
      });
      return Object.assign({}, state, avg);
    default:
      return state;
  }
};
