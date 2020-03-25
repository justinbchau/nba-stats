import { GET_TEAM } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_TEAM:
      return action.payload;
    default:
      return state;
  }
};
