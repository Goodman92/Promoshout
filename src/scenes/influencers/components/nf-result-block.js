import React, {Component} from 'react';
import NfUserPromotion from './user-promotion/nf-user-promotion';

import './nf-result-block.css';

class NfResultBlock extends Component {

  constructor(props) {
    super(props);
    this.mock = [
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
        username: 'Näyttelyauto',
        last_online: '2018-01-16 20:44',
        charge: 100,
        followers: 33,
        published: 500,
        description: 'My target audience is bicycles'
      },
      {
        category: 'Free time',
        username: 'Pyörävaras',
        last_online: '2016-10-10',
        charge: 50,
        followers: 1200,
        published: 50,
        description: 'Guaranteed +100% ROI'
      },
      {
        category: 'Music',
        username: 'Roristi',
        last_online: '2016-10-10',
        charge: 300,
        followers: 120495,
        published: 3000,
        description: 'Dem music'
      },
    ];
  };

  render() {
    return (
        <div>
          <div className="row">
            <div className="col-lg-12 text-right">
              <h6> 1,997,263 Results</h6>
            </div>
          </div>
          <div className="row">
            {
              this.mock.map((item, index) => (
                  <div className="col-lg-4 col-xs-12 mb-4" key={index}>
                    <NfUserPromotion item={item}/>
                  </div>
              ))
            }
          </div>
        </div>
    );
  }
}

export default NfResultBlock;
