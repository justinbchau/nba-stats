import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import statsReducer from './statsReducer';

export default combineReducers({
    players: playerReducer,
    stats: statsReducer
});