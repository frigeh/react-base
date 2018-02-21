import { combineReducers } from 'redux';
import app from './reducers/app.js';
import appointments from './reducers/appointments.js';

const reducers = combineReducers({ app, appointments });

export default reducers;