import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Link, NavLink} from 'react-router-dom';
import {NfLiftBox} from '../../components/utility/nf-utility';
import paypal from 'paypal-checkout';

import './bank.css';

const PPButton = paypal.Button.driver('react', {React, ReactDOM});

class Deposit extends Component {

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
              <h5 className="text-left mb-0">Paypal <i className="fa fa-cc-paypal pull-right text-primary"/></h5>
            } content={
              <div className="bank-summary">
                <div className="row">
                  <div className="col-lg-12">
                    <small><p>Deposit funds on to your Promoshout account via Paypal transfer. Once the transaction has
                      been completed, funds will be added to your account instantly. Deposited funds can be withdrew
                      anytime via
                      <Link to="/bank/withdraw"> withdraw</Link> page.
                    </p></small>
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
              <h5 className="text-left mb-0">Credit card <i className="fa fa-cc-visa pull-right text-visa"/></h5>
            } content={
              <form role="form" id="payment-form">
                <div className="row mb-2">
                  <div className="col-lg-12">
                    <small><p>No credit card information is ever stored on our servers.</p></small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <p className="gl-bold">Card Number</p>
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
                      <p className="gl-bold">Expiration Date</p>
                      <input type="text" className="form-control" name="Expiry" placeholder="MM / YY" required=""/>
                    </div>
                  </div>
                  <div className="col-xs-5 col-md-5 pull-right">
                    <div className="form-group">
                      <p className="gl-bold">CV Code</p>
                      <input type="text" className="form-control" name="CVC" placeholder="CVC" required=""/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <p className="gl-bold">Name Of Card</p>
                      <input type="text" className="form-control" name="nameCard" placeholder="Name And Surname"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <p className="gl-bold">Amount</p>
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
export default connect(mapStateToProps)(Deposit);
