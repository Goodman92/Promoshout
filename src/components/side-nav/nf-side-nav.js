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
              <h6 className="nav-item-label"> Dashboard </h6>
            </Link>
          </li>
          <li>
            <Link to="/platform/account-manager">
              <i className="fa fa-id-card-o"/>
              <h6 className="nav-item-label"> Account manager </h6>
            </Link>
          </li>
          <li>
            <Link to="/platform/offers">
              <i className="fa fa-suitcase"/>
              <h6 className="nav-item-label"> Offers </h6>
            </Link>
          </li>
          <li>
            <Link to="/platform/settings"><i className="fa fa-cog"/>
              <h6 className="nav-item-label"> Settings </h6></Link>
          </li>
          <li>
            <Link to="/platform/connections"><i className="fa fa-handshake-o"/>
              <h6 className="nav-item-label"> Connections </h6></Link>
          </li>
          <li>
            <Link to="/platform/tickets">
              <i className="fa fa-ticket"/>
              <h6 className="nav-item-label"> Tickets </h6>
            </Link>
          </li>
          <li onClick={() => this.setState({bankCollapsed: !this.state.bankCollapsed})}>
            <a data-toggle="collapse" href="#collapseBank" aria-expanded="false">
              <i className="fa fa-university"/>
              <h6 className="nav-item-label">Bank</h6>
              <i className={["hidden-sm-down", "fa", "pull-right", bankCollapsed()].join(" ")}/>
            </a>
            <ul className="list-unstyled sub-nav collapse" id="collapseBank">
              <li>
                <Link to="/platform/bank/deposit">
                  <h6> Deposit </h6></Link>
              </li>
              <li>
                <Link to="/platform/bank/withdraw">
                  <h6> Withdraw </h6></Link>
              </li>
              <li>
                <Link to="/platform/bank/transactions">
                  <h6> Transaction History </h6></Link>
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


