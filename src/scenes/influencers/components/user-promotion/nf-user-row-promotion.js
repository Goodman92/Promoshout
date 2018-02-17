import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GraphTimeController from '../../../../components/graph-controller/graph-time-controller';
import './nf-user-promotion.css';


class NfUserRowPromotion extends Component {

  constructor(props) {
    super(props);
    this.index = Math.floor(Math.random() * 20) + 1;
  }

  suffixedNumber = (number) => {
    return number > 999 ? (number / 1000).toFixed(1) + 'k' : number;
  };

  render() {
    return (
      <div className="user-promotion-row">
        <div className="row">
          <div className="col">
            <Link to="/profile">@{this.props.item.username}</Link>
          </div>
          <div className="col">{this.suffixedNumber(this.props.item.followers)}</div>
          <div className="col">${this.props.item.charge}</div>
          <div className="col text-right">{GraphTimeController.humanReadableTime(this.props.item.last_online)}</div>
        </div>
      </div>
    );
  }
}

export default NfUserRowPromotion;
