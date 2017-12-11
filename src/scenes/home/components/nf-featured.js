import React, {Component} from 'react';
import './nf-featured.css';
import NfFeaturedItem from './nf-featured-item';

class NfFeatured extends Component {
  render() {
    return (
      <div className="container-fluid featured-wrapper">
        <div className="row mb-3 pb-5">
          <div className="col-lg-12 mt-4 mb-4">
            <h1 className="featured-main-title"> Featured Promoshout users</h1>
          </div>
          <div className="col-lg-4">
            <NfFeaturedItem/>
          </div>
        </div>
      </div>
    );
  }
}

export default NfFeatured;
