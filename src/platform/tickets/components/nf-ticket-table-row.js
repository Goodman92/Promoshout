import React, { Component } from "react";
import NfTicketTableRowChat from './nf-ticket-table-row-chat';
import moment from "moment";
import uuidv4 from "uuid/v4";
import {connect} from 'react-redux';
import { addTicketMessage, deleteTicket } from '../../../actions/tickets';

import "./nf-ticket-table-row.css";

class NfTicketTableRow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hideFirstComment: true,
      message: ''
    };
  }

  showChat = () => {
    this.setState({hideFirstComment: !this.state.hideFirstComment});
  };

  deleteTicketRow = () => {
    this.props.dispatch(deleteTicket(this.props.ticket.id));
  }

  handleChange = (e) => {
    this.setState({message: e.target.value});
  }

  handleSubmit = (e) => {

    this.props.dispatch(addTicketMessage({
        parentID: this.props.ticket.id, // this points to the parent object so we know where to put below message
        message: this.state.message, id: uuidv4(), senderId: uuidv4(), date: moment().format("MMM Do YY"), fromSupport: false
    }));
    this.setState({message: ''});
    e.preventDefault();
  }
  
  render() {

    const ticket = this.props.ticket;

    return (
      <tr
        onClick={this.state.hideFirstComment ? this.showChat : null}
        data-toggle={this.state.hideFirstComment ? "collapse" : ''}
        data-target={"#table-row-collapse" + ticket.id}   
      >
      
        <td className="ticket-table-row-date">{ticket.date}</td>
        <td>

          { this.state.hideFirstComment ? <span>{ticket.firstMessage}</span> : null }

          <div className="collapse" id={"table-row-collapse" + ticket.id}>

            {ticket.messages.map((item, index) => (    
                <NfTicketTableRowChat
                  key={item.id}
                  message={item.message} 
                  date={item.date} 
                  fromSupport={item.fromSupport}
               />
            ))}
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="3"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </div>
              <input type="submit" className="btn platform-btn" value="Send" />
              <button 
                className="btn ticket-delete-button"
                onClick={() => this.deleteTicketRow()}
              > 
                Delete Ticket
              </button>
            </form>
            
          </div>
        </td>

        <td   
          onClick={this.state.hideFirstComment ? null : this.showChat}
          data-toggle={this.state.hideFirstComment ? '' : "collapse"}
          data-target={"#table-row-collapse" + ticket.id}   
        >
          <i className={this.state.hideFirstComment ? 'fa fa-angle-down fa-2x' : 'fa fa-angle-down fa-2x fa-rotate-180'}>
          </i>
        </td>
      </tr>
          
    );
  }
}


const mapStateToProps = (state) => state.tickets;
export default connect(mapStateToProps)(NfTicketTableRow);