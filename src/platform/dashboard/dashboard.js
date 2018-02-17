import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NfLiftBox} from '../../components/utility/nf-utility';
import {Bar} from 'react-chartjs-2';

import BigCalendar from 'react-big-calendar';
import NfOrderController from './components/nf-order-controller';
import NfRecentFeed from './components/nf-recent-feed';
import Configurations from '../../configurations/configurations';
import GraphTimeController from '../../components/graph-controller/graph-time-controller';

import './dashboard.css';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));


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
                <span> Recent Feed</span>
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
                <Bar data={data} options={options} height={50}/>
              }/>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-lg-12">
              <NfLiftBox header={
                <span> Your Calendar</span>
              } content={
                <div className="row">
                  <div className="col-lg-12">
                    <BigCalendar
                        selectable
                        events={[]}
                        defaultView="week"
                        scrollToTime={new Date(1970, 1, 1, 6)}
                        defaultDate={new Date(2015, 3, 12)}
                        onSelectEvent={event => console.log(event.title)}
                        onSelectSlot={slotInfo => console.log(slotInfo)}/>
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
