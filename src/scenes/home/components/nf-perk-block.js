import React, {Component} from 'react';
import './nf-perks.css';

class NfPerkBlock extends Component {
  render() {
    return (
      <div className="perk-block">
        <h2 className="perk-title"> {this.props.title}</h2>
        <p className="perk-desc"> {this.props.desc}</p>
      </div>
    );
  }
}

export default NfPerkBlock;
