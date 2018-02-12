import React, {Component} from 'react';
import Modal from 'react-modal';
import NfModalProductRegistration from '../../../components/modal/nf-modal-register-product.js';
import NfModalInfluencerRegistration from '../../../components/modal/nf-modal-register-influencer.js';
import './nf-registration.css';

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


class NfRegistration extends Component {

    constructor(props) {
      super(props);

      this.state = {
        ProductModalIsOpen: false,
        InfluencerModalIsOpen: false
      };

      this.openProductModal = this.openProductModal.bind(this);
      this.closeProductModal = this.closeProductModal.bind(this);
      this.openInfluencerModal = this.openInfluencerModal.bind(this);
      this.closeInfluencerModal = this.closeInfluencerModal.bind(this);
    }

    /* Product Modal */
    openProductModal() {
      this.setState({ProductModalIsOpen: true});
    }
    closeProductModal() {
      this.setState({ProductModalIsOpen: false});
    }

    /* Influencer Modal */
    openInfluencerModal() {
      this.setState({InfluencerModalIsOpen: true});
    }
    closeInfluencerModal() {
      this.setState({InfluencerModalIsOpen: false});
    }

  render() {
    return (
        <div className="registration-wrapper">
          <div className="registration-block">
            <div className="row">
              <div className="col-lg-5 col-xs-12">
                <div className="heading-wrapper">
                  <h2 className="intro-heading">
                    Instagram Influencer Marketing Services on your demand
                  </h2>
                  <h2 className="intro-heading">
                    Collaborate with the people that fit your needs
                  </h2>
                </div>
              </div>
              <div className="col-lg-2 text-center">
                <img src={require("../../../resources/images/insta.png") } alt="Instagram logo" height="100" width="100"/>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6 col-xs-12 text-right registration-box-wrapper">
                <div className="registration-box">
                  <a onClick={this.openProductModal}>
                    Register as a product
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-xs-12 registration-box-wrapper">
                <div className="registration-box">
                  <a onClick={this.openInfluencerModal} >
                    Register as a influencer
                  </a>
                </div>
              </div>
            </div>
          </div>
            <NfModalProductRegistration isModalOpen={this.state.ProductModalIsOpen} closeModal={this.closeProductModal}/>
            <NfModalInfluencerRegistration isModalOpen={this.state.InfluencerModalIsOpen} closeModal={this.closeInfluencerModal}/>
        </div>
    );
  }
}

export default NfRegistration;
