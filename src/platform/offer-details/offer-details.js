import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NfLiftBox, NfCheckbox} from '../../components/utility/nf-utility';
import {offerDetailMock} from '../../mock-data';

import './offer-details.css';

class OfferDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {selected: false};
  }

  componentWillMount = () => {
    // AJAX
    this.offer = offerDetailMock;
  };

  render() {

    const renderAcceptFooter = () => (
      <div className="row offer-detail-footer">
        <div className="col-lg-12">
          <NfCheckbox handleChange={(value) => this.setState({selected: value})} item={this.state.selected}/>
          <label className="ml-2"> Attach a message to reply</label>
          {
            this.state.selected ?
              <textarea className="form-control mb-2"
                        placeholder="Supply additional information
                              for the bidder. E.g reason for declining, time changes etc."/> : ""
          }
        </div>
        <div className="col-lg-12 text-center">
          <button type="button" className="btn btn-success mr-1"> Accept</button>
          <button type="button" className="btn btn-danger"> Decline</button>
        </div>
      </div>
    );

    const renderLockedFooter = () => (
      <div className="row">
        <div className="col-lg-12">
          <p><strong>Respond message</strong></p>
          <blockquote className="b-quote">{this.offer.answer}</blockquote>
        </div>
      </div>
    );

    const renderFooter = () => {
      if (this.offer.status !== 'pending')
        return renderAcceptFooter();
      return renderLockedFooter();
    };

    return (
      <div className="container mt-2">
        <NfLiftBox header={
          <div className="row">
            <div className="col-lg-12">
              <div className="row ai-center">
                <div className="col-lg-6">
                  <h5 className="text-left mb-0"> #{this.offer.id} Order Details</h5>
                </div>
              </div>
            </div>
          </div>} content={
          <div>
            <div className="row">
              <div className="col-lg-4">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1489684141651-7e45b4e77b3a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=71a99129088137016cc0926837e7dce8&auto=format&fit=crop&w=1317&q=80"
                    className="img-fluid"/>
                </figure>
                <button type="button" className="btn btn-success btn-block always-center">
                  Download
                  <i className="ml-1 fa fa-download" aria-hidden="true"/>
                </button>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6">
                    <p><strong>User</strong></p>
                    <p>{this.offer.user}</p>
                  </div>
                  <div className="col-lg-6">
                    <p><strong>Order left</strong></p>
                    <p>{this.offer.created}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <p><strong>Message from bidder</strong></p>
                    <blockquote className="b-quote">{this.offer.msg}</blockquote>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <p><strong>Post caption</strong></p>
                    <p>{this.offer.caption}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <p><strong>Price</strong></p>
                    <p>{this.offer.price}$</p>
                  </div>
                  <div className="col-lg-4">
                    <p><strong>Length</strong></p>
                    <p>{this.offer.length} hours</p>
                  </div>
                  <div className="col-lg-4">
                    <p><strong>Requested posting time</strong></p>
                    <p>{this.offer.requestedTime}</p>
                  </div>
                </div>
              </div>
            </div>
            {renderFooter()}
          </div>
        }/>
      </div>
    );
  }
}


const mapStateToProps = (state) => state.offers;
export default connect(mapStateToProps)(OfferDetails);
