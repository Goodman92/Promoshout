import React, {Component} from 'react';

import '../nf-chat.css';

class NfOpenChatRow extends Component {

  render() {

    return (
      <div className="open-chat-wrapper">
        {[1, 2, 3].map((index) => (
          <span className="open-chat mr-1">
                <i className="fa fa-times mr-1 ml-1" aria-hidden="true"/>
                Chat 1
                <span className="pull-right">
                  <div className="chat-circle chat-online"/>
                </span>
          </span>
        ))
        }
      </div>
    );
  }
}


export default NfOpenChatRow;
