import React, {Component} from 'react';
import NfUserPromotion from './user-promotion/nf-user-promotion';
import NfUserRowPromotion from './user-promotion/nf-user-row-promotion';
import NfPagination from '../../../components/pagination/nf-pagination';
import NfTwoStateToggle from '../../../components/two-state-toggle/nf-two-state-toggle';

import './nf-result-block.css';

class NfResultBlock extends Component {

  constructor(props) {
    super(props);
    this.state = {grid: true};
  };

  move = (page) => {
    this.props.onPageChange(page);
  };

  onToggleChange = (curState) => {
    this.setState({grid: curState});
  };

  render() {
    const {data} = this.props;

    const headerRow = () => {
      return (
          <div className="col-lg-12" key={'rbhr'}>
            <div className="result-header-row">
              <div className="row">
                <div className="col">Instagram</div>
                <div className="col">Followers</div>
                <div className="col">Charge</div>
                <div className="col text-right">Last online</div>
              </div>
            </div>
          </div>
      )
    };

    const displayGrid = () => {
      return data.items.map((item, i) => (
          <div className="col-lg-4 col-xs-12 mb-4" key={i}>
            <NfUserPromotion item={item}/>
          </div>
      ))
    };

    const displayList = () => {
      return [headerRow()].concat(data.items.map((item, i) => (
          <div className="col-lg-12 user-promotion-row-wrapper" key={i}>
            <NfUserRowPromotion item={item}/>
          </div>
      )));
    };

    const display = () => {
      if (this.state.grid)
        return displayList();
      return displayGrid();
    };

    return (
        <div>
          <div className="row result-top-block">
            <div className="col-lg-6 text-left">
              <h6> ??? Results</h6>
            </div>
            <div className="col-lg-6 text-right result-toggle">
              <h6>
                View as {this.state.grid ? 'list' : 'grid'}
                <NfTwoStateToggle first={<i className="fa fa-th-large"/>} second={<i className="fa fa-reorder"/>}
                                  active={this.state.grid} toggleChange={this.onToggleChange}/>
              </h6>
            </div>
          </div>
          <div className="row result-items-wrapper">
            { display() }
          </div>
          <div className="row">
            <div className="col-lg-12 pagination-wrapper">
              <NfPagination pageSize={16} stackSize={() => 160} boxCount={5} move={this.move}/>
            </div>
          </div>
        </div>
    );
  }
}

export default NfResultBlock;
