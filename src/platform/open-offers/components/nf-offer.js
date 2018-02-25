import React, {Component} from 'react';
import {connect} from 'react-redux';
import GraphTimeController from '../../../components/graph-controller/graph-time-controller';

import './nf-offer.css';

class NfOffer extends Component {

  handleChange = (e) => {
    this.props.onChecked(e.target.checked, this.props.offer.id);
  };

  render() {
    const {offer} = this.props;

    const isUnRead = (value) => {
      return value ? 'unread' : '';
    };

    return (
      <div className={["offer-item", isUnRead(offer.read)].join(" ")}>
        <div className="row">

          <div className="col-lg-3">
            <div className="checkboxFive">
              <input type="checkbox" name="" id={offer.id + 'checkBox'}
                     onChange={this.handleChange} checked={offer.selected} value={offer.selected}/>
              <label htmlFor={offer.id + 'checkBox'}/>
            </div>
            <span className="ml-1">{offer.author}</span>
          </div>

          <div className="col-lg-3">
            <span>made you an 30$ offer</span>
          </div>

          <div className="col-lg-3">
            <span>{offer.msg}</span>
          </div>

          <div className="col-lg-3 text-right">
            <span>{GraphTimeController.humanReadableTime(offer.date)}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default NfOffer;