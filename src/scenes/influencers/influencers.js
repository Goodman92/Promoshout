import React, {Component} from 'react';
import NfGeneralSearch from './components/nf-general-search';
import NfSearchFilter from './components/nf-search-filter';
import NfResultBlock from './components/nf-result-block';

import './influencers.css';

class Influencers extends Component {
  render() {
    return (
        <div className="page-wrapper">
          <div className="influencers-wrapper">
            <div className="container">
              <div className="row pt-5 pb-5">
                <div className="col-lg-12">
                  <NfGeneralSearch/>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-right">
                <h6> 1,97,263 Results</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-xs-12">
                <NfSearchFilter/>
              </div>
              <div className="col-lg-9 col-xs-12">
                <NfResultBlock/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Influencers;
