import { GET_PLAYER, GET_PLAYERS } from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_PLAYER:
      return action.payload.data.map(i => i.id);
    case GET_PLAYERS:
      return action.payload.data;
    default:
      return state;
  }
};
