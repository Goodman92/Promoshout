import React, {Component} from 'react';
import Modal from 'react-modal';
import customStyles from './nf-modal-styles.js';
import './nf-modal-offer-summary.css';


class NfModalOfferSummary extends Component {

  render() {
    console.log(this.props.data);
    return (

      <div>
        <h4> Summary </h4>
        <hr />
        
        <h6> Campaign Start Date</h6>
        <p className="modal-prop-content">{this.props.data.date}</p>

        <h6> Campaign Start Time</h6>
        <p className="modal-prop-content">{this.props.data.time}</p>
        
        <h6> Campaign Length</h6>
        <p className="modal-prop-content">{this.props.data.campaignLength}</p>

        <h6> Post Caption</h6>
        <p className="modal-prop-content">{this.props.data.caption}</p>

        <h6> small pic from the img ? </h6>

        <h6> Additional message</h6>
        <p className="modal-prop-content">{this.props.data.message}</p>

        <h6> Total price</h6>
        
        <div className="modal-button-wrapper">
          <input className="gl-button-wrapper" type="submit" value="Send"/>
        </div>
      </div>
    );
  }
}

export default NfModalOfferSummary;
