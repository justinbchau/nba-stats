import { GET_PLAYER, GET_PLAYERS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_PLAYER:
      console.log("getting player");
      const data = action.payload.data.map(i => i.id);
      return data;
    case GET_PLAYERS:
      return action.payload.data;
    default:
      return state;
  }
};
