import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NfLiftBox} from '../../components/utility/nf-utility';
import GraphTimeController from '../../components/graph-controller/graph-time-controller';
import NfPagination from '../../components/pagination/nf-pagination';
import {requestTransactions, requestPage} from '../../actions/transactions';

import './bank.css';

class History extends Component {

  componentDidMount = () => {
    this.props.dispatch(requestTransactions(this.props.page));
  };

  onMove = (page) => {
    this.props.dispatch(requestPage(page));
  };

  render() {
    const {page, history} = this.props;

    return (
        <div className="container-fluid mt-2">
          <div className="row mb-2">
            <div className="col-lg-12">
              <NfLiftBox header={
                <p className="text-left mb-0">Transaction history</p>
              } content={
                <div>
                  <div className="row">
                    <div className="col-lg-12">
                      <table className="table table-striped transaction-table">
                        <thead>
                        <tr>
                          <th>
                            Date
                            <span className="fa-stack fa-stacked">
                              <i className="fa fa-caret-up top-caret" aria-hidden="true"/>
                              <i className="fa fa-caret-down bottom-caret" aria-hidden="true"/>
                            </span>
                          </th>
                          <th>Method
                            <span className="fa-stack fa-stacked">
                              <i className="fa fa-caret-up top-caret" aria-hidden="true"/>
                              <i className="fa fa-caret-down bottom-caret" aria-hidden="true"/>
                            </span></th>
                          <th>Type <span className="fa-stack fa-stacked">
                              <i className="fa fa-caret-up top-caret" aria-hidden="true"/>
                              <i className="fa fa-caret-down bottom-caret" aria-hidden="true"/>
                            </span></th>
                          <th>Status <span className="fa-stack fa-stacked">
                              <i className="fa fa-caret-up top-caret" aria-hidden="true"/>
                              <i className="fa fa-caret-down bottom-caret" aria-hidden="true"/>
                            </span></th>
                          <th>Amount <span className="fa-stack fa-stacked">
                              <i className="fa fa-caret-up top-caret" aria-hidden="true"/>
                              <i className="fa fa-caret-down bottom-caret" aria-hidden="true"/>
                            </span></th>
                        </tr>
                        </thead>
                        <tbody>
                        {history.items.map((item, index) => (
                            <tr key={index}>
                              <td>{GraphTimeController.parseFromMoment(item.date)}</td>
                              <td>{item.method}</td>
                              <td>{item.type}</td>
                              <td>{item.status}</td>
                              <td>{item.amount}$</td>
                            </tr>))
                        }
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 pagination-wrapper">
                      <NfPagination pageSize={15} stackSize={() => 160} boxCount={5} move={this.onMove}
                                    page={page}/>
                    </div>
                  </div>
                </div>
              }/>
            </div>
          </div>
        </div>
    );
  }
}


const mapStateToProps = (state) => {
  const {page, transactions} = state.transactions;
  const history = transactions[page] || {items: []};
  return {page, history};
};
export default connect(mapStateToProps)(History);
