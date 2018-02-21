const app = (app = {}, action) => {
    switch (action.type) {
    	case 'LOGOUT':
    		return Object.assign({}, app, {login: false});
    	case 'CHECK_CREDENTIALS':
    		return Object.assign({}, app, {login: true});
        default:
            return app;
    }
}

export default app;