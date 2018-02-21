import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers.js';
import { logMiddleware } from './middleware/logger.js';

const defaultStore = window.defaultStore ? window.defaultStore : {
/*	users: {
		0: {
			id: 0,
			name: 'Hinz',
			password: '123456',
		},
		1: {
			id: 1,
			name: 'Kunz',
			password: 'test',
		}
	},*/
	app: {
		login: false,
	},
	user: {
		admin: true,
		id: 0,
	}
};


export function configureStore(initialState = {}) {
    // from: https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(logMiddleware)
        )
    );

  return store;
};


export const store = configureStore(defaultStore);

