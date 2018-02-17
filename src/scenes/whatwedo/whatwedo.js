import React, {Component} from 'react';
import './whatwedo.css';


class WhatWeDo extends Component {

  render() {
    return (
      <div className="container">
        <div className="whatwedo-wrapper">
          <h2>- About Us -</h2>
          <div className="whatwedo-content-wrapper">
            <p className="whatwedo-content">Lorem ipsum dolor sit amet, 
            consectetuer adipiscing elit. 
            Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. 
            Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. 
            Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. 
            Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat.
            </p>
            
            <div className="gl-align-center whatwedo-icon-wrapper">
              <i className="c-red fa fa-star fa-1x" aria-hidden="true"></i>
            </div>

            <p className="whatwedo-content">Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. 
            Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. 
            Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat
             volutpat. Sed congue augue vitae neque. Nulla consectetuer 
            porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
            </p>
          </div>
          <h2>- Header -</h2>
            <div className="whatwedo-content-wrapper">
              <p className="whatwedo-content"> 
              Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. 
              Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. 
              Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. 
              Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat.
              </p>
            </div>
        </div>
      </div>
    );
  }
}

export default WhatWeDo;
