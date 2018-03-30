import React, {Component} from 'react';
import Modal from 'react-modal';
import {Tooltip} from 'react-tippy';
import 'react-tippy/dist/tippy.css'
import {NfInput, NfTextarea} from '../../components/utility/nf-utility';
import customStyles from './nf-modal-styles.js';
import './nf-modal-offer.css';


class NfModalOfferContent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showError: false,
      errorMessage: '',
      campaignForm: {
        campaignName: '',
        caption: '',
        campaignLength: '',
        date: '',
        time: ''
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

  printState = () => {
    console.log(this.state.campaignForm);
  }

  render() {
    return (

      <div>
        <h4> Create Offer </h4>
        <hr />
        <NfInput type={'text'} value={this.state.campaignForm.campaignName} label={'Campaign Name'}
                param={this.handleChangeFor('campaignName')}/>

        <NfInput type={'date'} value={this.state.campaignForm.date} label={'Campaign start date'}
                param={this.handleChangeFor('date')}/>

        <NfInput type={'time'} value={this.state.campaignForm.time} label={'Campaign start time'}
                param={this.handleChangeFor('time')}/>

        <label style={{'fontSize': '14px'}}>Campaign length</label>
        <select className="modal-dropdown-wrapper">
          <option>Choose...</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>

        <NfTextarea type={'text'} value={this.state.campaignForm.caption} label={'image caption'}
                param={this.handleChangeFor('caption')}/>

        <input type="file" name="pic" accept="image/*" />
    
        <div className="modal-button-wrapper">
          <input className="gl-button-wrapper" type="submit" onClick={this.printState} value="Next"/>
        </div>
      </div>
    );
  }
}

export default NfModalOfferContent;
