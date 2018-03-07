const app = (app = {}, action) => {
    switch (action.type) {
    	case 'LOGOUT':
    		return Object.assign({}, app, {login: false});
    	case 'CHECK_CREDENTIALS':
    		return Object.assign({}, app, {login: true});
    	case 'DIALOG':
    	  return { ...app, dialog: { type: action.content, option: action.option } };
    	case 'NEW_APPOINTMENT':
	    	if (action.status === 'complete') {
	    	  return { ...app, dialog: { type: '' } }
	    	}
	    	return app
        default:
            return app;
    }
}

export default app;