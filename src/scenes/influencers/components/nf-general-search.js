import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './nf-general-search.css';
class NfGeneralSearch extends Component {

  onSubmit = (e) => {
    e.preventDefault();
    this.props.filtersOnUpdate(this.state);
  };

  handleCategoryChange = (values) => {
    this.props.filtersOnUpdate({category: {...this.props.filters.category, value: values.target.value}});
  };

  handleInputChange = (values) =>  {
    this.props.filtersOnUpdate({q: {...this.props.filters.q, value: values.target.value}});
  };

  render() {
    const filters = this.props.filters;
    const optionMock = ['Fitness', 'Sports', 'Animals', 'Traveling', 'Stuff', 'More stuff'];
    return (
        <form onSubmit={this.onSubmit}>
          <div className="general-search">
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-bullhorn" aria-hidden="true"/></span>
              <input maxLength="30" type="text" className="form-control" placeholder="What are you looking for? Try"
                     value={filters.q.value} onChange={this.handleInputChange}/>
            </div>
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-tags" aria-hidden="true"/></span>
              <select type="text" className="form-control" placeholder="Category" value={filters.category.value}
                      onChange={this.handleCategoryChange}>
                <option value="">Select Category</option>
                {optionMock.map((item, index) => (
                    <option key={index} value={item}> {item}</option>
                ))}
              </select>
            </div>
            <span className="input-group-btn">
            <button className="btn btn-success pull-right" type="submit">Search now</button>
          </span>
          </div>
        </form>
    );
  }
}

export default NfGeneralSearch;
