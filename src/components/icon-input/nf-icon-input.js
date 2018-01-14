import React, {Component} from 'react';

import './nf-icon-input.css';

class NfIconInput extends Component {
  render() {
    return (
      <div className={['icon-input-wrapper', this.props.styles].join(' ')}>
        {this.props.children}
        <i className={this.props.icon}/>
      </div>
    );
  }
}

export default NfIconInput;