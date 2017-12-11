import React, {Component} from 'react';
import './nf-featured.css';

class NfFeaturedItem extends Component {
  render() {
    return (
      <div className="featured-item">
        <img src={require('../../../resources/images/random/1.jpg')}
             className="img-fluid" />
        <p className="featured-desc"> So it Begins...</p>
      </div>
    );
  }
}

export default NfFeaturedItem;
