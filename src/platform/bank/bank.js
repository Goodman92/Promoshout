import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Link, NavLink} from 'react-router-dom';
import {NfLiftBox} from '../../components/utility/nf-utility';
import paypal from 'paypal-checkout';

import './bank.css';

const PPButton = paypal.Button.driver('react', {React, ReactDOM});

class Bank extends Component {

  constructor(props) {
    super(props);

    this.state = {
      env: 'sandbox',
      client: {
        sandbox: 'AWi18rxt26-hrueMoPZ0tpGEOJnNT4QkiMQst9pYgaQNAfS1FLFxkxQuiaqRBj1vV5PmgHX_jA_c1ncL',
        production: 'RLYSEKRETKEY'
      },
      commit: true
    };
  }

  render() {
    return (
      <div className="container-fluid mt-2">
        <div className="row mb-2">
          <div className="col-lg-12">
            <NfLiftBox header={
              <p className="text-left mb-0">Paypal <i className="fa fa-cc-paypal pull-right text-primary"/></p>
            } content={
              <div className="bank-summary">
                <div className="row">
                  <div className="col-lg-12">
                    <small>Deposit funds on to your Promoshout account via Paypal transfer. Once the transaction has
                      been completed, funds will be added to your account instantly. Deposited funds can be withdrew
                      anytime via
                      <Link to="/bank/withdraw"> withdraw</Link> page.
                    </small>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Amount</label>
                      <input type="number" className="form-control" placeholder="Enter amount"/>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-lg-12 text-center">
                    <PPButton
                      commit={ this.state.commit }
                      env={ this.state.env }
                      client={ this.state.client }
                      payment={ (data, actions) => null }
                      onAuthorize={ (data, actions) => null }/>
                  </div>
                </div>
              </div>
            }/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <NfLiftBox header={
              <p className="text-left mb-0">Credit card <i className="fa fa-cc-visa pull-right text-visa"/></p>
            } content={
              <form role="form" id="payment-form">
                <div className="row mb-2">
                  <div className="col-lg-12">
                    <small>No credit card information is ever stored on our servers.</small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>CARD NUMBER</label>
                      <div className="input-group">
                        <input type="text" className="form-control" name="Number" placeholder="Valid Card Number"
                               required=""/>
                        <span className="input-group-addon"><i className="fa fa-credit-card"/></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-7 col-md-7">
                    <div className="form-group">
                      <label>EXPIRATION DATE</label>
                      <input type="text" className="form-control" name="Expiry" placeholder="MM / YY" required=""/>
                    </div>
                  </div>
                  <div className="col-xs-5 col-md-5 pull-right">
                    <div className="form-group">
                      <label>CV CODE</label>
                      <input type="text" className="form-control" name="CVC" placeholder="CVC" required=""/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>NAME OF CARD</label>
                      <input type="text" className="form-control" name="nameCard" placeholder="NAME AND SURNAME"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Amount</label>
                      <input type="text" className="form-control" placeholder="Amount"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <button className="btn platform-btn" type="submit">Make a payment</button>
                  </div>
                </div>
              </form>
            }/>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => state.offers;
export default connect(mapStateToProps)(Bank);
