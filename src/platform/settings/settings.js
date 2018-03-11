import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NfLiftBox} from '../../components/utility/nf-utility';
import {NavLink} from 'react-router-dom';

import './settings.css';

class Setting extends Component {

  render() {
    return (
      <div className="container-fluid mt-2">
        <NfLiftBox header={<span>Settings</span>} content={
          <div className="settings-container">
            <div className="row mb-2">
              <div className="col-lg-12">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <NavLink className="nav-link" exact to="/platform/settings" activeClassName="active">General</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/platform/settings/privacy" activeClassName="active">Privacy</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/platform/settings/delete" activeClassName="active">Delete account</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row general-information-container">
              <div className="col-lg-12">
                {this.props.children}
              </div>
            </div>
          </div>
        }/>
      </div>);
  }
}


const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Setting);
