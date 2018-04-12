import React, { Component } from "react";
import {connect} from 'react-redux';
import { fetchTickets, addTicket } from '../../../actions/tickets';
import { NfLiftBox } from "../../../components/utility/nf-utility";
import moment from "moment";
import uuidv4 from "uuid/v4";

import "./nf-send-ticket.css";

class NfSendTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      subject: '',
      showError: false,
      errorMessage: ''
    };
  }

  handleMessage = (e) => {
    this.setState({ message: e.target.value });
  };

  handleSubject = (e) => {
    this.setState({ 
      subject: e.target.value,
      showError: false 
    });
  };

  handleSubmit = (e) => {
    
    if(!this.subjectChosen() || !this.messageLongEnough()) {
      e.preventDefault();
      return;
    } else {

      this.props.dispatch(addTicket({
        id: uuidv4(),
        date: moment().format("MMM Do YY"),
        firstMessage: this.state.message, 
        subject: this.state.subject,
        messages: [ 
          {message: this.state.message, id: uuidv4(), senderId: uuidv4(), date: moment().format("MMM Do YY"), fromSupport: false}
        ]
      }));

      this.setState({ showError: false, subject: '' });
      this.refs.messageArea.value = '';
      e.preventDefault();
    }  
  }

  subjectChosen = () => {
    if(this.state.subject == "") {
      this.setState({ showError: true, errorMessage: 'Choose subject.' });
      return false;
    } else {
      return true;
    }
  }

  messageLongEnough = () => {
    if(this.state.message.length <= 5) {
      this.setState({ showError: true, errorMessage: 'Message is too short.' });   
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <div className="container-fluid mt-2">
        <div className="send-ticket-wrapper">
          <NfLiftBox
            header={<h5> Send Ticket </h5>}
            content={
              <div>
                <form onSubmit={this.handleSubmit}>
                <div className="gl-bold form-group">
                  <p>Subject</p>
                  <select value={this.state.subject} onChange={this.handleSubject} className="form-control">
                    <option value="" defaultValue>Choose ticket type...</option>
                    <option value="other">Other</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature_request">Feature Request</option>
                    <option value="report_user">Report User</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <p className="gl-bold send-ticket-header">Message</p>
                  <textarea
                    ref="messageArea"
                    className="form-control"
                    rows="4"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleMessage}
                  />
                  <input className="btn platform-btn" type="submit" value="Send" />
                </form>

                {this.state.showError ?
                  <div className="alert alert-danger ticket-error-message">
                    <p className="modal-danger-text">{this.state.errorMessage}</p>
                  </div>
                  : ''}
              </div>
            }
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.tickets;

export default connect(mapStateToProps)(NfSendTicket);