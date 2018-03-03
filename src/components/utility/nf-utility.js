import React, {Component} from 'react';
import {default as UUID} from "node-uuid";


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

class CustomField extends Component {

  render() {
    return (
      <div className="page__section">
        <label className="field field_type2">
          {this.props.children}
          <span className="field__label-wrap">
            <span className="field__label">{this.props.label}</span>
          </span>
        </label>
      </div>
    );
  }
}
const customTextarea = (transcluded) => {
  return (
    <CustomField label={transcluded.label}>
        <textarea className="field__input" type={transcluded.type} value={transcluded.value}
                  onChange={transcluded.param} placeholder=" "/>
    </CustomField>
  )
};
const customInput = (transcluded) => {
  return (
    <CustomField label={transcluded.label}>
      <input className="field__input" type={transcluded.type} value={transcluded.value} onChange={transcluded.param}
             placeholder=" "/>
    </CustomField>
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
          <button type="button" className="gl-insta-button"><i className="fa fa-instagram left"/> Sign In With
            Instagram
          </button>
        </div>
      </div>
    );

    const renderButtons = () => {
      if (this.state.showForgotForm)
        return renderForgotGroup();
      return renderSubmitGroup();
    };

    return (


      <form key={1} className="mw-326">
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

const simplePagination = (props) => {
  const renderShowMore = () => {
    if (props.page < props.lastPage)
      return (
        <button className="btn platform-btn btn-lg-sides" onClick={props.onShowMore}>
          <i className="fa fa-arrow-down"/> Show More
        </button>
      );
  };

  const renderShowLess = () => {
    if (props.page > 1)
      return (
        <button className="btn platform-btn btn-lg-sides" onClick={props.onShowLess}>
          <i className="fa fa-arrow-up"/> Show Less
        </button>
      );
  };

  return (
    <div>
      {renderShowMore()}
      {renderShowLess()}
    </div>
  )
};

class CustomCheckbox extends Component {

  componentWillMount() {
    this.id = UUID.v4();
  }

  onChange = (e) => {
    this.props.handleChange(e.target.checked);
  };

  render() {
    const {item, className} = this.props;

    return (
      <div className={["checkboxFive", className].join(" ")}>
        <input type="checkbox" name="" id={this.id}
               onChange={this.onChange} checked={item.selected} value={item.selected}/>
        <label htmlFor={this.id}/>
      </div>
    )
  };
}

const statusBadge = (props) => {

  const badgeMapper = {
    pending: 'info',
    declined: 'danger',
    open: 'warning',
    completed: 'success',
  };

  const getBadge = (status) => {
    const badgeClasses = "my-badge badge badge-:status".replace(':status', badgeMapper[status]);
    return <span className={badgeClasses}> {status} </span>
  };

  return (
    getBadge(props.status)
  )
};

export const NfLoginForm = loginForm;
export const NfLiftBox = liftBox;
export const NfTextarea = customTextarea;
export const NfInput = customInput;
export const NfSimplePagination = simplePagination;
export const NfCheckbox = CustomCheckbox;
export const NfStatusBadge = statusBadge;
