import React, {Component} from 'react';
import './nf-carousel-item.css';

export default class NfCarouselItem extends Component {

  constructor(props) {
    super(props);
    this.index = Math.floor(Math.random() * 20) + 1;
  }
  
  render() {
    return (
        <div className="nf-carousel-item-wrapper">
          <img src={require('../../../resources/images/random/' + this.index + '.jpg')} 
            alt="Promoted post"
            className="img-fluid"
          />
          <div className="row nf-carousel-item-desc-wrapper">
            <div className="col-lg-12">
              <p className="nf-carousel-item-desc-name"> {this.props.item.name}</p>
            </div>
            <div className="col-lg-12">
              <p className="nf-carousel-item-desc-followers"> followers
                <span className="nf-carousel-item-desc-span"> {this.props.item.followers}</span>
              </p>
              <p className="nf-carousel-item-desc-followers"> following
                <span className="nf-carousel-item-desc-span"> {this.props.item.following}</span>
              </p>
            </div>
          </div>
          <div className="nf-carousel-item-desc-button-wrapper">
            <button> From <span className="nf-carousel-item-desc-span"> ${this.props.item.price}</span></button>
          </div>
        </div>
    );
  }
}
