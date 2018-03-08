import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers.js';
import { logMiddleware } from './middleware/logger.js';

const defaultStore = window.defaultStore ? window.defaultStore : {
	appointments: {
		0: {
			id: 0,
			date: 346347547345345,
			description: 'Treffen',
			room: 1,
			user: 0,
		},
		1: {
			id: 1,
			date: 346347547356546,
			description: 'Sitzung',
			room: 0,
			user: 1,
		},
	},
	app: {
		login: true,
		dialog: '',
		errors: {}
	},
	rooms: {
		0: {
			id: 0,
			name: "Küche",
		},
		1: {
			id: 1,
			name: "Büro",
		}
	},
	users: {
		0: {
			id: 0,
			name: "Friedrich",
		},
		1: {
			id: 1,
			name: "Markus",
		}
	},
	user: {
		admin: true,
		id: 0,
	},
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

