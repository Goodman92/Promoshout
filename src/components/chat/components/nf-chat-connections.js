import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NfMainLogo} from '../../utility/nf-utility';
import NfChatContactRow from './../components/nf-chat-contact-row';
import {receiveConnections, toggleConnectionOpen} from '../../../actions/sockets';
import {chatDenormalizer} from '../../../reducers/chat';

import '../nf-chat.css';

class NfChatConnections extends Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
    props.dispatch(receiveConnections());
  }

  onChatClick = (id) => {
    this.props.dispatch(toggleConnectionOpen(id));
  };

  render() {
    const {items} = this.props;

    const renderChatIcon = () => {
      return (
        <div className="text-right">
          <span className="chat-icon" onClick={() => this.setState({open: true})}>
            <span>Open connections <i className="fa fa-comments-o" aria-hidden="true"/></span>
          </span>
        </div>
      )
    };

    const renderConnections = () => {
      return (
        <span className="connections-wrapper">
            <div className="chat-connections">
              <div className="connection-header" onClick={() => this.setState({open: false})}>
                <h5>
                  <NfMainLogo/>
                </h5>
              </div>
              <div className="connection-list">
                {items.map((item, index) => (<NfChatContactRow {...item} onChatClick={this.onChatClick}/>))}
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

const mapStateToProps = (state) => {
  const items = chatDenormalizer(state.connections, {type: 'ALL'});
  return {items};
};

export default connect(mapStateToProps)(NfChatConnections);
