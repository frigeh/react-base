import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers.js';
import { logMiddleware } from './middleware/logger.js';

const defaultStore = window.defaultStore ? window.defaultStore : {
	appointments: {
		0: {
			id: 0,
			date: 346347547345345,
			description: 'Treffen',
		},
		1: {
			id: 1,
			date: 346347547356546,
			description: 'Sitzung',
		},
	},
	app: {
		login: true,
	},
/*	user: {
		admin: true,
		id: 0,
	}*/
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

