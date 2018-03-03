import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import './nf-side-nav.css';


class NfSideNav extends Component {

  constructor(props) {
    super(props);
    this.state = {bankCollapsed: false};
  }

  render = () => {

    const getCollapseClass = () => {
      return this.props.collapsed ? "collapse-nav" : "";
    };

    const bankCollapsed = () => {
      return this.state.bankCollapsed ? 'fa-angle-down' : 'fa-angle-right';
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
          <li>
            <NavLink to="/dashboard" activeClassName="active">
              <i className="fa fa-th-large"/>
              <span className="nav-item-label"> Dashboard </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/offers">
              <i className="fa fa-suitcase"/>
              <span className="nav-item-label"> Offers </span>
            </NavLink>
          </li>
          <li>
            <a href="#"> <i className="fa fa-cog"/>
              <span className="nav-item-label"> Settings </span></a>
          </li>
          <li>
            <a href="#"> <i className="fa fa-ticket"/>
              <span className="nav-item-label"> Tickets </span></a>
          </li>
          <li onClick={() => this.setState({bankCollapsed: !this.state.bankCollapsed})}>
            <a data-toggle="collapse" href="#collapseBank" aria-expanded="false">
              <i className="fa fa-university"/>
              <span className="nav-item-label">Bank</span>
              <i className={["hidden-sm-down", "fa", "pull-right", bankCollapsed()].join(" ")}/>
            </a>
            <ul className="list-unstyled sub-nav collapse" id="collapseBank">
              <li>
                <NavLink to="/bank/deposit">
                  <span> Deposit </span></NavLink>
              </li>
              <li>
                <NavLink to="/bank/withdraw">
                  <span> Withdraw </span></NavLink>
              </li>
              <li>
                <NavLink to="/bank/transactions">
                  <span> Transaction History </span></NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => state.nav;
export default connect(mapStateToProps)(NfSideNav);


