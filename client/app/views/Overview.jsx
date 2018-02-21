import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'STORE/actions.js';
import Appointment from 'COMP/Appointment.jsx';

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
                <h2>Termine</h2>
                    { Object.values(this.props.appointments).map(appointment => <Appointment id={appointment.id} key={appointment.id}/>) }
                <button type="submit" onClick={this.submit.bind(this)}>Abmelden</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    appointments: state.appointments
});

export default connect(mapStateToProps, { logout })(Logout);