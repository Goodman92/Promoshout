import React, {Component} from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import { hideSummary, showSummary } from '../../../actions/offer-modal';
import NfModalOfferContent from './components/nf-modal-offer-content';
import NfModalOfferSummary from './components/nf-modal-offer-summary';
import customStyles from '../nf-modal-styles.js';
import './nf-modal-offer.css';


class NfModalOffer extends Component {

  render() {
    return (
        <Modal
            isOpen={this.props.isModalOpen}
            onRequestClose={this.props.closeModal}
            style={customStyles}
            contentLabel="Modal"
            ariaHideApp={false}>

        <div className="modal-content-wrapper">

          <div className="row modal-steps-wrapper">
            <div className="col">
              <h6>Create</h6>
              <button 
                className={this.props.showSummary ? "offer-step-number" : "offer-step-number offer-step-number-active"}
                onClick={() => this.props.dispatch(hideSummary())}
                >1</button>
            </div>
            <div className="col">
              <h6>Summary</h6>
              <button 
                className={this.props.showSummary ? "offer-step-number offer-step-number-active" : "offer-step-number"}
                onClick={() => this.props.dispatch(showSummary())}
                >2</button>
            </div>
            <div className="col">
              <h6>Success</h6>
              <button className="offer-step-number">3</button>
            </div>
          </div>

          <div className="modal-logo-desktop-wrapper">
            <h3 className="modal-logo-first-part">Promo</h3>
            <h3 className="modal-logo-last-part">shout</h3>
          </div>

            { this.props.showSummary ?
              <NfModalOfferSummary />
              :
              <NfModalOfferContent />
            }
          </div>
        </Modal>
    );
  }
}

const mapStateToProps = (state) => state.offerModal;

export default connect(mapStateToProps)(NfModalOffer);