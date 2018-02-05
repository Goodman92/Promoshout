import React, {Component} from 'react';
import './nf-utility.css';

const liftBox = (transcluded) => {
  return (
      <div className="lift-box">
        <div className="lift-box-header">
          {transcluded.header}
        </div>
        <div className="lift-box-content">
          {transcluded.content}
        </div>
      </div>
  )
};

const loginForm = () => {

  return (
      <form className="mw-350">
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password"/>
          <small className="form-text text-muted">Forgot your password? Click <a> here </a></small>
        </div>
        <button type="submit" className="btn btn-success form-control">
          Sign in!
        </button>
        <small className="form-text text-muted text-center">or</small>
        <button type="submit" className="btn btn-success form-control">
          Sign in with Instagram
        </button>
      </form>
  );
};

export const NfLoginForm = loginForm;
export const NfLiftBox = liftBox;