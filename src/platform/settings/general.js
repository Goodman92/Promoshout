import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NfCheckbox} from '../../components/utility/nf-utility';
import {NavLink} from 'react-router-dom';

import './settings.css';


class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offerNotification: true,
      messageNotification: true
    };
  }

  onOfferNoticationChange = (value) => {
    this.setState({offerNotification: value});
  };

  onMessageNoticationChange = (value) => {
    this.setState({messageNotification: value});
  };

  render() {
    const renderBrandExtraBlock = () => {
      const isBrand = true;
      if (isBrand)
        return (
          <div>
            <div className="form-group">
              <label>Profile picture</label>
              <input className="d-block" type="file"/>
            </div>
            <div className="form-group">
              <label>Brand website</label>
              <input type="text" className="form-control" placeholder="Brand website"/>
            </div>
            <div className="form-group">
              <label>Brand Name</label>
              <input type="text" className="form-control" placeholder="Brand name"/>
            </div>
            <div className="form-group">
              <label>About your brand</label>
              <textarea className="form-control" rows="3"/>
              <small>Describe your brand, this way influencers can get to know you better</small>
            </div>
          </div>
        )
    };

    return (
      <form>
        <div className="form-group">
          <label>First name</label>
          <input type="text" className="form-control" placeholder="First name"/>
          <small>This information will not be visible to others</small>
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name"/>
          <small>This information will not be visible to others</small>
        </div>
        {
          renderBrandExtraBlock()
        }
        <div className="form-group">
          <NfCheckbox handleChange={this.onOfferNoticationChange} item={this.state.offerNotification}/>
          <label className="ml-1"> I want to receive e-mail notifications of offers</label>
        </div>
        <div className="form-group">
          <NfCheckbox handleChange={this.onMessageNoticationChange} item={this.state.messageNotification}/>
          <label className="ml-1"> I want to receive e-mail notifications of messages</label>
        </div>
        <div className="text-center">
          <button type="submit" className="btn platform-btn btn-lg-sides">Save</button>
        </div>
      </form>);
  }
}


const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(General);
