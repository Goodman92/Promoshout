import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './nf-popover.css';


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


  render = () => {
    const props = this.props;

    const html = () => (
        props.children
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

export default NfPopover;

