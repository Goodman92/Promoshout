import React, {Component} from 'react';
import './nf-header.css';

class NfHeader extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <nav className="navbar navbar-inverse navbar-toggleable-md bg-faded nf-navbar">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand main-logo" href="#">Promoshout</a>
          <div className="collapse navbar-collapse nf-navbar-list" id="navbarSupportedContent">
            <ul className="navbar-nav nf-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Browse influencers <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Browse brands</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">What we do</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> Login </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NfHeader;
