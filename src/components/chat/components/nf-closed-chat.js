import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../nf-chat.css';

class NfClosedChat extends Component {

  onChatClose = (item) => {
    this.props.onChatClose(item.id);
  };

  onToggleChat = (item) => {
    this.props.onToggleChat(item.id);
  };

  render() {
    const {item} = this.props;

    const chatOnline = (isOnline) => {
      return isOnline ? 'chat-online' : 'chat-offline';
    };

    return (
        <div className="open-chat mr-1">
          <div className="chat-closer">
            <i className="fa fa-times mr-1 ml-1" aria-hidden="true" onClick={(e) => this.onChatClose(item)}/>
          </div>
          <div className="w-100" onClick={(e) => this.onToggleChat(item)}>
            {item.name}
            <span className="pull-right">
                <div className={"chat-circle ".concat(chatOnline(item.online))}/>
              </span>
          </div>
        </div>
    );
  }
}

export default NfClosedChat;
