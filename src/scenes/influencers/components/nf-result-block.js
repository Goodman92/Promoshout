import React, {Component} from 'react';
import NfUserPromotion from './user-promotion/nf-user-promotion';
import NfUserRowPromotion from './user-promotion/nf-user-row-promotion';
import NfPagination from '../../../components/pagination/nf-pagination';
import NfTwoStateToggle from '../../../components/two-state-toggle/nf-two-state-toggle';

import './nf-result-block.css';

class NfResultBlock extends Component {

  constructor(props) {
    super(props);
    let mock = [
      {
        category: 'Cars',
        username: 'Showcar',
        last_online: '2018-01-16',
        charge: 300,
        followers: 120495,
        published: 3000,
        description: 'Best times during 10AM'
      },
      {
        category: 'Design',
        username: 'Designer123',
        last_online: '2018-01-16 20:44',
        charge: 100,
        followers: 33,
        published: 500,
        description: 'My target audience is bicycles'
      },
      {
        category: 'Free time',
        username: 'leiZureguY',
        last_online: '2016-10-10',
        charge: 50,
        followers: 1200,
        published: 50,
        description: 'Guaranteed +100% ROI'
      },
      {
        category: 'Music',
        username: 'bigPumpz',
        last_online: '2016-10-10',
        charge: 300,
        followers: 120495,
        published: 3000,
        description: 'Dem music'
      },
    ];
    for (let i = 0; i < 4; i++)
      mock = mock.concat(mock);
    this.mock = mock;
    this.state = {
      page: 1,
      grid: true
    };
  };

  move = (page) => {
    this.setState({page: page});
  };

  onToggleChange = (curState) => {
    this.setState({grid: curState});
  };

  render() {

    const headerRow = () => {
      return (
        <div className="col-lg-12">
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
      const first = this.state.page * 5;
      return Array.from(Array(9).keys(), (_, i) => (
        <div className="col-lg-4 col-xs-12 mb-4" key={i + first}>
          <NfUserPromotion item={this.mock[i + first]}/>
        </div>
      ));
    };

    const displayList = () => {
      const first = this.state.page * 5;
      return [headerRow()].concat(Array.from(Array(30).keys(), (_, i) => (
        <div className="col-lg-12 user-promotion-row-wrapper" key={i + first}>
          <NfUserRowPromotion item={this.mock[i + first]}/>
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
            <h6> {this.mock.length} Results</h6>
          </div>
          <div className="col-lg-6 text-right result-toggle">
            <h6>
              View as {this.state.grid ? 'list' : 'grid'}
              <NfTwoStateToggle first={<i className="fa fa-th-large"/>}
                                second={<i className="fa fa-reorder"/>}
                                active={this.state.grid} toggleChange={this.onToggleChange}/>
            </h6>
          </div>
        </div>
        <div className="row result-items-wrapper">
          { display() }
        </div>
        <div className="row">
          <div className="col-lg-12 pagination-wrapper">
            <NfPagination data={this.mock} pageSize={9} stackSize={() => this.mock.length}
                          boxCount={5} move={this.move}/>
          </div>
        </div>
      </div>
    );
  }
}

export default NfResultBlock;
