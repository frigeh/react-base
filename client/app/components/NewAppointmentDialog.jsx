import React from 'react';
import { connect } from 'react-redux';
import { setter } from 'UTIL/inputSetter.js';
import Dialog from 'COMP/Dialog.jsx';
import DayTimePicker from 'COMP/DayTimePicker.jsx';
import { close_dialog } from 'STORE/actions.js';

export class NewAppointmentDialog extends React.Component {
    constructor(props) {
        super();

        this.state = { };

        this.set = setter(this);
    }

    cancel() {
      this.props.close_dialog();
    }

    render() {
        const {rooms, user} = this.props;

        return (
          <Dialog className="NewAppointmentDialog">
            <div className="titlebar">
              <h3>Neuer Termin</h3>
              <span className="fa fa-times push-right pointer" onClick={this.cancel.bind(this)} />
            </div>
            <div className="body">
              <div className="row">
                <label htmlFor="appointment-description">Bemerkung</label>
                <input type="text" id="appointment-description" onChange={this.set({field: 'description'})} />
              </div>
              <div className="row">
                <label htmlFor="appointment-room">Raum</label>
                <select id="appointment-room" onChange={this.set({field: 'room'})}>
                    { Object.values(rooms).map(room => <option value={room.id} key={room.id}>{room.name}</option>) }
                </select>
              </div>
              <div className="row">
                <label htmlFor="appointment-date">Datum</label>
                <DayTimePicker onChange={this.set({field: 'date'})} />
              </div>
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
    rooms: state.rooms,
    user: state.user,
});

export default connect(mapStateToProps, { close_dialog })(NewAppointmentDialog);
