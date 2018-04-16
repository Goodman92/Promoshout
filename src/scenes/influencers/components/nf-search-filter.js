import React, { Component } from "react";

import NfCollapseItem from "../../../components/collapse-item/nf-collapse-item";

import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

import "./nf-search-filter.css";

class NfSearchFilter extends Component {

  onSubmit = e => {
    e.preventDefault();
    this.props.filtersOnUpdate(this.state);
  };

  handlePriceMinChange = (values) =>  {
    this.props.filtersOnUpdate({price: {...this.props.filters.price, value_min: values.target.value}});
  };
  handlePriceMaxChange = (values) =>  {
    this.props.filtersOnUpdate({price: {...this.props.filters.price, value_max: values.target.value}});
  };
  handleLocationChange = (values) =>  {
    this.props.filtersOnUpdate({location: {...this.props.filters.location, value: values.target.value}});
  };
  handleFollowerChange = (values) =>  {
    this.props.filtersOnUpdate({followers: {...this.props.filters.followers, value_min: values[0], value_max: values[1]}});
  };
  handleEngagementChange = (values) =>  {
    this.props.filtersOnUpdate({rate: {...this.props.filters.rate, value_min: values[0], value_max: values[1] }});
  };
  handleAgeChange = (values) =>  {
    this.props.filtersOnUpdate({age: {...this.props.filters.age, value: values.target.value }});
  };

  render() {
    const filters = this.props.filters;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="search-box">
          <div className="search-box-top">
            <h5 className="c-white mb-0"> Narrow Your Search </h5>
          </div>
          <div className="search-box-bottom">
            <NfCollapseItem
              toggle="3"
              header={<h6 className="c-darker-grey d-inline"> By Price Range </h6>}
              content={
                <div className="input-group">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="min"
                    value={filters.price.value_min}
                    onChange={this.handlePriceMinChange}
                  />
                  <span className="input-group-addon">-</span>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="max"
                    value={filters.price.value_max}
                    onChange={this.handlePriceMaxChange}
                  />
                </div>
              }
            />

            <NfCollapseItem
              toggle="4"
              header={<h6 className="c-darker-grey d-inline"> By Estimated Audience Location </h6>}
              content={
                <select
                  className="form-control"
                  value={filters.location.value}
                  onChange={this.handleLocationChange}
                >
                  <option value="Finland"> Finland</option>
                  <option value="Sweden"> Sweden</option>
                  <option value="Norway"> Norway</option>
                </select>
              }
            />
            <NfCollapseItem
              toggle="5"
              header={<h6 className="c-darker-grey d-inline"> By Followers </h6>}
              content={
                <div>
                  <div className="row">
                    <div className="col">
                       <p> {filters.followers.value_min || 0} </p>
                    </div>
                    <div className="col text-right">
                       <p> {filters.followers.value_max || 100000} </p>
                    </div>
                  </div>
                  <Range
                    max={100000}
                    defaultValue={[0, 100000]}
                    onChange={this.handleFollowerChange}
                  />
                </div>
              }
            />
            <NfCollapseItem
              toggle="6"
              header={<h6 className="c-darker-grey d-inline"> By Engagement Rate </h6>}
              content={
                <div>
                  <div className="row">
                    <div className="col">
                       <p> {filters.rate.value_min || 0} </p>
                    </div>
                    <div className="col text-right">
                       <p> {filters.rate.value_max || 100} </p>
                    </div>
                  </div>
                  <Range
                    defaultValue={[0, 100]}
                    onChange={this.handleEngagementChange}
                  />
                </div>
              }
            />
            <NfCollapseItem
              toggle="8"
              header={<h6 className="c-darker-grey d-inline"> By Age </h6>}
              content={
                <select
                  className="form-control"
                  value={filters.age.value}
                  onChange={this.handleAgeChange}
                >
                  <option />
                  <option value="10+"> 10+</option>
                  <option value="15+"> 15+</option>
                  <option value="18+"> 18+</option>
                  <option value="25+"> 25+</option>
                  <option value="30+"> 30+</option>
                  <option value="40+"> 40+</option>
                  <option value="50+"> 50+</option>
                  <option value="60+"> 60+</option>
                </select>
              }
            />
          </div>
          <div className="search-box-apply">
            <button type="submit" className="btn btn-success btn-apply">
              Apply filters
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default NfSearchFilter;
