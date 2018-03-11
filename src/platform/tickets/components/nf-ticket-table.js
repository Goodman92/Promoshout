import React, { Component } from "react";
import {connect} from 'react-redux';
import {fetchTickets, deleteTicket, requestMore} from '../../../actions/tickets';
import NfTicketTableRow from './nf-ticket-table-row';

import "./nf-ticket-table.css";


class NfTicketTable extends Component {

  componentDidMount() {
    this.props.dispatch(fetchTickets());
  }

  getMoreTickets = () => {
    console.log(this.props);

    this.props.dispatch(requestMore());
  };

  render() {
    return (
      <div className="container-fluid mt-2">
        <div className="table-responsive ticket-table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th className="ticket-th-header-width">Date</th>
                <th>Message</th>
                <th className="ticket-th-buttons">
                  <button className="ticket-table-button"><i className="fa fa-arrow-left"></i></button>
                  <button onClick={this.getMoreTickets} className="ticket-table-button"><i className="fa fa-arrow-right"></i></button> 
                </th>
              </tr>
            </thead>
            <tbody>

                {this.props.items.length == 0 ? 
                  <tr><td className="ticket-table-empty" colSpan="3"><p>You dont have any open tickets</p></td></tr> 
                  : null}

                {this.props.items.map((item, index) => (
                    <NfTicketTableRow key={item.id} ticket={item} />
                ))}

            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.tickets;

export default connect(mapStateToProps)(NfTicketTable);
