import React from 'react';
import { connect } from 'react-redux';
import { formatDate, formatTime } from 'UTIL/date.js';

export class Appointment extends React.Component {
    constructor(props) {
        super();

        this.state = { };
    }

    render() {
        const {appointment, rooms, users} = this.props;

        return (
            <div className="row appointment-row">
                <div className="col-sm-2">{formatDate(appointment.date)}</div>
                <div className="col-sm-1">{formatTime(appointment.date)}</div>
                <div className="col-sm-2">{rooms[appointment.room].name}</div>
                <div className="col-sm-4">{appointment.description}</div>
                <div className="col-sm-3">{users[appointment.room].name}</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    appointment: state.appointments[ownProps.id],
    rooms: state.rooms,
    users: state.users,
});

export default connect(mapStateToProps, { })(Appointment);
