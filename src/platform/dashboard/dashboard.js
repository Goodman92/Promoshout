import React, {Component} from 'react';
import {NfLiftBox} from '../../components/utility/nf-utility';
import {Bar} from 'react-chartjs-2';


class Dashboard extends Component {

  render() {
    const data = [{x:'2016-12-25', y:20}, {x:'2016-12-26', y:10}];

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
          <div className="row">
            <div className="col-lg-12">
              <Bar data={data} height={100}/>
            </div>
          </div>
        </div>
    );
  }
}

export default Dashboard;
