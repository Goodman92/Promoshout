import React, {Component} from 'react';
import Modal from 'react-modal';
import './nf-modal-register-product.css';

const customStyles = {

  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};


class NfModalProductRegistration extends Component {

    constructor(props) {
      super(props);

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
      if(this.comparePasswords() && this.passwordLength())
      console.log("send to server...");
      event.preventDefault();
    }

    handleChangeFor = (propertyName) => (event) => {
      const { registerForm } = this.state;
      const newContact = {
        ...registerForm,
        [propertyName]: event.target.value
      };
      this.setState({ registerForm: newContact });
    }
 
    comparePasswords() {
      if(this.state.registerForm.password === this.state.registerForm.confirmPassword) {
        this.setState({ showError: false });
        return true;
      } else {
        this.setState({ showError: true, errorMessage: 'password confirmation does not match' });
        return false;
      }
    }

    passwordLength() {
      if(this.state.registerForm.password.length >= 6) {
        this.setState({ showError: false });
        return true;
      } else {
        this.setState({ showError: true, errorMessage: 'password must be at least 6 characters' });
        return false;
      } 
    }

  render() {
    return (
        <div>
          <Modal
            isOpen={this.props.isModalOpen}
            onRequestClose={this.props.closeModal}
            style={customStyles}
            contentLabel="Modal"
            ariaHideApp={false}
          >
          <form onSubmit={this.handleSubmit}>
            <div ref="content">
              <div className="modal-logo-desktop-wrapper">
                <span className="modal-logo-first-part">Promo</span><span className="modal-logo-last-part">shout</span>
              </div>
             <div className="page__section">
                <label className="field field_type2">
                  <input className="field__input" type="text" value={this.state.registerForm.firstName} onChange={this.handleChangeFor('firstName')} placeholder=" " />
                  <span className="field__label-wrap">
                    <span className="field__label">First Name</span>
                  </span>
                </label>
              </div>
              <div className="page__section">
                <label className="field field_type2">
                  <input className="field__input" type="text" value={this.state.registerForm.lastName} onChange={this.handleChangeFor('lastName')} placeholder=" " />
                  <span className="field__label-wrap">
                    <span className="field__label">Last Name</span>
                  </span>
                </label>
              </div>
              <div className="page__section">
                <label className="field field_type2">
                  <input className="field__input" type="email" value={this.state.registerForm.email} onChange={this.handleChangeFor('email')} placeholder=" " />
                  <span className="field__label-wrap">
                    <span className="field__label">Email</span>
                  </span>
                </label>
              </div>
              <div className="page__section">
                <label className="field field_type2">
                  <input className="field__input" type="password" value={this.state.registerForm.password} onChange={this.handleChangeFor('password')} placeholder=" " />
                  <span className="field__label-wrap">
                    <span className="field__label">Password</span>
                  </span>
                </label>
              </div>
              <div className="page__section">
                <label className="field field_type2">
                  <input className="field__input" type="password" value={this.state.registerForm.confirmPassword} onChange={this.handleChangeFor('confirmPassword')} placeholder=" " />
                  <span className="field__label-wrap">
                    <span className="field__label">Confirm Password</span>
                  </span>
                </label>
              </div>

              {this.state.showError ? 
                <div className="alert alert-danger">
                  <p className="modal-danger-text">{this.state.errorMessage}</p>
                </div>
              : ''}
            
              <div className="modal-button-wrapper">
                <input className="gl-button-wrapper" type="submit" value="Register" />
              </div>
            </div>
          </form>
          </Modal>
        </div>
    );
  }
}

export default NfModalProductRegistration;
