import React, {Component} from 'react';
import {connect} from 'react-redux';
import {chatDenormalizer} from '../../../reducers/chat';
import {toggleConnection, toggleConnectionOpen} from '../../../actions/sockets';
import NfOpenChat from './nf-open-chat';
import NfClosedChat from './nf-closed-chat';

import '../nf-chat.css';

class NfOpenChatRow extends Component {

  onChatClose = (id) => {
    this.props.dispatch(toggleConnection(id));
  };

  onToggleChat = (id) => {
    this.props.dispatch(toggleConnectionOpen(id));
  };

  render() {
    const {items} = this.props;

    return (
      <div className="open-chat-wrapper">
        {items.map((item) => (
          !item.open ?
            <NfOpenChat item={item} onToggleChat={this.onToggleChat}/> :
            <NfClosedChat item={item} onChatClose={this.onChatClose} onToggleChat={this.onToggleChat}/>))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const items = chatDenormalizer(state.connections, {type: 'ACTIVE'});
  return {items};
};

export default connect(mapStateToProps)(NfOpenChatRow);
