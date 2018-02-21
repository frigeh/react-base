import React from 'react';
import { connect } from 'react-redux';

export class Appointment extends React.Component {
    constructor(props) {
        super();

        this.state = { };
    }

    render() {
        const {appointment} = this.props;
        var date = new Date(appointment.date);

        return (
            <div>
                {date.toString()}
                -
                {appointment.description}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    appointment: state.appointments[ownProps.id]
});

export default connect(mapStateToProps, { })(Appointment);
