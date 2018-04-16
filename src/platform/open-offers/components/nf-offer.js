import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GraphTimeController from '../../../components/graph-controller/graph-time-controller';
import {NfCheckbox, NfStatusBadge} from '../../../components/utility/nf-utility';

import './nf-offer.css';

class NfOffer extends Component {

  onChange = (value) => {
    if(this.props.offer.status !== 'pending')
      this.props.onChecked(value, this.props.offer.id);
  };
  render() {
    const {offer, type} = this.props;

    const cursorClass = () => {
      return offer.status === 'pending' ? 'disabled-offer' : '';
    };

    const isUnRead = (value) => {
      return value ? 'unread' : '';
    };

    return (
      <div className={["offer-item", isUnRead(offer.read)].join(" ")}>
        <div className="row">
          <div className="col-lg-4">
            <NfCheckbox handleChange={this.onChange} item={offer} className={cursorClass()}/>
            <Link to={"/platform/offers/details/:id".replace(':id', offer.id)} className="hidden-link">
              <p className="d-inline ml-1">{offer.author}</p>
            </Link>
          </div>
          <div className="col-lg-5">
            <Link to={"/platform/offers/details/:id".replace(':id', offer.id)} className="hidden-link">
              <div className="items-center">
                <span className="mr-2">{offer.msg}</span>
                { !type ? <NfStatusBadge status={offer.status}/> : ""}
              </div>
            </Link>
          </div>
          <div className="col-lg-3 text-right">

            <Link to={"/platform/offers/details/:id".replace(':id', offer.id)} className="hidden-link">
              <span className="c-light-grey">{GraphTimeController.humanReadableTime(offer.date)}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NfOffer;