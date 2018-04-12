import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NfLiftBox} from '../../components/utility/nf-utility';
import {Bar} from 'react-chartjs-2';
import NfOrderController from './components/nf-order-controller';
import NfRecentFeed from './components/nf-recent-feed';
import NfBookings from './components/nf-bookings';
import Configurations from '../../configurations/configurations';
import GraphTimeController from '../../components/graph-controller/graph-time-controller';

import './dashboard.css';


class Dashboard extends Component {

  render() {
    const props = this.props;
    const data = Configurations.dealGraphData();
    const options = Configurations.dealGraphOptions();
    data.labels = GraphTimeController.buildTimeAxisFromDate(props.mode, props.date, props.units);

    return (
        <div className="container-fluid mt-2">
          <div className="row">
            <div className="col-lg-3">
              <NfLiftBox header={<h6> Deals made </h6>} content={
                <p className="text-center rbc-p-content">
                  22
                </p>
              }/>
            </div>
            <div className="col-lg-3">
              <NfLiftBox header={<h6> Open Offers</h6>} content={
                <p className="text-center rbc-p-content">
                  1
                </p>
              }/>
            </div>
            <div className="col-lg-3">
              <NfLiftBox header={<h6> All Time Profit/Cost</h6>} content={
                <p className="text-center rbc-p-content">
                  $300
                </p>
              }/>
            </div>
            <div className="col-lg-3">
              <NfLiftBox header={<h6> Money in Reserve</h6>} content={
                <p className="text-center rbc-p-content">
                  $5
                </p>
              }/>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-lg-12">
              <NfLiftBox header={
                <h6> Activity</h6>
              } content={
                <div className="row">
                  <div className="col-lg-12">
                    <NfRecentFeed/>
                  </div>
                </div>
              }/>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-lg-12">
              <NfLiftBox header={
                <div className="row ai-center">
                  <div className="col-lg-6">
                    <h6> Deal history</h6>
                  </div>
                  <div className="col-lg-6 text-right">
                    <NfOrderController/>
                  </div>
                </div>
              } content={
                <Bar data={data} options={options} height={50} dataKey={"orderChart"}/>
              }/>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-lg-12">
              <NfLiftBox header={
                <h6> Your Bookings</h6>
              } content={
                <div className="row">
                  <div className="col-lg-12">
                    <NfBookings/>
                  </div>
                </div>
              }/>
            </div>
          </div>
        </div>
    );
  }
}


const mapStateToProps = (state) => state.orders;
export default connect(mapStateToProps)(Dashboard);
