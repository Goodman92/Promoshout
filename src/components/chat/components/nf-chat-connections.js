import React, {Component} from 'react';
import {NfMainLogo} from '../../utility/nf-utility';
import NfChatContactRow from './../components/nf-chat-contact-row';
import {connectionMocks} from '../../../mock-data';

import '../nf-chat.css';

class NfChatConnections extends Component {

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
        <div className="text-right">
          <span className="chat-icon" onClick={this.openConnections}>
            <span>Open connections <i className="fa fa-comments-o" aria-hidden="true"/></span>
          </span>
        </div>
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
                {connectionMocks.map((item, index) => (<NfChatContactRow {...item}/>))}
              </div>
            </div>
          </span>
      )
    };

    return (
        this.state.open ? renderConnections() : renderChatIcon()
    );
  }
}


export default NfChatConnections;
