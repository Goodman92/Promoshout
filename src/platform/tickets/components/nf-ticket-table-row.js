import React, { Component } from "react";
import NfTicketTableRowChat from './nf-ticket-table-row-chat';

import "./nf-ticket-table-row.css";

export default class NfTicketTableRow extends Component {

  constructor(props) {
    super(props);
    this.state = {hideFirstComment: true};
  }

  showChat = () => {
    this.setState(prevState => ({
      hideFirstComment: !prevState.hideFirstComment
    }));
  };
  
  render() {

    const ticket = this.props.ticket;

    return (
      
      <tr>
        <td>{ticket.date}</td>
        <td>

          { this.state.hideFirstComment ? <span>{ticket.firstMessage}</span> : null }

          <div className="collapse" id={"table-row-collapse" + ticket.id}>

            <NfTicketTableRowChat
                key={ticket.id}
                message={ticket.firstMessage} 
                date={ticket.date} 
                fromSupport={ticket.fromSupport}
             />

            {ticket.messages.map((item, index) => (    
                <NfTicketTableRowChat
                  key={item.id}
                  message={item.message} 
                  date={item.date} 
                  fromSupport={item.fromSupport}
               />
            ))}

              <div className="form-group">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                />
              </div>
              <button className="btn platform-btn"> Send </button>
              <button 
                className="btn ticket-delete-button"
                onClick={() => this.props.deleteTicket(ticket.id)}> 
                Delete Ticket 
              </button>
          </div>
        </td>

        <td>
          <i className={this.state.hideFirstComment ? 'fa fa-angle-down fa-2x' : 'fa fa-angle-down fa-2x fa-rotate-180'} 
            onClick={this.showChat}
            aria-hidden="true"
            data-toggle="collapse"
            data-target={"#table-row-collapse" + ticket.id}>
          </i>
        </td>
      </tr>
          
    );
  }
}
