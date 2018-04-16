import React, {Component} from 'react';
import {connect} from 'react-redux';
import NfOpenChatRow from './components/nf-open-chat-row';
import NfChatConnections from './components/nf-chat-connections';

import './nf-chat.css';

class NfChat extends Component {

  render() {
    return (
      <div className="footer-chat">
        <div className="chat-section-left">
          <NfOpenChatRow/>
        </div>
        <div className="chat-section-right">
          <NfChatConnections/>
        </div>
      </div>
    );
  }
}


export default connect()(NfChat);
