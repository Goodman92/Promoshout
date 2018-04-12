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
            <p className="gl-bold">{this.props.name}
              <span className="pull-right">
                <div className={"chat-circle ".concat(chatOnline(this.props.online))}/>
              </span>
            </p>
            <small><p>Connected since: {this.props.connected}</p></small>
            {
              this.props.brand ?
                  <div>
                    <small><p>Brand: {this.props.brand_name}</p></small>
                    <small className="d-block">
                      <p>Website:&nbsp;
                        <a href={this.props.website} className="c-dark-grey"> 
                          {this.props.website}
                        </a>
                      </p>
                    </small>
                  </div>
                  : ""
            }
          </div>
        </div>
    );
  }
}


export default NfConnectionCard;
