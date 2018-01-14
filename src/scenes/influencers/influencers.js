import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {storeFilters} from '../../actions/filters';

import NfGeneralSearch from './components/nf-general-search';
import NfSearchFilter from './components/nf-search-filter';
import NfResultBlock from './components/nf-result-block';
import NfActiveFilters from './components/nf-active-filters';

import './influencers.css';

// Need to concern the design here, should this component act as container component
class Influencers extends Component {

  static propTypes = {
    filters: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    //console.log(this.props.filters);
  };

  filterOnRemove = (key, value, e) => {
    console.log("FILTER ON REMOVE");
    console.log(key);
    console.log(value);
    console.log(e);
  };

  filterOnChange = (item) => {
    //console.log("FILTER ON CHANGE");
    this.props.dispatch(storeFilters(item));
  };

  componentWillReceiveProps(nextProps) {
    //console.log("Influencers componentWillReceiveProps");
    //console.log(nextProps);
  };

  render() {
    return (
      <div className="page-wrapper mb-5">
        <div className="influencers-wrapper">
          <div className="container">
            <div className="row pt-5 pb-5">
              <div className="col-lg-12">
                <NfGeneralSearch/>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-right">
              <h6> 1,997,263 Results</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-xs-12">
              <NfSearchFilter filters={this.props.filters} filterOnChange={this.filterOnChange}/>
            </div>
            <div className="col-lg-9 xs-12">
              <div className="row">
                <div className="col-xs-12 col-lg-12">
                  <div className="active-filters-wrapper">
                    <NfActiveFilters filters={this.props.filters} onRemove={this.filterOnRemove}/>
                  </div>
                </div>
                <div className="col-xs-12 col-lg-12">
                  <NfResultBlock/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Influencers);
