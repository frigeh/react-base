import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'STORE/actions.js';
import Appointment from 'COMP/Appointment.jsx';
import NewAppointmentDialog from 'COMP/NewAppointmentDialog.jsx';
import { new_appointment_dialog } from 'STORE/actions.js';
import './Overview.less';

export class Overview extends React.Component {
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
                    <button id="new-appointment" onClick={this.props.new_appointment_dialog.bind(this)}>Neuen Termin anlegen</button>
                    <div className="row overview-table-headline">
                        <div className="col-sm-2">Datum</div>
                        <div className="col-sm-1">Zeit</div>
                        <div className="col-sm-2">Raum</div>
                        <div className="col-sm-4">Bemerkung</div>
                        <div className="col-sm-3">eingetragen von</div>
                    </div>
                    <hr />
                    { Object.values(this.props.appointments).map(appointment => <Appointment id={appointment.id} key={appointment.id}/>) }
                <button type="submit" onClick={this.submit.bind(this)}>Abmelden</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    appointments: state.appointments
});

export default connect(mapStateToProps, { logout, new_appointment_dialog })(Overview);