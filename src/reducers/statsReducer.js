import { GET_STATS, GET_SEARCH } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_STATS:
      return action.payload.data;
    case GET_SEARCH:
      return action.payload.data;
    default:
      return state;
  }
};
