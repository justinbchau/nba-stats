import { GET_PLAYERS, GET_PLAYER } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_PLAYERS:
      return action.payload.data;
    case GET_PLAYER:
      return action.payload.data.map(i => i);
    default:
      return state;
  }
};
