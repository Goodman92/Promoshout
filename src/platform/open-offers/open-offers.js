import React, {Component} from 'react';
import {connect} from 'react-redux';
import {requestOffers, selectOffer, refreshOffers, deleteOffers, markSeen} from '../../actions/offers';

import NfOffer from './components/nf-offer';

import './open-offers.css';

class OpenOffers extends Component {

  componentDidMount = () => {
    this.props.dispatch(requestOffers());
  };

  onChecked = (value, id) => {
    this.props.dispatch(selectOffer(value, id));
  };

  onRefresh = () => {
    this.props.dispatch(refreshOffers());
  };

  onDelete = () => {
    this.props.dispatch(deleteOffers());
  };

  onSeen = () => {
    this.props.dispatch(markSeen())
  };

  onNext = () => {
  };


  render() {

    return (
      <div className="container-fluid mt-2">
        <div className="open-offers-container">
          <div className="row mb-1">
            <div className="col-lg-8">
              <h4 className="text-left"> Open offers({this.props.items.length})</h4>
            </div>
            <div className="col-lg-4 text-right">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search"/>
                <span className="input-group-addon platform-btn">Search</span>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-6">
              <div className="action-btn-group">
                <button className="btn btn-white btn-sm" onClick={this.onRefresh}><i className="fa fa-refresh"/> Refresh
                </button>
                <button className="btn btn-white btn-sm" onClick={this.onSeen}><i className="fa fa-eye"/></button>
                <button className="btn btn-white btn-sm" onClick={this.onDelete}><i className="fa fa-trash-o"/></button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="btn-group pull-right">
                <button className="btn btn-white btn-sm"><i className="fa fa-arrow-left"/></button>
                <button className="btn btn-white btn-sm"><i className="fa fa-arrow-right"/></button>
              </div>
            </div>
          </div>
          {
            this.props.items.map((item, index) => (
              <div className="row" key={index}>
                <div className="col-lg-12">
                  <NfOffer offer={item} onChecked={this.onChecked}/>
                </div>
              </div>)
            )}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => state.offers;
export default connect(mapStateToProps)(OpenOffers);
