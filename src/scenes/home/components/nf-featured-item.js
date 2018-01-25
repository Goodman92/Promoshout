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
            <p className="featured-desc"> {this.props.item.desc}</p>
          </div>
        </div>
    );
  }
}
