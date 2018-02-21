import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'STORE/actions.js';

export class Logout extends React.Component {
    constructor(props) {
        super();

        this.state = { };
    }

    submit() {
        this.props.logout();
    }


    render() {
        return (
            <div>
                <h2>Hallo</h2>
                <button type="submit" onClick={this.submit.bind(this)}>Abmelden</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps, { logout })(Logout);