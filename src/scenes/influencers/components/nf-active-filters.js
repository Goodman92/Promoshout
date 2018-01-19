import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './nf-active-filters.css';

class NfActiveFilters extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const filters = this.props.filters;
    const renderItem = (key, index) => {
      if (filters[key].value)
        return (
            <span key={index} className="selected-filter mr-4">
              <i className="fa fa-times mr-1 pointer" aria-hidden="true"
                 onClick={this.props.onRemove.bind(null, key)}/>
              {filters[key].value}
          </span>
        )
    };

    const renderClear = () => {
      const filtered = Object.keys(filters).reduce((res, key) => {
        if (filters[key].value)
          res.push(filters[key].value);
        return res;
      }, []);
      if (filtered.length)
        return (
            <span className="selected-clear pull-right" onClick={this.props.onClear}> Clear All </span>
        )
    };

    return (
        <div>
          {
            Object.keys(filters).map((key, index) => (
                renderItem(key, index)
            ))
          }
          {
            renderClear()
          }
        </div>
    );
  }
}

export default NfActiveFilters;
