import React, {Component} from 'react';

import './nf-slider-input.css';

class NfSliderInput extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.rect = this.sliderContainer.getBoundingClientRect();
  };

  onMouseMoveHandler = (event) => {
    event.preventDefault();
    let newValue = null;
    let handleWidth = this.handleR.getBoundingClientRect().width;
    if (event.pageX < this.rect.left)
      newValue = 0;
    else if (event.pageX + handleWidth > this.rect.right)
      newValue = this.rect.width - handleWidth;
    else {
      newValue = event.pageX - this.rect.left;

    }
    this.setState({[this.direction]: newValue});

  };

  onMouseUpHandler = () => {
    console.log("onMouseUpHandler");
    window.removeEventListener("mousemove", this.onMouseMoveHandler);
    window.removeEventListener("mouseup", this.onMouseUpHandler);
  };

  onMouseDown = (direction, e) => {
    console.log("onMouseDown");
    this.direction = direction;
    window.addEventListener("mousemove", this.onMouseMoveHandler);
    window.addEventListener("mouseup", this.onMouseUpHandler);
  };

  render() {
    return (
      <div className="slider-input-wrapper">
        <div className="slider-unit-block">
          <div className="slider-min-unit">0</div>
          <div className="slider-max-unit">5000</div>
        </div>
        <div className="slider-content" ref={(element) => {
          this.sliderContainer = element;
        }}>
          <span className="slider-min-knob"
                onMouseDown={this.onMouseDown.bind(this, 'left')} style={{left: this.state.left}}
                ref={(element) => {
                  this.handleL = element;
                }}/>
          <span className="slider-max-knob"
                onMouseDown={this.onMouseDown.bind(this, 'right')} style={{left: this.state.right}}
                ref={(element) => {
                  this.handleR = element;
                }}/>
        </div>
        <div className="slider-ticks"></div>
      </div>
    );
  }
}

export default NfSliderInput;