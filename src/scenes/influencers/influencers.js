import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {storeFilters, removeFilter, clearAll } from '../../actions/filters';

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
  };

  filterOnRemove = (key) => {
    this.props.dispatch(removeFilter(key));
  };

  filtersOnUpdate = (item) => {
    this.props.dispatch(storeFilters(item));
  };

  filterOnClear = () => {
    this.props.dispatch(clearAll());
  };

  render() {
    return (
      <div className="page-wrapper mb-5">
        <div className="influencers-wrapper">
          <div className="container">
            <div className="row pt-5 pb-5">
              <div className="col-lg-12">
                <NfGeneralSearch filters={this.props.filters} filtersOnUpdate={this.filtersOnUpdate}/>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-2">
          <div className="row">
            <div className="col-lg-3 col-xs-12">
              <NfSearchFilter filters={this.props.filters} filtersOnUpdate={this.filtersOnUpdate}/>
            </div>
            <div className="col-lg-9 xs-12">
              <div className="row">
                <div className="col-xs-12 col-lg-12">
                  <div className="active-filters-wrapper">
                    <NfActiveFilters filters={this.props.filters} onRemove={this.filterOnRemove}
                                     onClear={this.filterOnClear}/>
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
