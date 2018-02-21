import { combineReducers } from 'redux';
import app from './reducers/app.js';
import user from './reducers/user.js';

const reducers = combineReducers({ app, user });

export default reducers;