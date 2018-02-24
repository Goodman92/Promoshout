import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NfLiftBox} from '../../components/utility/nf-utility';
import './open-offers.css';


class OpenOffers extends Component {

  render() {

    return (
        <div className="container-fluid mt-2">
          <p> foo </p>
        </div>
    );
  }
}


const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(OpenOffers);
