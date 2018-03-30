import React, {Component} from 'react';
import {NfMainLogo} from '../utility/nf-utility';
import NfChatRow from './components/nf-chat-row';

import {connectionMocks} from '../../mock-data';

import './nf-chat.css';

class NfChat extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  openConnections = () => {
    this.setState({open: true});
  };

  closeConnections = () => {
    this.setState({open: false});
  };

  render() {
    const renderChatIcon = () => {
      return (
          <span className="chat-icon" onClick={this.openConnections}>
            <span>Open connections <i className="fa fa-comments-o" aria-hidden="true"/></span>
          </span>
      )
    };

    const renderConnections = () => {
      return (
          <span className="connections-wrapper">
            <div className="chat-connections">
              <div className="connection-header" onClick={this.closeConnections}>
                <h5><NfMainLogo/></h5>
              </div>
              <div className="connection-list">
                {connectionMocks.map((item, index) => (<NfChatRow {...item}/>))}
              </div>
            </div>
          </span>
      )
    };

    const renderContent = () => {
      if (this.state.open)
        return renderConnections();
      return renderChatIcon();
    };

    return (
        <div className="footer-chat">
          <div className="row">
            <div className="col-lg-12">
              <div className="pull-right">
                <span className="open-chat"> Chat 1</span>
                <span className="open-chat"> Chat 1</span>
                <span className="open-chat"> Chat 1</span>
                <span className="open-chat"> Chat 1</span>
                <span className="open-chat"> Chat 1</span>
                <span className="open-chat"> Chat 1</span>
                <span className="open-chat"> Chat 1</span>
                <span className="open-chat"> Chat 1</span>
                <span className="open-chat"> Chat 1</span>
                <span className="open-chat"> Chat 1</span>
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
    );
  }
}


export default NfChat;
