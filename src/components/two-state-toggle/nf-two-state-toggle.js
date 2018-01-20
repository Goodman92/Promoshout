import React, {Component} from 'react';
import './nf-two-state-toggle.css';

class NfTwoStateToggle extends Component {

  render() {
    const getActive = (curState) => {
      if (this.props.active === curState)
        return "toggle-wrapper active";
      return "toggle-wrapper";
    };

    return (
      <div className="two-state-toggle">
        <div className={getActive(false)} onClick={() => this.props.toggleChange(false)}>
          <span>{this.props.first}</span>
        </div>
        <div className={getActive(true)} onClick={() => this.props.toggleChange(true)}>
          <span>{this.props.second}</span>
        </div>
      </div>
    );
  }
}

export default NfTwoStateToggle;
