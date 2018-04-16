import React, {Component} from 'react';
import {connect} from 'react-redux';
import {connectionMocks, connectionRequestMocks} from '../../mock-data';
import {NfLiftBox} from '../../components/utility/nf-utility';
import NfConnectionCard from './components/nf-connection-card';
import NfConnectionRequest from './components/nf-connection-request';

import './connections.css';

class Connections extends Component {

  render() {
    return (
        <div className="container-fluid mt-2">
          <div className="row">
            <div className="col-lg-12">
              <NfLiftBox header={<h5>Connection requests ({connectionRequestMocks.length})</h5>} content={
                <div className="connection-requests">
                  {
                    connectionRequestMocks.map((item, index) => (
                        <NfConnectionRequest {...item}/>
                    ))
                  }
                  {!!connectionRequestMocks.length ? "" : <p className="text-muted"> No new requests </p> }
                </div>
              }/>
            </div>
          </div>
          <div className="row mt-2">
            {
              connectionMocks.map((item, index) => (
                  <div className="col-lg-4" key={index}>
                    <NfConnectionCard {...item}/>
                  </div>
              ))
            }
          </div>
        </div>
    );
  }
}


const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Connections);
