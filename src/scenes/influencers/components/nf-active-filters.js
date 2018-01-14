import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './nf-active-filters.css';

class NfActiveFilters extends Component {

  componentWillReceiveProps(nextProps) {
  };

  render() {
    const filters = this.props.filters;
    const renderItem = (key, index) => {
      if (filters[key])
        return (
          <span key={index} className="selected-filter mr-4">
              <i className="fa fa-times mr-1 pointer" aria-hidden="true"
                 onClick={this.props.onRemove.bind(null, filters[key])}/>
            {filters[key]}
          </span>
        )
    };
    return (
      <div>
        {
          Object.keys(this.props.filters).map((key, index) => (
            renderItem(key, index)
          ))
        }
        <span className="selected-clear"> Clear All </span>
      </div>
    );
  }
}


export default NfActiveFilters;
