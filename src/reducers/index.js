import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import statsReducer from "./statsReducer";
import avgReducer from "./avgReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  players: playerReducer,
  stats: statsReducer,
  average: avgReducer,
  search: searchReducer
});
