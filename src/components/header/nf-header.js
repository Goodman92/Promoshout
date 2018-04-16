import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';

import NfPopover from '../popover/nf-popover';
import {NfLoginForm, NfLiftBox} from '../utility/nf-utility';

import { CSSTransitionGroup } from 'react-transition-group';

import {connect} from 'react-redux';
import {showLogin} from '../../reducers/login';

import './nf-header.css';

class NfHeader extends Component {
  
  render() {
    const onLoginClick = (e) => {
      e.preventDefault();
      this.props.dispatch(showLogin());
    };

    return (
        <div className="header-wrapper">
          <nav className="navbar navbar-inverse navbar-toggleable-md nf-navbar">

            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>

            <Link to="/" className="navbar-brand">
              <div className="d-flex logo-desktop-wrapper">
                <h5 className="logo-first-part">Promo</h5><h5 className="logo-last-part">shout</h5>
              </div>
              <div className="d-flex logo-phone-wrapper">
                <h4 className="logo-first-part">P</h4><h4 className="logo-last-part">S</h4>
              </div>
            </Link>
            <div className="collapse navbar-collapse nf-navbar-list" id="navbarSupportedContent">
              <ul className="navbar-nav nf-nav">
                <div className="partial-nav-items">

                  <li className="nav-link">
                    <NavLink exact to="/" activeClassName="nav-active" >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-link">
                    <NavLink to="/influencers" activeClassName="nav-active" >
                      Browse influencers
                    </NavLink>
                  </li>
                  <li className="nav-link">
                    <NavLink to="/whatwedo" activeClassName="nav-active" >
                      What we do
                    </NavLink>
                  </li>
                  <li className="nav-link">
                    <NavLink to="/platform/dashboard" activeClassName="nav-active" >
                      Dashboard
                    </NavLink>
                  </li>

                </div>
                <li key="loginParent" id="loginParent">
                  <a className="nav-link nav-login-btn" onClick={(e) => onLoginClick(e)}>Login</a>                      
                </li>
              </ul>
            </div>
          </nav>
            
            <NfPopover show={this.props.show}>
              <CSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={400}
                transitionEnter={false}
                transitionLeave={false}>

                <NfLiftBox header={<h5> Sign in</h5>} content={
                  <NfLoginForm/>
                }/>

              </CSSTransitionGroup>
            </NfPopover>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.login
};
export default connect(mapStateToProps)(NfHeader);

