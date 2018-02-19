import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './nf-popover.css';

import {connect} from 'react-redux';
import {loginHide} from '../../reducers/login';

class NfPopover extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate = () => {
    const componentViewport = ReactDOM.findDOMNode(this).getBoundingClientRect();
    const viewport = document.getElementById("root").getBoundingClientRect();
    const exceeds = componentViewport.x + componentViewport.width > viewport.width;

    if(exceeds)
      this.setState({right: 0});
  };

  closePopover = () => {
      this.props.dispatch(loginHide());
  };

  render = () => {
    const props = this.props;

    const html = () => (
        <div>
          <div className="nf-popover-overlay" onClick={this.closePopover}></div>
          <div className="nf-popover-component">{props.children}</div>
        </div>
    );

    const renderPopover = () => {
      if (props.show)
        return html();
      return null;
    };

    return (  
        <div className="nf-popover" style={{right: this.state.right}}>
          {renderPopover()}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.login
};
export default connect(mapStateToProps)(NfPopover);

