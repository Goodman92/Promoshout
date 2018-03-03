import React, { Component } from "react";

import "./nf-ticket-table-row-chat.css";

export default class NfTicketTableRowChat extends Component {
  render() {

    return (
<div className="ticket-chat-wrapper">
      {this.props.fromSupport ? 
        <div className="review-box mb-1">
          <div className="ticket-table-row-review-item" style={{float: 'right'}}>
            <div className="ticket-table-row-review-info" style={{'marginLeft': 0, 'marginRight': '1em'}}>
              <div className="ticket-table-row-review-text" style={{ 'borderRadius': '10px 10px 0px 10px'}}>
                <p>{this.props.message}</p>
              </div>
              <div className="ticket-table-row-review-left">
                <p>
                    <span className="logo-first-part">Promo</span>
                    <span className="logo-last-part">shout</span>
                    &nbsp;{this.props.date}</p>
              </div>
            </div>
            <figure>
              <img
                src="http://exprostudio.com/html/classified/images/author/img-08.jpg"
                className="rounded-circle"
                height="40"
                width="40"
              />
            </figure>
          </div>
        </div>  
        : 
        <div className="review-box mb-1">
          <div className="ticket-table-row-review-item">
            <figure>
              <img
                src="http://exprostudio.com/html/classified/images/author/img-08.jpg"
                className="rounded-circle"
                height="40"
                width="40"
              />
            </figure>
            <div className="ticket-table-row-review-info">
              <div className="ticket-table-row-review-text">
                <p>{this.props.message}</p>
              </div>
              <div className="ticket-table-row-review-left">
                <p>{this.props.date}</p>
              </div>
            </div>
          </div>
        </div>          
      }

  </div>          
    );
  }
}
