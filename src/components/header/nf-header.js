import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
            <Link to="/" className="navbar-brand main-logo">
              Promoshout
            </Link>
            <div className="collapse navbar-collapse nf-navbar-list" id="navbarSupportedContent">
              <ul className="navbar-nav nf-nav">
                <li className="nav-item active">
                  <Link to="/influencers" className="nav-link">
                    Browse influencers <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/influencers" className="nav-link">
                    Browse brand
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/influencers" className="nav-link">
                    What we do
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/"> Login </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
    );
  }
}

export default NfHeader;
