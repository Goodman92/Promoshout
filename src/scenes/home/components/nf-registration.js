import React, {Component} from 'react';
import './nf-registration.css';

class NfRegistration extends Component {
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
              <div class="col-lg-2 text-center">
                <img src={require("../../../resources/images/insta.png")} height="100" width="100"/>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6 col-xs-12 text-right">
                <div className="registration-box">
                  <a href="#">
                    Register as a product
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-xs-12">
                <div className="registration-box">
                  <a href="#">
                    Register as a influencer
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
    );
  }
}

export default NfRegistration;
