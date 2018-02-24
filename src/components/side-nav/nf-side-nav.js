import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './nf-side-nav.css';


class NfSideNav extends Component {

  render = () => {

    const getCollapseClass = () => {
      return this.props.collapsed ? "collapse-nav" : "";
    };

    return (
        <nav id="sidebar" className={["nf-sidebar", getCollapseClass()].join(" ")}>
          <div className="sidebar-header">
            <figure>
              <img src="http://exprostudio.com/html/classified/images/author/img-02.jpg"
                   className="rounded-circle img-fluid" height="70" width="70"/>
            </figure>
            <h4 className="text-left nav-item-label"> @SHRG</h4>
          </div>

          <ul className="list-unstyled nav-list-items">
            <li className="active">
              <Link to="/dashboard">
                <i className="fa fa-th-large"/>
                <span className="nav-item-label"> Dashboard </span>
              </Link>
            </li>
            <li>
              <Link to="/open-offers">
                <i className="fa fa-suitcase"/>
                <span className="nav-item-label"> Open Offers </span>
              </Link>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-check"/>
                <span className="nav-item-label"> Past Deals </span></a>
            </li>
            <li>
              <a href="#"> <i className="fa fa-cog"/>
                <span className="nav-item-label"> Settings </span></a>
            </li>
            <li>
              <a href="#"> <i className="fa fa-ticket"/>
                <span className="nav-item-label"> Tickets </span></a>
            </li>
            <li>
              <a href="#"> <i className="fa fa-university"/>
                <span className="nav-item-label"> Bank </span></a>
            </li>
          </ul>
        </nav>
    )
  }
}

const mapStateToProps = (state) => state.nav;
export default connect(mapStateToProps)(NfSideNav);


