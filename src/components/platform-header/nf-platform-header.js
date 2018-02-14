import React, {Component} from 'react';
import {connect} from 'react-redux';
import {collapseNav} from '../../reducers/nav';

import './nf-platform-header.css';


class NfPlatformHeader extends Component {

  render() {
    return (
        <nav className="navbar navbar-light bg-faded platform-top-nav navbar-toggleable-md">
          <button className="btn platform-btn platform-nav-toggler" onClick={() => this.props.dispatch(collapseNav())}>
            <i className="fa fa-bars"/>
          </button>
          <div className="navbar-collapse w-auto">
            <ul className="navbar-nav platform-top-right">
              <li className="nav-item active">
                <a className="nav-link" href="#">Back to Browsing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Balance: <i className="fa fa-usd" aria-hidden="true"/>50 </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-sign-out"/> Log out</a>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default connect()(NfPlatformHeader);
