import React, {Component} from 'react';

import './nf-search-filter.css';

class NfSearchFilter extends Component {
  render() {
    return (
        <div className="search-box">
          <div className="search-box-top">
            <span> Narrow Your Search:</span>
          </div>
          <div className="search-box-bottom">
            <div className="card">
              <div className="card-header" role="tab" id="headingOne">
                <h5 className="mb-0">
                  <a data-toggle="collapse" href="#collapseOne" aria-expanded="true"
                     aria-controls="collapseOne">
                    By Title/Keyword
                  </a>
                </h5>
              </div>

              <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne"
                   data-parent="#accordion">
                <div className="card-body">
                  Old Grannys ringing phone
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default NfSearchFilter;
