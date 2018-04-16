import React, {Component} from 'react';
import {connect} from 'react-redux';
import {chatDenormalizer} from '../../../reducers/chat';
import {toggleConnection, toggleConnectionOpen, unshiftConnection} from '../../../actions/sockets';
import NfOpenChat from './nf-open-chat';
import NfClosedChat from './nf-closed-chat';

import '../nf-chat.css';

class NfOpenChatRow extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  onChatClose = (id) => {
    this.props.dispatch(toggleConnection(id));
  };

  onToggleChat = (id) => {
    this.props.dispatch(toggleConnectionOpen(id));
  };

  shiftConnectionAndOpen = (id) => {
    this.props.dispatch(toggleConnectionOpen(id));
    this.props.dispatch(unshiftConnection(id));
  };

  render() {
    const {items} = this.props;
    const visible = items.slice(0, 5);
    const hidden = items.slice(5);

    return (
        <div className="open-chat-wrapper">
          {
            this.state.open ?
                <div className="hidden-chat-dialog">
                  {hidden.map((item) => (
                      <NfClosedChat item={item} onChatClose={this.onChatClose}
                                    onToggleChat={this.shiftConnectionAndOpen}/>))}
                </div>
                : ""}
          { hidden.length ?
              <div className="hidden-chat-icon" onClick={() => this.setState({open: !this.state.open})}>
                <i className="fa fa-comments-o" aria-hidden="true"/>
              </div> : ""}
          {visible.map((item) => (
              item.open ? <NfOpenChat item={item} onToggleChat={this.onToggleChat}/> :
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
