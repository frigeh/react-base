import React from 'react';
import { connect } from 'react-redux';
import { check_credentials } from 'STORE/actions.js';
import { setter } from 'UTIL/inputSetter.js';

export class Login extends React.Component {
    constructor(props) {
        super();

        this.state = { };

        this.set = setter(this);
    }

    submit() {
        this.props.check_credentials({
            username: this.state.username,
            password: this.state.password,
        });
    }


    render() {
        return (
            <div>
                <h2>Login</h2>
                <label htmlFor="login-username">Benutzername</label>
                <input id="login-username" type="text" onChange={this.set({field: 'username'})}/><br />
                <label htmlFor="login-password">Passwort</label>
                <input id="login-password" type="password" onChange={this.set({field: 'password'})}/>
                <button type="submit" onClick={this.submit.bind(this)}>Anmelden</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps, { check_credentials })(Login);