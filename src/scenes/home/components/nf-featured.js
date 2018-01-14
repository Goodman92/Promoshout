import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import NfFeaturedItem from './nf-featured-item';
import {fetchFeatured, requestMore} from '../../../actions/index';

import './nf-featured.css';

class NfFeatured extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  };

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
              <h1 className="featured-main-title"> Featured Promoshout users </h1>
            </div>
            <div className="col-lg-12">
              <div className="row featured-slider">
                <i className="fa fa-2x fa-chevron-left carousel-toggle" aria-hidden="true" onClick={this.getPrevious}/>
                {this.props.featured.items.map((item, index) => (
                    index >= this.props.featured.index && index < this.props.featured.size + this.props.featured.index?
                    <div className="col-lg-3" key={item.key}>
                      <NfFeaturedItem item={item}/>
                    </div> : null
                ))}
                <i className="fa fa-2x fa-chevron-right carousel-toggle" aria-hidden="true" onClick={this.getNext}/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

// kapisch?
const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(NfFeatured);
