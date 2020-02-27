import _ from "lodash";
import { GET_PLAYER, GET_PLAYERS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_PLAYER:
      return action.payload.data;
    case GET_PLAYERS:
      return { ...state, ..._.mapKeys(action.payload.data, "id") };
    default:
      return state;
  }
};
