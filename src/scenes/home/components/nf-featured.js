import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import NfFeaturedItem from './nf-featured-item';
import {fetchFeatured} from '../../../actions/index';

import './nf-featured.css';


class NfFeatured extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    console.log("constructor");
    this.items = props.items;
    console.log(this.items);
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.props.dispatch(fetchFeatured());
  }

  // tää fain?
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    this.items = nextProps.items;
  }

  render() {
    return (
        <div className="container-fluid featured-wrapper">
          <div className="row mb-3 pb-5">
            <div className="col-lg-12 mt-4 mb-4">
              <h1 className="featured-main-title"> Featured Promoshout users </h1>
            </div>
            {this.items.map((item, index) => (
                <div className="col-lg-3">
                  <NfFeaturedItem item={item}/>
                </div>
            ))}
          </div>
        </div>
    );
  }
}

// kapisch?
const mapStateToProps = (state) => {
  console.log("mapStateToProps");
  let test = state || {fetching: true, items: []};
  console.log(test);
  return test;
};

export default connect(mapStateToProps)(NfFeatured);
