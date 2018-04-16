import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../nf-chat.css';

class NfOpenChat extends Component {

  render() {
    const {item} = this.props;

    return (
      <div className="chat-window">
        <div className="chat-window-title" onClick={() => this.props.onToggleChat(item.id)}>
          <h6> {item.name}</h6>
        </div>
        <div className="chat-window-content">
          Gimme dat Content
        </div>
        <div className="chat-window-footer">
          <div className="input-group">
            <input id="btn-input" type="text" className="form-control form-control-sm" placeholder="..."/>
            <span className="input-group-btn">
              <button className="btn platform-btn btn-sm" id="btn-chat">Send</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default NfOpenChat;
