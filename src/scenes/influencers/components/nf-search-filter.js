import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NfCollapseItem from '../../../components/collapse-item/nf-collapse-item';
import NfIconInput from '../../../components/icon-input/nf-icon-input';
import NfSliderInput from '../../../components/slider-input/nf-slider-input';

import './nf-search-filter.css';

// Could this be more dynamical
class NfSearchFilter extends Component {

  static propTypes = {
    filters: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    //console.log("NfSearchFilter constructor");
    //console.log(props);
  }

  onChange = (value) => {
    this.props.filterOnChange(value);
  };

  componentWillReceiveProps(nextProps) {
    //console.log("NfSearchFilter will receive props");
    //console.log(nextProps);
  };

  applyOnClick = () => {

  };

  render() {

    const getFormValue = (key) => {
    };

    const setFormValue = () => {

    };

    return (
      <div className="search-box">
        <div className="search-box-top">
          <span> Narrow Your Search</span>
        </div>
        <div className="search-box-bottom">
          <NfCollapseItem toggle="1" header={
            <span> By Title/keyword </span>
          } content={
            <NfIconInput icon="fa fa-search">
              <input className="form-control" placeholder="Title/Keyword" value={getFormValue('q')}
                     onChange={(e) => this.onChange({q: e.target.value})}/>
            </NfIconInput>
          }/>
          <NfCollapseItem toggle="2" header={
            <span> By Category </span>
          } content={
            <select className="form-control" onChange={(e) => this.onChange({category: e.target.value})}>
              <option value="Fitness"> Fitness</option>
              <option value="Stuff"> Stuff</option>
              <option value="Other"> Other</option>
            </select>
          }/>
          <NfCollapseItem toggle="3" header={
            <span> By Price Range </span>
          } content={
            <div>
              <NfIconInput icon="fa fa-usd" styles="mb-1">
                <input className="form-control" placeholder="Min Price"/>
              </NfIconInput>
              < NfIconInput icon="fa fa-usd">
                <input className="form-control" placeholder="Max Price"/>
              </NfIconInput>
            </div>
          }/>
          <NfCollapseItem toggle="4" header={
            <span> By Location </span>
          } content={
            <select className="form-control" onChange={(e) => this.onChange({country: e.target.value})}>
              <option value="Finland"> Finland</option>
              <option value="Sweden"> Sweden</option>
              <option value="Norway"> Norway</option>
            </select>
          }/>
          <NfCollapseItem toggle="5" header={
            <span> By Followers </span>
          } content={
            <NfSliderInput/>
          }/>
          <NfCollapseItem toggle="6" header={
            <span> By Engagement Rate </span>
          } content={
            <NfSliderInput/>
          }/>
          <NfCollapseItem toggle="8" header={
            <span> By Average age </span>
          } content={
            <select className="form-control" onChange={(e) => this.onChange({age: e.target.value})}>
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
          <button type="button" className="btn btn-success btn-apply" onClick={this.applyOnClick}> Apply filters
          </button>
        </div>
      </div>
    );
  }
}

export default NfSearchFilter;

