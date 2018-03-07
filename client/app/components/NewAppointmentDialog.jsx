import React from 'react';
import { connect } from 'react-redux';
import { formatDate, formatTime } from 'UTIL/date.js';
import Dialog from 'COMP/Dialog.jsx'
import { close_dialog } from 'STORE/actions.js'

export class NewAppointmentDialog extends React.Component {
    constructor(props) {
        super();

        this.state = { };
    }

    cancel() {
      this.props.close_dialog();
    }

    render() {
        const {appointment, rooms, users} = this.props;

        return (
          <Dialog className="NewAppointmentDialog">
            <div className="titlebar">
              <h3>34534</h3>
              <span className="fa fa-times push-right pointer" onClick={this.cancel.bind(this)} />
            </div>
            <div className="body">
              <p>jhgfkjgkhgfj</p>
            </div>
            <div className="foot">
              <button type="button" className="cancel" onClick={this.cancel.bind(this)}>
                close
              </button>
            </div>
          </Dialog>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    appointment: state.appointments[ownProps.id],
    rooms: state.rooms,
    users: state.users,
    app: state.app,
});

export default connect(mapStateToProps, { close_dialog })(NewAppointmentDialog);
