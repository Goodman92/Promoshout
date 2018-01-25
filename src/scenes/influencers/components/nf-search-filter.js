import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NfCollapseItem from '../../../components/collapse-item/nf-collapse-item';
import NfIconInput from '../../../components/icon-input/nf-icon-input';
import NfSliderInput from '../../../components/slider-input/nf-slider-input';

import './nf-search-filter.css';

class NfSearchFilter extends Component {

  static propTypes = {
    filters: PropTypes.object.isRequired,
    filtersOnUpdate: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {...props.filters};
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({...nextProps.filters});
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.filtersOnUpdate(this.state);
  };

  onFollowerChange = (values) => {
    this.setState({followers: {...values}});
  };

  onRateChange = (values) => {
    this.setState({rate: {...values}});
  };

  render() {
    const filters = this.state;
    return (
        <form onSubmit={this.onSubmit}>
          <div className="search-box">
            <div className="search-box-top">
              <span> Narrow Your Search </span>
            </div>
            <div className="search-box-bottom">
              <NfCollapseItem toggle="3" header={
                <span> By Price Range </span>
              } content={
                <div>
                  <NfIconInput icon="fa fa-usd" styles="mb-1">
                    <input className="form-control" placeholder="Min Price" value={filters.price.value_min}
                           type="number"
                           onChange={(e) => this.setState({price: {...filters.price, value_min: e.target.value}})}/>
                  </NfIconInput>
                  < NfIconInput icon="fa fa-usd">
                    <input className="form-control" placeholder="Max Price" value={filters.price.value_max}
                           type="number"
                           onChange={(e) => this.setState({price: {...filters.price, value_max: e.target.value}})}/>
                  </NfIconInput>
                </div>
              }/>

              <NfCollapseItem toggle="4" header={
                <span> By Location </span>
              } content={
                <select className="form-control" value={filters.location.value}
                        onChange={(e) => this.setState({location: {value: e.target.value}})}>
                  <option value="Finland"> Finland</option>
                  <option value="Sweden"> Sweden</option>
                  <option value="Norway"> Norway</option>
                </select>
              }/>

              <NfCollapseItem toggle="5" header={
                <span> By Followers </span>
              } content={
                <NfSliderInput minValue={filters.followers.min_value} maxValue={filters.followers.max_value}
                               onChange={this.onFollowerChange}/>
              }/>

              <NfCollapseItem toggle="6" header={
                <span> By Engagement Rate </span>
              } content={
                <NfSliderInput minValue={filters.rate.min_value} maxValue={filters.rate.max_value}
                               onChange={this.onRateChange}/>
              }/>

              <NfCollapseItem toggle="8" header={
                <span> By Average age </span>
              } content={
                <select className="form-control" value={filters.age.value}
                        onChange={(e) => this.setState({age: {value: e.target.value}})}>
                  <option/>
                  <option value="10+"> 10+</option>
                  <option value="15+"> 15+</option>
                  <option value="18+"> 18+</option>
                  <option value="25+"> 25+</option>
                  <option value="30+"> 30+</option>
                  <option value="40+"> 40+</option>
                  <option value="50+"> 50+</option>
                  <option value="60+"> 60+</option>
                </select>
              }/>

            </div>
            <div className="search-box-apply">
              <button type="submit" className="btn btn-success btn-apply"> Apply filters
              </button>
            </div>
          </div>
        </form>
    );
  }
}

export default NfSearchFilter;

