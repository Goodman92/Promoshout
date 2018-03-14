import React, {Component} from 'react';
import {connect} from 'react-redux';

import './settings.css';


class Privacy extends Component {

  render() {
    return (
      <form>
        <div className="form-group">
          <label>Old password</label>
          <input type="password" className="form-control" placeholder="Old password"/>
        </div>
        <div className="form-group">
          <label>New password</label>
          <input type="password" className="form-control" placeholder="New password"/>
        </div>
        <div className="form-group">
          <label>Enter new password again</label>
          <input type="password" className="form-control" placeholder="New password"/>
        </div>
        <div className="text-center">
          <button type="submit" className="btn platform-btn btn-lg-sides">Save</button>
        </div>
      </form>
    );
  }
}


const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Privacy);
