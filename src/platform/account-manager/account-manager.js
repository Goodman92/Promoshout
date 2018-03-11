import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {NfLiftBox} from '../../components/utility/nf-utility';

import './account-manager.css';

class AccountManager extends Component {

  render() {
    return (
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-12">
            <NfLiftBox header={
              <span>Connected accounts</span>
            } content={
              <div className="row">
                <div className="col-lg-12">
                  <p> Connect accounts</p>
                </div>
              </div>
            }/>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <NfLiftBox header={
              <p className="mb-0">Add new social account
                <span className="pull-right">
                  <i className="fa fa-instagram instagram-color" aria-hidden="true"/>
                  <i className="fa fa-facebook-official ml-1 mr-1 facebook-blue" aria-hidden="true"/>
                  <i className="fa fa-twitter-square ml-1 mr-1 twitter-blue" aria-hidden="true"/>
                </span>
              </p>
            } content={
              <div className="row">
                <div className="col-lg-12">
                  <small>Connect new social account into your Promoshout account and start monetizing your
                    fame. Promoshout will not store any login information regarding your social account. Your social
                    account will be linked within few hours to your Promoshout account after verification has been
                    completed. Accounts with 1000 followers/likes or more are eligible.
                  </small>
                </div>
                <div className="col-lg-4 mt-3">
                  <button type="btn" className="btn btn-primary btn-lg-sides btn-instagram">
                    <i className="fa fa-instagram ml-1 mr-1" aria-hidden="true"/>
                    Connect with Instagram
                  </button>
                </div>
                <div className="col-lg-4 mt-3">
                  <button type="btn" className="btn btn-primary btn-lg-sides btn-facebook">
                    <i className="fa fa-facebook-official ml-1 mr-1" aria-hidden="true"/>
                    Connect with Facebook
                  </button>
                </div>
                <div className="col-lg-4 mt-3">
                  <button type="btn" className="btn btn-primary btn-lg-sides btn-twitter">
                    <i className="fa fa-twitter-square ml-1 mr-1" aria-hidden="true"/>
                    Connect with Twitter
                  </button>
                </div>
              </div>
            }/>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(AccountManager);
