// import _ from 'lodash';
import { GET_AVG } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case GET_AVG:
      return action.payload.data;
    default:
      return state;
  }
};
