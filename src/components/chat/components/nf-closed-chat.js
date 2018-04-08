import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../nf-chat.css';

class NfClosedChat extends Component {

  onChatClose = (id) => {
    this.props.onChatClose(id);
  };

  onToggleChat = (id) => {
    this.props.onToggleChat(id);
  };

  render() {
    const {item} = this.props;

    const chatOnline = (isOnline) => {
      return isOnline ? 'chat-online' : 'chat-offline';
    };

    return (
      <div className="open-chat mr-1">
        <i className="fa fa-times mr-1 ml-1" aria-hidden="true" onClick={(e) => this.onChatClose(item.id)}/>
        <span onClick={(e) => this.onToggleChat(item.id)}>
          {item.name}
          <span className="pull-right">
            <div className={"chat-circle ".concat(chatOnline(item.online))}/>
          </span>
        </span>
      </div>
    );
  }
}

export default NfClosedChat;
