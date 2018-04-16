import React, {Component} from 'react';
import Modal from 'react-modal';
import customStyles from './nf-modal-styles.js';
import './nf-modal-register-influencer.css';


class NfModalInfluencerRegistration extends Component {

  render() {
    return (
        <Modal
            isOpen={this.props.isModalOpen}
            onRequestClose={this.props.closeModal}
            style={customStyles}
            contentLabel="Modal"
            ariaHideApp={false}>
          <div>
            <div className="modal-logo-desktop-wrapper">
              <h2 className="modal-logo-first-part">Promo</h2><h2 className="modal-logo-last-part">shout</h2>
            </div>
            <div className="gl-align-center">
              <button type="button" className="gl-insta-button"><i className="fa fa-instagram left"/> Sign In With
                Instagram
              </button>
            </div>
          </div>
        </Modal>
    );
  }
}

export default NfModalInfluencerRegistration;
