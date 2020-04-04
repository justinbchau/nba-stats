import {
  GET_PLAYERS,
  GET_PLAYER,
  FILTER_PLAYERS,
  CHANGE_PAGE
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_PLAYERS:
      return action.payload;
    case GET_PLAYER:
      return action.payload;
    case FILTER_PLAYERS:
      return { ...state, ...action.payload };
    case CHANGE_PAGE:
      return action.payload;
    default:
      return state;
  }
};
