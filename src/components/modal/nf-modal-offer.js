import React, {Component} from 'react';
import Modal from 'react-modal';
import {NfInput, NfTextarea} from '../../components/utility/nf-utility';
import customStyles from './nf-modal-styles.js';
import './nf-modal-offer.css';


class NfModalOffer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showError: false,
      errorMessage: '',
      campaignForm: {
        campaignName: '',
        description: '',
      }
    };
  }

  handleChangeFor = (propertyName) => (event) => {
    const {campaignForm} = this.state;
    const newContact = {
      ...campaignForm,
      [propertyName]: event.target.value
    };
    this.setState({campaignForm: newContact});
  };

  render() {
    return (
        <Modal
            isOpen={this.props.isModalOpen}
            onRequestClose={this.props.closeModal}
            style={customStyles}
            contentLabel="Modal"
            ariaHideApp={false}>
          <div>
            <h1> Modal </h1>
            <NfInput type={'text'} value={this.state.campaignForm.campaignName} label={'Campaign Name'}
                     param={this.handleChangeFor('campaignName')}/>
            <NfTextarea type={'text'} value={this.state.campaignForm.description} label={'Description'}
                        param={this.handleChangeFor('description')}/>
          </div>
        </Modal>
    );
  }
}

export default NfModalOffer;
