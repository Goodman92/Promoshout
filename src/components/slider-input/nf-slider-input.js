import React, {Component} from 'react';
import './nf-slider-input.css';

class NfSliderInput extends Component {

  constructor(props) {
    super(props);
    this.mockProps = {
      low: 0,
      high: 100000,
      ticks: 1000
    };
    this.state = { ...this.mockProps };
  }

  getPosition = (event, blocker, target, canMove) => {
    event.preventDefault();

    const blockerRect = blocker.getBoundingClientRect();
    const horizontalMaximum = this.horizontalPositionRelativeToParent(blockerRect.x);

    if (canMove(event.pageX, blockerRect.x))
      return this.onMouseMove(event.pageX, target);

    return horizontalMaximum;
  };

  onMouseMove = (pos, handle) => {
    const handleRect = handle.getBoundingClientRect();
    const rect = this.container.getBoundingClientRect();
    const tick = (rect.width - handleRect.width) / this.mockProps.ticks;
    const position = pos - rect.left;

    for (let i = 0; i <= this.mockProps.ticks; i++) {
      if (position >= rect.width - handleRect.width / 2)
        return tick * this.mockProps.ticks;
      if (position < 0)
        return 0;
      if (i * tick - handleRect.width / 2 <= position && position <= i * tick + handleRect.width / 2)
        return i * tick;
    }
    return null;
  };

  horizontalPositionRelativeToParent = (position) => {
    return position - this.container.getBoundingClientRect().x;
  };

  releaseListeners = () => {
    window.removeEventListener("mousemove", this.eventCallback);
    window.removeEventListener("mouseup", this.releaseListeners);
    this.props.onChange({value_min:this.state.low, value_max:this.state.high});
  };

  setListeners = (callback) => {
    window.addEventListener("mousemove", callback);
    window.addEventListener("mouseup", this.releaseListeners);
  };

  normalizedValue = (position) => {
    const rect = this.container.getBoundingClientRect();
    const normalized = this.mockProps.high * (position / (rect.width - this.handleRight.getBoundingClientRect().width));
    return Math.round(normalized);
  };

  onMouseDownLeft = () => {
    this.eventCallback = this.mouseLeftProxy;
    this.setListeners(this.eventCallback);
  };

  onMouseDownRight = () => {
    this.eventCallback = this.mouseRightProxy;
    this.setListeners(this.eventCallback);
  };

  updateLeft = (pos) => {
    let label = this.normalizedValue(pos);
    let overlay = this.overlayPosition();
    this.setState({left: pos, low: label, zRight: 1, zLeft: 2, ...overlay});
  };

  updateRight = (pos) => {
    let label = this.normalizedValue(pos);
    let overlay = this.overlayPosition();
    this.setState({right: pos, high: label, zLeft: 1, zRight: 2, ...overlay});
  };

  mouseLeftProxy = (event) => {
    let position = this.getPosition(event, this.handleRight, this.handleLeft, (left, right) => left < right);
    this.updateLeft(position);
  };

  mouseRightProxy = (event) => {
    let position = this.getPosition(event, this.handleLeft, this.handleRight, (left, right) => left > right);
    this.updateRight(position);
  };

  overlayPosition = () => {
    const right = this.handleRight.getBoundingClientRect();
    const left = this.handleLeft.getBoundingClientRect();

    return {
      width: right.x - left.x + right.width,
      overlayLeft: this.horizontalPositionRelativeToParent(left.x)
    }
  };

  render() {
    return (
      <div className="slider-input-wrapper">
        <div className="slider-unit-block">
          <div className="slider-min-unit">{this.state.low}</div>
          <div className="slider-max-unit">{this.state.high}</div>
        </div>
        <div className="slider-content" ref={(element) => {this.container = element;}}>
          <span className="slider-min" ref={(element) => {this.handleLeft = element;}}
                onMouseDown={this.onMouseDownLeft} style={{left: this.state.left, zIndex: this.state.zLeft}}/>
          <span className="slider-max" ref={(element) => {this.handleRight = element;}}
                onMouseDown={this.onMouseDownRight} style={{left: this.state.right, zIndex: this.state.zRight}}/>
          <span className="slider-range-overlay" style={{left: this.state.overlayLeft, width: this.state.width}}
                ref={(element) => {this.overlay = element;}}/>
        </div>
        <div className="slider-ticks"/>
      </div>
    );
  }
}

export default NfSliderInput;