import React, {Component} from 'react';
import {connect} from 'react-redux';
import NfCarousel from './nf-carousel';
import {fetchFeatured, requestMore} from '../../../actions/index';
import './nf-featured.css';

class NfFeatured extends Component {
  
  componentDidMount() {
    this.props.dispatch(fetchFeatured());
  }

  getPrevious = () => {
    this.props.dispatch(requestMore(-1));
  };

  getNext = () => {
    this.props.dispatch(requestMore(1));
  };

  render() {
    return (
        <div className="container-fluid featured-wrapper">
          <div className="row pb-5">
            <div className="col-lg-12 mt-4 mb-4">
              <h1 className="featured-main-title"> Featured Offers </h1>
            </div>
            <div className="col-lg-12"> 
              <NfCarousel data={this.props.featured} getNext={this.getNext} getPrevious={this.getPrevious} />
            </div>
          </div>
        </div>
    );
  }
}

// kapisch?
const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(NfFeatured);
