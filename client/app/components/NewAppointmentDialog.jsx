import React from 'react';
import { connect } from 'react-redux';
import { formatDate, formatTime } from 'UTIL/date.js';

export class NewAppointmentDialog extends React.Component {
    constructor(props) {
        super();

        this.state = { };
    }

    componentDidMount() {
        var newAppointment = document.getElementById("new-appointment"),
            dialog = document.getElementById('new-appointment-dialog'),
            close = document.getElementById("new-appointment-close");

        newAppointment.addEventListener('click',showDialog);
        close.addEventListener('click',closeDialog);

        function showDialog() {
          dialog.showModal();
        }

        function closeDialog(){
          dialog.close();
        }
    }

    render() {
        const {appointment, rooms, users} = this.props;

        return (
            <dialog id="new-appointment-dialog">
                <h2>Neuer Termin</h2>
                <p> Dies ist eine zugängliche Dialog-Box, die Sie auch mit der Tastatur benutzen können.</p>
                <button id="new-appointment-close">Schließen</button>
            </dialog>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    appointment: state.appointments[ownProps.id],
    rooms: state.rooms,
    users: state.users,
});

export default connect(mapStateToProps, { })(NewAppointmentDialog);
