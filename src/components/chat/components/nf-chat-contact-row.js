import React, {Component} from 'react';

import '../nf-chat.css';

class NfChatContactRow extends Component {

  render() {
    const {props} = this;

    const onClick = (event) => {
      event.preventDefault();
      props.onChatClick(props.id);
    };

    const chatOnline = (isOnline) => {
      return isOnline ? 'chat-online' : 'chat-offline';
    };

    return (
      <div className="chat-row" onClick={(e) => onClick(e)}>
        <div className="chat-image">
          <img className="img-fluid rounded-circle" height="30" width="30" alt="Sender"
               src="http://webapplayers.com/inspinia_admin-v2.7.1/img/profile.jpg"/>
        </div>
        <div className="chat-body">
            <span>{props.name}
              <span className="pull-right">
                <div className={"chat-circle ".concat(chatOnline(props.online))}/>
              </span>
            </span>
        </div>
      </div>
    );
  }
}


export default NfChatContactRow;
