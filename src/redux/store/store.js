import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { requestRobots } from '../reducer/request-robots';
import { searchRobots } from '../reducer/search-robots';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));