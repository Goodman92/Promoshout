import React, {Component} from 'react';

import '../connections.css';

class NfConnectionCard extends Component {

  render() {

    const chatOnline = (isOnline) => {
      return isOnline ? 'chat-online' : 'chat-offline';
    };

    return (
        <div className="connection-card pointer">
          <div className="connection-image">
            <figure className="mb-0">
              <img src="http://webapplayers.com/inspinia_admin-v2.7.1/img/a6.jpg"
                   className="rounded-circle" height="100" width="100"/>
            </figure>
          </div>
          <div className="connection-info">
            <p>{this.props.name}
              <span className="pull-right">
                <div className={"chat-circle ".concat(chatOnline(this.props.online))}/>
              </span>
            </p>
            <small>Connected since: {this.props.connected}</small>
            {
              this.props.brand ?
                  <div>
                    <small>Brand: {this.props.brand_name}</small>
                    <small className="d-block">Website: <a href={this.props.website}> {this.props.website}</a></small>
                  </div>
                  : ""
            }
          </div>
        </div>
    );
  }
}


export default NfConnectionCard;
