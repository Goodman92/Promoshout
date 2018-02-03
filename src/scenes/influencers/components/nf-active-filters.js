import React, {Component} from 'react';
import './nf-active-filters.css';

class NfActiveFilters extends Component {

  render() {
    const filters = this.props.filters;

    const renderItems = () => {
      const items = [];
      Object.keys(filters).map((key, index) => {
        if (filters[key].value)
          items.push(renderItem(key, index));
        if (filters[key].value_max || filters[key].value_min)
          items.push(renderRangeItem(key, index));
      });
      if (items.length)
        items.push(<span className="selected-clear pull-right" onClick={this.props.onClear} key={"f"}>Clear All</span>);
      return items;
    };

    const renderItem = (key, index) => {
      return (
          <span key={index} className="selected-filter mr-4">
              <i className="fa fa-times mr-1 pointer" aria-hidden="true" onClick={this.props.onRemove.bind(null, key)}/>
            {filters[key].label}: {filters[key].value}
          </span>
      )
    };

    const renderRangeItem = (key, index) => {
      return (
          <span key={index} className="selected-filter mr-4">
              <i className="fa fa-times mr-1 pointer" aria-hidden="true" onClick={this.props.onRemove.bind(null, key)}/>
            {filters[key].label}: {filters[key].value_min || 0}-{filters[key].value_max || '∞'}
          </span>
      )
    };

    return (
        <div className="clearfix">
          { renderItems() }
        </div>
    );
  }
}

export default NfActiveFilters;
