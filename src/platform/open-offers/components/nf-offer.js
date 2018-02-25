import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, NavLink} from 'react-router-dom';
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
            <Link to={"/open-offers/:id".replace(':id', offer.id)} className="hidden-link">
              <span className="ml-1">{offer.author}</span>
            </Link>
          </div>
          <div className="col-lg-3">
            <Link to={"/open-offers/:id".replace(':id', offer.id)} className="hidden-link">
              <span>made you an 30$ offer</span>
            </Link>
          </div>
          <div className="col-lg-3">
            <Link to={"/open-offers/:id".replace(':id', offer.id)} className="hidden-link">
              <span>{offer.msg}</span></Link>
          </div>
          <div className="col-lg-3 text-right">
            <Link to={"/open-offers/:id".replace(':id', offer.id)} className="hidden-link">
              <span>{GraphTimeController.humanReadableTime(offer.date)}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NfOffer;