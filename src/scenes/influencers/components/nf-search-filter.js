import React, {Component} from 'react';
import NfCollapseItem from '../../../components/collapse-item/nf-collapse-item';
import NfIconInput from '../../../components/icon-input/nf-icon-input';
import NfSliderInput from '../../../components/slider-input/nf-slider-input';

import './nf-search-filter.css';

class NfSearchFilter extends Component {
  render() {

    return (
      <div className="search-box">
        <div className="search-box-top">
          <span> Narrow Your Search:</span>
          <NfSliderInput/>
        </div>
        <div className="search-box-bottom">
          <NfCollapseItem toggle="1" header={
            <span> By Title/keyword </span>
          } content={
            <NfIconInput icon="fa fa-search">
              <input className="form-control" placeholder="Title/Keyword"/>
            </NfIconInput>
          }/>
          <NfCollapseItem toggle="2" header={
            <span> By Category </span>
          } content={
            <select className="form-control">
              <option> Fitness </option>
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
            <select className="form-control">
              <option> Finland</option>
            </select>
          }/>
          <NfCollapseItem toggle="5" header={
            <span> By Followers </span>
          } content={
            <span> Forth </span>
          }/>
          <NfCollapseItem toggle="6" header={
            <span> By Engagement Rate </span>
          } content={
            <span> Forth </span>
          }/>
          <NfCollapseItem toggle="8" header={
            <span> By Average age </span>
          } content={
            <select className="form-control">
              <option> 18+</option>
            </select>
          }/>
        </div>
      </div>
    );
  }
}

export default NfSearchFilter;
