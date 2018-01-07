import React, {Component} from 'react';

import './nf-slider-input.css';

class NfSliderInput extends Component {

  constructor(props) {
    super(props);
    this.mockProps = {low:0, high:0, ticks:10};
    this.state = {low:0, high:5000};
  }

  getPosition = (event, blocker, target, canMove) => {
    event.preventDefault();

    const blockerRect = blocker.getBoundingClientRect();
    const horizontalMaximum = this.horizontalPositionRelativeToParent(blockerRect.x);

    if (canMove(event.pageX, blockerRect.x))
      return this.onMouseMove(event, target);
    return horizontalMaximum;
  };

  onMouseMove = (event, handle) => {
    const rect = this.container.getBoundingClientRect();
    const handleRect = handle.getBoundingClientRect();

    if (event.pageX < rect.left)
      return 0;
    if (event.pageX + handleRect.width > rect.right)
      return rect.width - handleRect.width;
    return event.pageX - rect.left;
  };

  horizontalPositionRelativeToParent = (position) => {
    return position - this.container.getBoundingClientRect().x;
  };

  releaseListeners = () => {
    window.removeEventListener("mousemove", this.eventCallback);
    window.removeEventListener("mouseup", this.releaseListeners);
  };

  setListeners = (callback) => {
    window.addEventListener("mousemove", callback);
    window.addEventListener("mouseup", this.releaseListeners);
  };

  canBeUpdated = (oldPos, newPos) => {
    let movingSpace = this.container.getBoundingClientRect().width;
    let singleTickWidth = movingSpace / this.mockProps.ticks;
    return singleTickWidth <= Math.abs(oldPos - newPos);
  };

  mouseLeftProxy = (event) => {
    let oldPosition = this.horizontalPositionRelativeToParent(this.handleLeft.getBoundingClientRect().x);
    let newPosition = this.getPosition(event, this.handleRight, this.handleLeft, (left, right) => left < right);
    let overlayWidth = this.overlay.getBoundingClientRect().width - (newPosition - oldPosition);

    if(this.canBeUpdated(oldPosition, newPosition))
      this.setState({left: newPosition, width: overlayWidth, overlayLeft: newPosition, low:0});
  };

  mouseRightProxy = (event) => {
    let oldPosition = this.horizontalPositionRelativeToParent(this.handleRight.getBoundingClientRect().x);
    let newPosition = this.getPosition(event, this.handleLeft, this.handleRight, (left, right) => left > right);
    let overlayWidth = this.overlay.getBoundingClientRect().width - (oldPosition - newPosition);

    if(this.canBeUpdated(oldPosition, newPosition)) {
        this.setState({right: newPosition, width: overlayWidth, high: 5000});
    }
  };

  onMouseDownLeft = () => {
    this.eventCallback = this.mouseLeftProxy;
    this.setListeners(this.eventCallback);
  };

  onMouseDownRight = () => {
    this.eventCallback = this.mouseRightProxy;
    this.setListeners(this.eventCallback);
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
                onMouseDown={this.onMouseDownLeft} style={{left: this.state.left}}/>
          <span className="slider-max" ref={(element) => {this.handleRight = element;}}
                onMouseDown={this.onMouseDownRight} style={{left: this.state.right}}/>
          <span className="slider-range-overlay" style={{left: this.state.overlayLeft, width: this.state.width}}
                ref={(element) => {this.overlay = element;}}/>
        </div>
        <div className="slider-ticks"></div>
      </div>
    );
  }
}

export default NfSliderInput;