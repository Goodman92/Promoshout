import React, {Component} from 'react';
import {NfLiftBox} from '../../../components/utility/nf-utility';

import './nf-send-ticket.css';

export default class NfSendTicket extends Component {
         
  render() {
    return(
        <div className="container-fluid mt-2">
          <div className="send-ticket-wrapper">
            <NfLiftBox header={<span> Send Ticket </span>} content={
              <div>
                <div className="form-group">
                  <label>Subject</label>
                  <select className="form-control">
                    <option defaultValue>Choose ticket type...</option>
                    <option>Other</option>
                    <option>Bug Report</option>
                    <option>Feature Request</option>
                    <option>Report User</option>
                    <option>Feedback</option>
                  </select>
                </div>
                     
                <label className="send-ticket-header">Message</label>      
                <textarea className="form-control" rows="4" type="text"></textarea>            
                <button className="btn platform-btn"> Send </button>
              </div>
            }/>
          </div>
        </div>
		);
	}
}
