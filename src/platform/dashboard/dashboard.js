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
              <NfLiftBox header={<span> Deals made through Promoshout</span>} content={
                <h3 className="text-center">
                  22
                </h3>
              }/>
            </div>
            <div className="col-lg-3">
              <NfLiftBox header={<span> Open Offers</span>} content={
                <h3 className="text-center">
                  1
                </h3>
              }/>
            </div>
            <div className="col-lg-3">
              <NfLiftBox header={<span> All Time Profit/Cost</span>} content={
                <h3 className="text-center">
                  $300
                </h3>
              }/>
            </div>
            <div className="col-lg-3">
              <NfLiftBox header={<span> Money in Reserve</span>} content={
                <h3 className="text-center">
                  $5
                </h3>
              }/>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-lg-12">
              <NfLiftBox header={
                <span> Activity</span>
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
                    <span> Deal history</span>
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
                <span> Your Bookings</span>
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
