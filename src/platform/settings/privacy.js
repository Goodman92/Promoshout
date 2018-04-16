import React, {Component} from 'react';
import {connect} from 'react-redux';

import './settings.css';


class Privacy extends Component {

  render() {
    return (
      <form>
        <div className="form-group">
          <p className="gl-bold">Old password</p>
          <input type="password" className="form-control" />
        </div>
        <div className="form-group">
          <p className="gl-bold">New password</p>
          <input type="password" className="form-control" />
        </div>
        <div className="form-group">
          <p className="gl-bold">Enter new password again</p>
          <input type="password" className="form-control" />
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
