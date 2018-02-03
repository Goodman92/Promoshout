import React, {Component} from 'react';
import './nf-featured.css';

export default class NfFeaturedItem extends Component {

  constructor(props) {
    super(props);
    this.index = Math.floor(Math.random() * 20) + 1;
  }
  render() {
    return (
        <div className="featured-item">
          <img src={require('../../../resources/images/random/' + this.index + '.jpg')} 
            alt="Promoted post"
            className="img-fluid"
           />
          <div className="featured-desc-wrapper">
            <div className="row">

              <div className="col-lg-6">
                <p className="featured-desc-name"> {this.props.item.name}</p>
              </div>

              <div className="col-lg-6">
                <p className="featured-desc-followers"> Followers: {this.props.item.followers}</p>
              </div>

            </div>
              <p className="featured-desc"> {this.props.item.desc}</p>
          </div>
          <div className="featured-desc-button-wrapper">
            <button>From <span className="featured-desc-price-span">${this.props.item.price}</span></button>
          </div>
        </div>
    );
  }
}
