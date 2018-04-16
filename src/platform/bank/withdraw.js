import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NfLiftBox} from '../../components/utility/nf-utility';

import './bank.css';

class Withdraw extends Component {

  render() {
    return (
        <div className="container-fluid mt-2">
          <div className="row mb-2">
            <div className="col-lg-12">
              <NfLiftBox header={
                <h5 className="text-left mb-0">Paypal <i className="fa fa-cc-paypal pull-right text-primary"/></h5>
              } content={
                <div className="bank-summary">
                  <div className="row">
                    <div className="col-lg-12">
                      <p>Your current balance is <strong>50$</strong></p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <small>
                        <p>
                          Withdraw funds from your Promoshout account to your Paypal account instantly. For accounts
                          less than
                          2 weeks old, transactions are accepted manually. Please fill this form carefully, once
                          transaction is done
                          it can't be reverted.
                        </p>
                      </small>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <p className="gl-bold">Amount</p>
                        <input type="number" className="form-control" placeholder="Enter amount"/>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <p className="gl-bold">Paypal address</p>
                        <input type="text" className="form-control" placeholder="Enter your paypal address"/>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-lg-12 text-center">
                      <button className="btn platform-btn" type="submit">Make a withdrawal</button>
                    </div>
                  </div>
                </div>
              }/>
            </div>
          </div>
        </div>
    );
  }
}


const mapStateToProps = (state) => state.offers;
export default connect(mapStateToProps)(Withdraw);
