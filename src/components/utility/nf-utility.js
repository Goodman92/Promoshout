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

class loginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {showForgotForm: false};
  };

  onForgotClick = () => {
    this.setState({showForgotForm: !this.state.showForgotForm});
  };


  render() {
    const renderForgotGroup = () => (
        <div className="form-group">
          <button type="submit" className="btn btn-danger form-control">Reset password</button>
        </div>
    );

    const renderSubmitGroup = () => (
        <div>
          <button type="submit" className="btn btn-success form-control">
            Sign in!
          </button>
          <small className="form-text text-muted text-center">or</small>
          <div className="gl-align-center">
            <button type="button" className="gl-insta-button"><i className="fa fa-instagram left"></i> Sign In With Instagram</button>
          </div>
        </div>
    );

    const renderButtons = () => {
      if (this.state.showForgotForm)
        return renderForgotGroup();
      return renderSubmitGroup();
    };

    return (
        <form className="mw-326">
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Email"/>
          </div>
          <div className="form-group"> { this.state.showForgotForm ? null :
              <div>
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password"/>
              </div>}

            <small className="form-text text-muted">
              Forgot your password? Click
              <span className="pointer td-underline" onClick={this.onForgotClick}> here </span>
            </small>
          </div>
          { renderButtons()}
        </form>
    );
  }
}


export const NfLoginForm = loginForm;
export const NfLiftBox = liftBox;