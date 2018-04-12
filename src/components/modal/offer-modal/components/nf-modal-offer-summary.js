import React, {Component} from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import { hideSummary } from '../../../../actions/offer-modal';
import customStyles from '../../nf-modal-styles.js';
import './nf-modal-offer-summary.css';


class NfModalOfferSummary extends Component {

  render() {
    const campaignForm = this.props.campaignForm;

    return (

      <div>
        <h4> Summary </h4>
        <hr />
        
        <h6> Campaign Start Date</h6>
        <p className="modal-prop-content">{campaignForm.date}</p>

        <h6> Campaign Start Time</h6>
        <p className="modal-prop-content">{campaignForm.time}</p>
        
        <h6> Campaign Length</h6>
        {/*<p className="modal-prop-content">{campaignForm.campaignLength}</p>*/}
        <p className="modal-prop-content">kova koodattu</p>

        <h6> Post Caption</h6>
        <p className="modal-prop-content">{campaignForm.caption}</p>

        <h6> Additional message</h6>
        <p className="modal-prop-content">{campaignForm.message}</p>

        <h6>Total price</h6>
        <p className="modal-prop-content">kova koodattu</p>

        { campaignForm.imagePreviewUrl ?
            <div className="gl-align-center">
                <img width={'150px'} height={'150px'} src={campaignForm.imagePreviewUrl} />
            </div>
            :
            <div>Please select an Image for Preview</div>
        }

        <div className="modal-summary-button-wrapper">
          <button className="offer-modal-button-wrapper modal-summary-back-button" onClick={() => this.props.dispatch(hideSummary())}>
            <i className="fa fa-angle-left fa-2x"></i>
          </button>
          <input className="offer-modal-button-wrapper modal-summary-send-button" type="submit" value="Send" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.offerModal;

export default connect(mapStateToProps)(NfModalOfferSummary);