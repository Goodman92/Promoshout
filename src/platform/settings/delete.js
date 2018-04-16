import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink, Link} from 'react-router-dom';

import './settings.css';

class Delete extends Component {

  render() {
    return (
      <form>
        <small className="c-red d-block"> 
          <p className="c-red">
            Please make sure there is no account balance left, in case there is withdrew
            them first via
            <Link to="/bank/withdraw"> withdraw</Link> page.
          </p>
          <p>
            We are sorry to hear that our service did not match your needs. Please supply optional information
            why you chose to leave Promoshout, this way we can develop our service further for our future users.
          </p>
        </small>
        <div className="form-group mt-3">
          <p className="gl-bold">Password</p>
          <input type="password" className="form-control" />
        </div>
        <div className="form-group">
          <p className="gl-bold">Reason for account deletion</p>
          <textarea className="form-control" rows="3" placeholder="Optional information"/>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-danger btn-lg-sides">Delete account</button>
        </div>
      </form>
    );
  }
}


const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Delete);
