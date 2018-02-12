import React, {Component} from 'react';
import Modal from 'react-modal';
import './nf-modal-offer.css';

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


class NfModalOffer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showError: false,
      errorMessage: '',
      campaignForm: {
        campaignName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    };
  }

  handleChangeFor = (propertyName) => (event) => {
    const { campaignForm } = this.state;
    const newContact = {
      ...campaignForm,
      [propertyName]: event.target.value
    };
    this.setState({ campaignForm: newContact });
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
          <div>
              <h1> Its all about moudals </h1>
              <div className="page__section">
                <label className="field field_type2">
                  <input className="field__input" type="text" value={this.state.campaignForm.campaignName} onChange={this.handleChangeFor('campaignName')} placeholder=" " />
                  <span className="field__label-wrap">
                    <span className="field__label">Campaign Name</span>
                  </span>
                </label>
              </div>

              <div className="page__section">
                <label className="field field_type2">
                  <textarea className="field__input" type="text"  placeholder=" " />
                  <span className="field__label-wrap">
                    <span className="field__label">Description</span>
                  </span>
                </label>
              </div>

          </div>
          </Modal>
        </div>
    );
  }
}

export default NfModalOffer;
