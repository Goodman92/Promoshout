import React, { Component } from "react";
import {connect} from 'react-redux';
import NfTicketTableRow from './nf-ticket-table-row';
import {fetchTickets, deleteTicket} from '../../../actions/tickets';


import "./nf-ticket-table.css";

class NfTicketTable extends Component {

  componentDidMount() {
    this.props.dispatch(fetchTickets());
  }

  deleteTicketRow= (id) => {
    console.log("poista tiketti id numerolla: " + id);
    this.props.dispatch(deleteTicket(id));
  };
  
  render() {
    return (
      <div className="container-fluid mt-2">
        <div className="table-responsive ticket-table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th className="th-header-width">Date</th>
                <th>Message</th>
                <th />
              </tr>
            </thead>
            <tbody>

                {console.log("tickets state: " + JSON.stringify(this.props.tickets))}

                {this.props.tickets.items.map((item, index) => (
                    <NfTicketTableRow key={item.id} ticket={item} deleteTicket={this.deleteTicketRow} />
                ))}

            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(NfTicketTable);
