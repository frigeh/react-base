import { combineReducers } from 'redux';
import app from './reducers/app.js';
import appointments from './reducers/appointments.js';
import rooms from './reducers/rooms.js';
import user from './reducers/user.js';
import users from './reducers/users.js';

const reducers = combineReducers({ app, appointments, rooms, user, users });

export default reducers;