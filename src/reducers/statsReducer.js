// import _ from 'lodash';
import { GET_STATS, GET_SEARCH } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_STATS:
      return action.payload;
    case GET_SEARCH:
      return state && action.payload;
    default:
      return state;
  }
};
