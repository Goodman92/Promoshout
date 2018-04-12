import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../connections.css';

class NfConnectionRequest extends Component {

  render() {
    return (
        <div className="connection-request">
          <div className="feed-element">
            <div className="feed-image">
              <img className="img-fluid rounded-circle" height="40" width="40" alt="Sender"
                   src="http://webapplayers.com/inspinia_admin-v2.7.1/img/profile.jpg"/></div>
            <div className="feed-body">
              <div>
                <strong>
                  <Link to="/influencers/1" className="c-dark-grey">
                    {this.props.name}
                  </Link>
                </strong> 
                <p className="d-inline"> wants to connect with you.</p>
                <small className="pull-right">
                  <p className="c-light-grey">{this.props.sent}</p>
                </small>
              </div>
              <div className="mb-1">
                <button type="btn" className="btn btn-sm btn-success mr-1">
                  <i className="fa fa-thumbs-o-up" aria-hidden="true"/> Accept
                </button>
                <button type="btn" className="btn btn-sm btn-danger">
                  <i className="fa fa-thumbs-o-down" aria-hidden="true"/> Reject
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}


export default NfConnectionRequest;
