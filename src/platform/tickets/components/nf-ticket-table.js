import React, { Component } from "react";
import {connect} from 'react-redux';
import {fetchTickets, deleteTicket, requestMore, requestPrevious, showMore, showLess } from '../../../actions/tickets';
import NfTicketTableRow from './nf-ticket-table-row';
import {NfSimplePagination} from '../../../components/utility/nf-utility';

import "./nf-ticket-table.css";


class NfTicketTable extends Component {

  componentDidMount() {
    this.props.dispatch(fetchTickets());
  }

  render() {

    const tickets = this.props.items.slice().splice(this.props.page * this.props.size, this.props.size);

    return (
      <div className="container-fluid mt-2">
        <div className="table-responsive ticket-table-wrapper">
          <table className="table">
            <thead>
              <tr>
               <th className="ticket-table-date ticket-th-header-width">Date</th>
                <th>Message</th>
                <th className="ticket-th-buttons">

                {this.props.page === 0 ? 
                  null
                  :
                  <button onClick={() => this.props.dispatch(requestPrevious())} className="ticket-table-button"><i className="fa fa-arrow-left"></i></button>
                }

                <button 
                  onClick={() => this.props.dispatch(requestMore())} 
                  className={ this.props.page === this.props.lastPage ? "opacity0 ticket-table-button" : "ticket-table-button" }
                ><i className="fa fa-arrow-right"></i></button> 
                
                </th>
              </tr>
            </thead>
            <tbody>

                {this.props.items.length == 0 ? 
                  <tr><td className="ticket-table-empty" colSpan="3"><p>You dont have any open tickets</p></td></tr> 
                  : null}                  

                {tickets.map((item, index) => (
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
