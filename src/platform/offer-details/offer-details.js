import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NfLiftBox, NfCheckbox} from '../../components/utility/nf-utility';

import './offer-details.css';

class OfferDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {selected: false};
  }

  render() {
    return (
        <div className="container mt-2">
          <NfLiftBox header={
            <div className="row">
              <div className="col-lg-12">
                <div className="row ai-center">
                  <div className="col-lg-6">
                    <h5 className="text-left mb-0"> #1 Order Details</h5>
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
                      <p> fdsafsad</p>
                    </div>
                    <div className="col-lg-6">
                      <p><strong>Order left</strong></p>
                      <p> Jun 20 17 02:20 AM</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <p><strong>Message from bidder</strong></p>
                      <blockquote className="b-quote"> It is a long established fact that a reader will be
                        distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum is that
                        it has a more-or-less normal distribution
                      </blockquote>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <p><strong>Post caption</strong></p>
                      <p>
                        Life with three dogs and a little puppy moves pretty fast! Lucky for us, Google Clips
                        is helping capture moments with our dogs that we might</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <p><strong>Price</strong></p>
                      <p> 3.5$</p>
                    </div>
                    <div className="col-lg-4">
                      <p><strong>Length</strong></p>
                      <p> 5 hours</p>
                    </div>
                    <div className="col-lg-4">
                      <p><strong>Requested posting time</strong></p>
                      <p> 10:15AM 02 FEB 2014</p>
                    </div>
                  </div>
                </div>
              </div>
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
            </div>
          }/>
        </div>
    );
  }
}


const mapStateToProps = (state) => state.offers;
export default connect(mapStateToProps)(OfferDetails);
