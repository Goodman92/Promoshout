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
      <div>
      <div className="container-fluid">
      <div className="row">
      
      <div className="col-md-6 col-lg-3 profile-wrapper">
        <div className="profile-info">

          <div className="">
            <img src="http://exprostudio.com/html/classified/images/img-01.jpg"
              className="img-fluid"/>
          </div>
        
          <div className="text-center">
            <p className="profile-name">John Doe</p>
            <p className="profile-desc">
              Hi there! I'm an influencer, blogger, on-camera host, actor and a professional bicycle thief.
              My audience is primarily made up of the active millennial
              that loves all things fashion and beauty
            </p>

            <div className="profile-stats-wrapper">
              <div className="row profile-stat-margin">
                <div className="col">
                  <p className="profile-font c-black">FOLLOWING</p>
                  <p className="profile-font c-dark-grey">134K</p>
                </div>
                <div className="col">
                  <p className="profile-font c-black">FOLLOWERS</p>
                  <p className="profile-font c-dark-grey">1337</p>
                </div>
              </div>
              <div className="row profile-stat-margin">
                <div className="col">
                  <p className="profile-font c-black">ENGAGEMENT</p>
                  <p className="profile-font c-dark-grey">24%</p>
                </div>
                <div className="col">
                  <p className="profile-font c-black">DEALS MADE</p>
                  <p className="profile-font c-dark-grey">43</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="profile-font c-black">POSTS</p>
                  <p className="profile-font c-dark-grey">556</p>
                </div>
              </div>
            </div>

            <button className="profile-offer-btn" onClick={ () => this.setState({OfferModalIsOpen: true}) }>Make Offer</button>
            <NfModalOffer isModalOpen={this.state.OfferModalIsOpen} closeModal={() => this.setState({OfferModalIsOpen: false}) } />

            <div className="profile-more-accounts-btn" data-toggle="collapse" href="#collapseExample2">
              <p className="profile-font c-dark-grey"> Check out my other accounts </p>
               <i className='fa fa-angle-down fa-1x'></i>
            </div>

            <div className="collapse" id="collapseExample2">

              <div className="row profile-other-accounts-wrapper">
                <div className="col">
                  <img src="http://exprostudio.com/html/classified/images/author/img-02.jpg"
                     className="rounded-circle" height="50" width="50"/>
                </div>
                <div className="col gl-margin-auto">
                  <p className="c-dark-grey profile-account-fonts"> Carlos Matos </p>
                </div>
                <div className="col gl-margin-auto">
                  <i className="c-dark-grey fa fa-facebook-f"></i>
                </div>
              </div>

              <div className="row profile-other-accounts-wrapper">
                <div className="col gl-margin-auto">
                  <img src="http://exprostudio.com/html/classified/images/author/img-04.jpg"
                     className="rounded-circle" height="50" width="50"/>
                </div>
                <div className="col gl-margin-auto">              
                  <p className="c-dark-grey profile-account-fonts"> Yas Bois </p>
                </div>
                <div className="col gl-margin-auto">
                  <i className="c-dark-grey fa fa-instagram"></i>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="col-md-6 col-lg-9">
        <div className="profile-photos">
          <p className="text-center gl-bold bottom-line">Photos</p>

          <div className="profile-photos-wrapper">
            <div className="row">
              <div className="col-lg-3">
                <div className="">
                  <img src="http://exprostudio.com/html/classified/images/gallery/img-01.jpg" className="img-fluid"/>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="">
                  <img src="http://exprostudio.com/html/classified/images/gallery/img-02.jpg" className="img-fluid"/>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="">
                  <img src="http://exprostudio.com/html/classified/images/gallery/img-06.jpg" className="img-fluid"/>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="">
                  <img src="http://exprostudio.com/html/classified/images/gallery/img-09.jpg" className="img-fluid"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-reviews">
          <p className="text-center gl-bold bottom-line">Reviews</p>

          <div className="review-item">
            <figure>
              <img src="http://exprostudio.com/html/classified/images/author/img-16.jpg"
                   className="rounded-circle" height="40" width="40"/>
            </figure>
            <div className="review-info">
              <div className="review-text">
                <p className="mb-0 gl-bold">Was glad to do business with you, recommended.</p>
              </div>
              <div className="review-left">
                <p className="c-light-grey">January 12th, 2011</p>
              </div>
            </div>
          </div>

          <div className="review-item">
            <figure>
              <img src="http://exprostudio.com/html/classified/images/author/img-17.jpg"
                   className="rounded-circle" height="40" width="40"/>
            </figure>
            <div className="review-info">
              <div className="review-text">
                <p className="mb-0 gl-bold">Did deliver what we had agreed.</p>
              </div>
              <div className="review-left">
                <p className="c-light-grey">February 2th, 2010</p>
              </div>
            </div>
          </div>

          <div className="review-item">
            <figure>
              <img src="http://exprostudio.com/html/classified/images/author/img-15.jpg"
                   className="rounded-circle" height="40" width="40"/>
            </figure>
            <div className="review-info">
              <div className="review-text">
                <p className="mb-0 gl-bold">We are coming in waves!</p>
              </div>
              <div className="review-left">
                <p className="c-light-grey">February 2th, 2010</p>
              </div>
            </div>
          </div>

          <div className="review-item">
            <figure>
              <img src="http://exprostudio.com/html/classified/images/author/img-13.jpg"
                   className="rounded-circle" height="40" width="40"/>
            </figure>
            <div className="review-info">
              <div className="review-text">
                <p className="mb-0 gl-bold">
                  wasso wasoo beeconeee! this is long text to see how it will scale and it scales pretty great thiethie </p>
              </div>
              <div className="review-left">
                <p className="c-light-grey">February 2th, 2010</p>
              </div>
            </div>
          </div>

        </div>
      </div>
 </div>
 </div>
 </div>

    

    );
  }
}


const mapStateToProps = (state) => state.offerModal;

export default connect(mapStateToProps)(Profile);