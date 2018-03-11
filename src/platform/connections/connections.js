import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NfLiftBox} from '../../components/utility/nf-utility';

import './connections.css';

class Connections extends Component {

  render() {
    return (
      <div className="container-fluid mt-2">
        <NfLiftBox header={<span>Connections</span>} content={
          <p> connections!</p>
        }/>
      </div>
    );
  }
}


const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Connections);
