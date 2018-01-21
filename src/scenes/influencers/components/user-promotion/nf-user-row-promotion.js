import React, {Component} from 'react';
import './nf-user-promotion.css';
import moment from 'moment'

class NfUserRowPromotion extends Component {

  constructor(props) {
    super(props);
    this.index = Math.floor(Math.random() * 20) + 1;
  }

  humanReadableTime = (time) => {
    return moment(time).fromNow();
  };

  suffixedNumber = (number) => {
    return number > 999 ? (number / 1000).toFixed(1) + 'k' : number;
  };

  render() {
    return (
      <div className="user-promotion-row">
        <div className="row">
          <div className="col">
            <a href="">@{this.props.item.username}</a>
          </div>
          <div className="col">{this.suffixedNumber(this.props.item.followers)}</div>
          <div className="col">${this.props.item.charge}</div>
          <div className="col text-right">{this.humanReadableTime(this.props.item.last_online)}</div>
        </div>
      </div>
    );
  }
}

export default NfUserRowPromotion;
