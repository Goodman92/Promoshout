import React, {Component} from 'react';
import './nf-footer.css';

class NfFooter extends Component {
  render() {
    return (
    <div className="container-fluid footer-wrapper">
      <div className="row">
        <div className="col-lg-12">
          <h6 className="text-center"> Copyright © Promoshout &bull; All rights reserved &bull; Images: Unsplash &bull; Design: Antti Virtanen & Juha Savikko</h6>
        </div>
      </div>
    </div>
    );
  }
}

export default NfFooter;
