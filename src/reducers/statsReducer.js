// import _ from 'lodash';
import { GET_STATS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_STATS:
      return action.payload.data;
    default:
      return state;
  }
};
