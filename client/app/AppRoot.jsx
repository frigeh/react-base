import React from 'react';
import { connect } from 'react-redux';
import {
      BrowserRouter as Router,
      Route,
      Redirect,
      Switch
    } from 'react-router-dom';

import 'APP/BaseStyle.less';
import { initServiceWorker } from 'UTIL/serviceWorker.js';
import Login from 'VIEWS/Login.jsx';
import Overview from 'VIEWS/Overview.jsx';
import DialogController from 'COMP/DialogController.jsx';

export class AppRoot extends React.Component {
    constructor(props) {
        super();

        this.state = { }
    }

    render() {
        return (
            <div>
                <h1>Terminplaner</h1>
                <Router>
                    <Switch>
                        { 
                          !this.props.app.login && <Route path="/" exact render={() => <Login />} />
                        }
                        <Route path="/" exact render={() => <Overview />} />
                        <Redirect to="/" />
                    </Switch>
                </Router>
                <DialogController dialog={this.props.app.dialog} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    app: state.app,
});

export default connect(mapStateToProps, {})(AppRoot);
