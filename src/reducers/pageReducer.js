import { GET_PAGE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_PAGE:
      return action.payload.meta;
    default:
      return state;
  }
};
