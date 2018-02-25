import React, {Component} from 'react';
import {connect} from 'react-redux';
import './offer-details.css';

class OfferDetails extends Component {

  render() {
    return (
      <div className="container-fluid mt-2">
        <div className="open-offers-container">
          <div className="row">
            <div className="col-lg-12">
              details
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => state.offers;
export default connect(mapStateToProps)(OfferDetails);
