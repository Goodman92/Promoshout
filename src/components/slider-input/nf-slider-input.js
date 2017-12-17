import React, {Component} from 'react';

import './nf-slider-input.css';

class NfSliderInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      left: {
        left: 10
      },
      right: {
        right: 10
      }
    }
  }

  onDrag = (e) => {
    console.log("onDrag");
    if (e.nativeEvent.x === 0 || e.nativeEvent.screenX === 0)
      return false;
    const movement = e.nativeEvent.screenX - this.movementStart;
    this.setState({left: {left: movement}});
  };

  onDragStart = (e) => {
    const position = this.leftKnob.getBoundingClientRect();
    this.movementStart = position.x;
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
          <span className="slider-min-knob" draggable="true"
                onDrag={this.onDrag } style={this.state.left}
                onDragStart={this.onDragStart }
                onDragEnd={this.onDragEnd }
                ref={(element) => {
                  this.leftKnob = element;
                }}/>
          <span className="slider-max-knob" draggable="true"
                ref={(element) => {
                  this.rightKnob = element;
                }}/>
        </div>
        <div className="slider-ticks">
        </div>
      </div>
    );
  }
}

export default NfSliderInput;