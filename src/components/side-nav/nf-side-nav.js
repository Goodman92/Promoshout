import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

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
            <Link to="/platform/dashboard">
              <i className="fa fa-th-large"/>
              <span className="nav-item-label"> Dashboard </span>
            </Link>
          </li>
          <li>
            <Link to="/platform/account-manager">
              <i className="fa fa-id-card-o"/>
              <span className="nav-item-label"> Account manager </span>
            </Link>
          </li>
          <li>
            <Link to="/platform/offers">
              <i className="fa fa-suitcase"/>
              <span className="nav-item-label"> Offers </span>
            </Link>
          </li>
          <li>
            <Link to="/platform/settings"><i className="fa fa-cog"/>
              <span className="nav-item-label"> Settings </span></Link>
          </li>
          <li>
            <Link to="/platform/connections"><i className="fa fa-handshake-o"/>
              <span className="nav-item-label"> Connections </span></Link>
          </li>
          <li>
            <Link to="/platform/tickets">
              <i className="fa fa-ticket"/>
              <span className="nav-item-label"> Tickets </span>
            </Link>
          </li>
          <li onClick={() => this.setState({bankCollapsed: !this.state.bankCollapsed})}>
            <a data-toggle="collapse" href="#collapseBank" aria-expanded="false">
              <i className="fa fa-university"/>
              <span className="nav-item-label">Bank</span>
              <i className={["hidden-sm-down", "fa", "pull-right", bankCollapsed()].join(" ")}/>
            </a>
            <ul className="list-unstyled sub-nav collapse" id="collapseBank">
              <li>
                <Link to="/platform/bank/deposit">
                  <span> Deposit </span></Link>
              </li>
              <li>
                <Link to="/platform/bank/withdraw">
                  <span> Withdraw </span></Link>
              </li>
              <li>
                <Link to="/platform/bank/transactions">
                  <span> Transaction History </span></Link>
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


