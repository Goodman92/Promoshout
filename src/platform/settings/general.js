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
              <p className="gl-bold">Profile picture</p>
              <input className="d-block" type="file"/>
            </div>
            <div className="form-group">
              <p className="gl-bold">Brand website</p>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <p className="gl-bold">Brand Name</p>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <p className="gl-bold">About your brand</p>
              <textarea className="form-control" rows="3"/>
              <small><p className="c-light-grey">Describe your brand, this way influencers can get to know you better</p></small>
            </div>
          </div>
        )
    };

    return (
      <form>
        <div className="form-group">
          <p className="gl-bold">First name</p>
          <input type="text" className="form-control" />
          <small><p className="c-light-grey">This information will not be visible to others</p></small>
        </div>
        <div className="form-group">
          <p className="gl-bold">Last name</p>
          <input type="text" className="form-control" />
          <small><p className="c-light-grey">This information will not be visible to others</p></small>
        </div>
        {
          renderBrandExtraBlock()
        }
        <div className="form-group">
          <NfCheckbox handleChange={this.onOfferNoticationChange} item={this.state.offerNotification}/>
          <p className="d-inline gl-bold ml-1"> I want to receive e-mail notifications of offers</p>
        </div>
        <div className="form-group">
          <NfCheckbox handleChange={this.onMessageNoticationChange} item={this.state.messageNotification}/>
          <p className="d-inline gl-bold ml-1"> I want to receive e-mail notifications of messages</p>
        </div>
        <div className="text-center">
          <button type="submit" className="btn platform-btn btn-lg-sides">Save</button>
        </div>
      </form>);
  }
}


const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(General);
