import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NfLiftBox} from '../../components/utility/nf-utility';
import NfConnectedAccounts from './components/nf-connected-accounts';
import NfEditAccount from './components/nf-edit-account';

import {connectedMocks} from '../../mock-data';

import './account-manager.css';

class AccountManager extends Component {

  constructor(props) {
    super(props);
    this.state = {accounts: connectedMocks, selected:null};
  };

  editOnClick = (item) => {
    this.setState({selected: item});
  };

  render() {
    return (
        <div className="container-fluid mt-2">
          <div className="row">
            <div className="col-lg-4">
              <NfLiftBox header={
                <h6 className="mb-0">Connected accounts</h6>
              } content={
                <div className="row">
                  <div className="col-lg-12">
                    <NfConnectedAccounts accounts={this.state.accounts} editOnClick={this.editOnClick}/>
                  </div>
                </div>
              }/>
            </div>
            <div className="col-lg-8">
              <NfLiftBox header={
                <h6 className="mb-0">Edit account</h6>
              } content={
                <div className="row">
                  <div className="col-lg-12">
                    <NfEditAccount account={this.state.selected}/>
                  </div>
                </div>
              }/>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-12">
              <NfLiftBox header={
                <div className="mb-0">Add new social account
                  <span className="pull-right">
                  <i className="fa fa-instagram instagram-color" aria-hidden="true"/>
                  <i className="fa fa-facebook-official ml-1 mr-1 facebook-blue" aria-hidden="true"/>
                  <i className="fa fa-twitter-square ml-1 mr-1 twitter-blue" aria-hidden="true"/>
                </span>
                </div>
              } content={
                <div className="row">
                  <div className="col-lg-12">
                    <small><p>Connect new social account into your Promoshout account and start monetizing your
                      fame. Promoshout will not store any login information regarding your social account. Your social
                      account will be linked within few hours to your Promoshout account after verification has been
                      completed. Accounts with 1000 followers/likes or more are eligible.
                    </p></small>
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
