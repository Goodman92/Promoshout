import React, {Component} from 'react';
import Modal from 'react-modal';
import customStyles from './nf-modal-styles.js';
import {NfInput} from '../../components/utility/nf-utility';

import NfPopover from '../popover/nf-popover';

import './nf-modal-register-product.css';


class NfModalProductRegistration extends Component {

  constructor(props) {
    super(props);

    console.log("thiethie");
    console.log(props);

    this.state = {
      showError: false,
      errorMessage: '',
      registerForm: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    if (this.comparePasswords() && this.passwordLength())
      return;
    event.preventDefault();
  }

  handleChangeFor = (propertyName) => (event) => {
    const {registerForm} = this.state;
    const newContact = {
      ...registerForm,
      [propertyName]: event.target.value
    };
    this.setState({registerForm: newContact});
  };

  comparePasswords() {
    if (this.state.registerForm.password === this.state.registerForm.confirmPassword) {
      this.setState({showError: false});
      return true;
    } else {
      this.setState({showError: true, errorMessage: 'password confirmation does not match'});
      return false;
    }
  }

  passwordLength() {
    if (this.state.registerForm.password.length >= 6) {
      this.setState({showError: false});
      return true;
    } else {
      this.setState({showError: true, errorMessage: 'password must be at least 6 characters'});
      return false;
    }
  }

  render() {
    
    const onLoginClick = (e) => {
      this.props.closeModal();
    };

    return (
        <Modal
            isOpen={this.props.isModalOpen}
            onRequestClose={this.props.closeModal}
            style={customStyles}
            contentLabel="Modal"
            ariaHideApp={false}>
          <form onSubmit={this.handleSubmit}>
            <div ref="content">
              <div className="modal-logo-desktop-wrapper">
                <span className="modal-logo-first-part">Promo</span><span
                  className="modal-logo-last-part">shout</span>
              </div>

              <NfInput type={'text'} value={this.state.registerForm.firstName} label={'First Name'}
                       param={this.handleChangeFor('firstName')}/>
              <NfInput type={'text'} value={this.state.registerForm.lastName} label={'Last Name'}
                       param={this.handleChangeFor('lastName')}/>
              <NfInput type={'email'} value={this.state.registerForm.email} label={'Email'}
                       param={this.handleChangeFor('email')}/>
              <NfInput type={'password'} value={this.state.registerForm.password} label={'Password'}
                       param={this.handleChangeFor('password')}/>
              <NfInput type={'password'} value={this.state.registerForm.confirmPassword} label={'Confirm Password'}
                       param={this.handleChangeFor('confirmPassword')}/>

              {this.state.showError ?
                  <div className="alert alert-danger">
                    <p className="modal-danger-text">{this.state.errorMessage}</p>
                  </div>
                  : ''}

              <div className="modal-button-wrapper">
                <input className="gl-button-wrapper" type="submit" value="Register"/>
              </div>
              <span className="sign-in-desc">Already have an account?<span className="sign-in-link" onClick={(e) => onLoginClick(e)}> Sign In</span></span>
            </div>
          </form>
        </Modal>
    );
  }
}

export default NfModalProductRegistration;
