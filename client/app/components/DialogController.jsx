import NewAppointmentDialog from 'COMP/NewAppointmentDialog.jsx';
import React from 'react';

export default class DialogController extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    const d = this.props.dialog
    let search, queries, params, message

    if (d.location) {
      search = d.location.search.slice(1)
      queries = search.split('&')
      params = queries.reduce((acc, param) => {
        let keyval = param.split('=')
        acc[decodeURIComponent(keyval[0])] = decodeURIComponent(keyval[1])

        return acc
      }, {})
    }

    switch (d.type) {
      case 'NEW_APPOINTMENT':
        return <NewAppointmentDialog />

      default:
        return null
    }
  }
}