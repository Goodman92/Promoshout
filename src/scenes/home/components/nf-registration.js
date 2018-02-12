import React, {Component} from 'react';
import Modal from 'react-modal';
import NfModalProductRegistration from '../../../components/modal/nf-modal-register-product.js';
import NfModalInfluencerRegistration from '../../../components/modal/nf-modal-register-influencer.js';
import './nf-registration.css';


class NfRegistration extends Component {

    constructor(props) {
      super(props);

      this.state = {
        ProductModalIsOpen: false,
        InfluencerModalIsOpen: false
      };
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
                  <a onClick={ () => this.setState({ProductModalIsOpen: true}) }>
                    Register as a product
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-xs-12 registration-box-wrapper">
                <div className="registration-box">
                  <a onClick={() => this.setState({InfluencerModalIsOpen: true}) } >
                    Register as a influencer
                  </a>
                </div>
              </div>
            </div>
          </div>
            <NfModalProductRegistration isModalOpen={this.state.ProductModalIsOpen} closeModal={ () => this.setState({ProductModalIsOpen: false}) }/>
            <NfModalInfluencerRegistration isModalOpen={this.state.InfluencerModalIsOpen} closeModal={() => this.setState({InfluencerModalIsOpen: false}) }/>
        </div>
    );
  }
}

export default NfRegistration;
