import React, {Component} from 'react';
import Modal from 'react-modal';
import './nf-modal-register-influencer.css';

const customStyles = {

  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};


class NfModalInfluencerRegistration extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
           <Modal
            isOpen={this.props.isModalOpen}
            onRequestClose={this.props.closeModal}
            style={customStyles}
            contentLabel="Modal"
            ariaHideApp={false}
          >
          <div>
              <div className="modal-logo-desktop-wrapper">
                <span className="modal-logo-first-part">Promo</span><span className="modal-logo-last-part">shout</span>
              </div>
              <div className="gl-align-center">
                <button type="button" className="gl-insta-button"><i className="fa fa-instagram left"></i> Sign In With Instagram</button>
              </div>
          </div>
          </Modal>
        </div>
    );
  }
}

export default NfModalInfluencerRegistration;
