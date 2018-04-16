import React, {Component} from 'react';
import './nf-perks.css';

export default class NfPerkBlock extends Component {
  render() {
    return (
      <div className="perk-block">
      	<div className="perk-icon-wrapper">
      		<i className={this.props.icon} aria-hidden="true"></i>
      	</div>
      	<div>
	        <h5 className="perk-title"> {this.props.title}</h5>
	        <p className="perk-desc"> {this.props.desc}</p>
        </div>
      </div>
    );
  }
}

