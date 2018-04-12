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
            <Link to="/profile"><p className="gl-bold c-dblue">@{this.props.item.username}</p></Link>
          </div>
          <div className="col"><p>{this.suffixedNumber(this.props.item.followers)}</p></div>
          <div className="col"><p>${this.props.item.charge}</p></div>
          <div className="col text-right"><p>{GraphTimeController.humanReadableTime(this.props.item.last_online)}</p></div>
        </div>
      </div>
    );
  }
}

export default NfUserRowPromotion;
