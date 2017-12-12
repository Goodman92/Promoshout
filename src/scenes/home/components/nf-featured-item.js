import React, {Component} from 'react';
import './nf-featured.css';

class NfFeaturedItem extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.item);
  }

  render() {
    return (
        <div className="featured-item">
          <img src={require(`../../../resources/images/random/1.jpg`)}
               className="img-fluid"/>
          <p className="featured-desc"> {this.props.item.desc}</p>
        </div>
    );
  }
}

export default NfFeaturedItem;
