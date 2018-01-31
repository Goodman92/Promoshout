import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './nf-general-search.css';
class NfGeneralSearch extends Component {

  static propTypes = {
    filters: PropTypes.object.isRequired,
    filtersOnUpdate: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {...props.filters};
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.filtersOnUpdate(this.state);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({...nextProps.filters});
  };

  render() {
    const filters = this.state;
    const optionMock = ['Fitness', 'Sports', 'Animals', 'Traveling', 'Stuff', 'More stuff'];

    return (
        <form onSubmit={this.onSubmit}>
          <div className="general-search">
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-bullhorn" aria-hidden="true"/></span>
              <input type="text" className="form-control" placeholder="What are you looking for? Try"
                     value={filters.q.value} onChange={(e) => this.setState({q: {...filters.q, value: e.target.value}})}/>
            </div>
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-tags" aria-hidden="true"/></span>
              <select type="text" className="form-control" placeholder="Category" value={filters.category.value}
                      onChange={(e) => this.setState({category: {...filters.category, value: e.target.value}})}>
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
