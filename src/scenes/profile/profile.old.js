import React, {Component} from 'react';
import {connect} from 'react-redux';
import { emptyOffer } from '../../actions/offer-modal';
import {NfLiftBox} from '../../components/utility/nf-utility';
import NfModalOffer from '../../components/modal/offer-modal/nf-modal-offer.js';
import './profile.css';

class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      OfferModalIsOpen: false
    };
  }

  componentDidMount() {
    this.props.dispatch(emptyOffer());
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-3 mb-1">
          <div className="col-lg-3">
            <div className="c-white bg-dark-blue">
              <h4 className="bold mb-0"> $200</h4>
              <h6 className="text-center">Minimum bid price</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="c-white bg-dark-blue">
              <h4 className="bold mb-0"> 30</h4>
              <h6 className="text-center">Posts</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="c-white bg-dark-blue">
              <h4 className="bold mb-0"> 563</h4>
              <h6 className="text-center">Followers</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="c-white bg-dark-blue">
              <h4 className="bold mb-0"> 2,022</h4>
              <h6 className="text-center">Following</h6>
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-lg-3">
            <aside>
              <NfLiftBox header={
                <span>Influencer Contact Detail</span>
              } content={
                <div>
                  <div className="profile-box-details">
                    <figure>
                      <img src="http://exprostudio.com/html/classified/images/author/img-02.jpg"
                           className="rounded-circle" height="70" width="70"/>
                    </figure>
                    <div className="profile-box-info">
                      <h4 className="text-left">
                        <a href=""> @SHGR</a>
                      </h4>
                      <span> Member since Jun 27, 2017</span>
                    </div>
                  </div>

                    <a onClick={ () => this.setState({OfferModalIsOpen: true}) }>
                      <div className="offer-box">
                        <div className="offer-icon">
                          <i className="fa fa-2x fa-briefcase"/>
                        </div>
                        <div className="offer-content">
                            <h5> Make an offer</h5>
                            <h6 className="h7">Place your best offer now</h6>
                        </div>
                      </div>
                    </a>
                </div>
              }/>

              <NfModalOffer isModalOpen={this.state.OfferModalIsOpen} closeModal={() => this.setState({OfferModalIsOpen: false}) } />

              <div className="mt-1">
                <NfLiftBox header={<span> Engament rate</span>} content={
                  <h3 className="text-center">
                    7.3%
                  </h3>
                }/>
              </div>
              <div className="mt-1">
                <NfLiftBox header={<span> Deals made through Promoshout</span>} content={
                  <h3 className="text-center">
                    3
                  </h3>
                }/>
              </div>
            </aside>
          </div>
          <div className="col-lg-9">
            <main>
              <NfLiftBox header={<span> Description</span>} content={
                <p className="profile-description">
                  Hi there! I'm an influencer, blogger, on-camera host, actor and a professional bicycle thief.
                  My audience is primarily made up of the active millennial
                  that loves all things fashion, beauty, lifestyle, fitness, health,
                  and entertainment. Join us!!
                </p>
              }/>
              <div className="mt-1">
                <NfLiftBox header={<span> Photography</span>} content={
                  <div className="photo-gallery">
                    <div className="row">
                      <div className="col-lg-2">
                        <div className="photo-item">
                          <img src="https://www.w3schools.com/howto/img_lights.jpg" className="img-fluid"/>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="photo-item">
                          <img src="https://www.w3schools.com/howto/img_lights.jpg" className="img-fluid"/>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="photo-item">
                          <img src="https://www.w3schools.com/howto/img_lights.jpg" className="img-fluid"/>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="photo-item">
                          <img src="https://www.w3schools.com/howto/img_lights.jpg" className="img-fluid"/>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="photo-item">
                          <img src="https://www.w3schools.com/howto/img_lights.jpg" className="img-fluid"/>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="photo-item">
                          <img src="https://www.w3schools.com/howto/img_lights.jpg" className="img-fluid"/>
                        </div>
                      </div>
                    </div>
                  </div>
                }/>
              </div>
              <div className="mt-1">
                <NfLiftBox header={<span> Reviews from customers</span>} content={
                  <div>
                    <div className="review-box mb-1">
                      <div className="review-item">
                        <figure>
                          <img src="http://exprostudio.com/html/classified/images/author/img-16.jpg"
                               className="rounded-circle" height="40" width="40"/>
                        </figure>
                        <div className="review-info">
                          <div className="review-text">
                            <p>Was glad to do business with you, recommended.</p>
                          </div>
                          <div className="review-left">
                            <p>January 12th, 2011</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="review-box mb-1">
                      <div className="review-item">
                        <figure>
                          <img src="http://exprostudio.com/html/classified/images/author/img-17.jpg"
                               className="rounded-circle" height="40" width="40"/>
                        </figure>
                        <div className="review-info">
                          <div className="review-text">
                            <p>Did deliver what we had agreed.</p>
                          </div>
                          <div className="review-left">
                            <p>February 2th, 2010</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                }/>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

// export default Profile;

const mapStateToProps = (state) => state.offerModal;

export default connect(mapStateToProps)(Profile);