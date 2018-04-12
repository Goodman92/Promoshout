import React, {Component} from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import { addOffer, showSummary } from '../../../../actions/offer-modal';
import {NfInput, NfTextarea} from '../../../utility/nf-utility';
import customStyles from '../../nf-modal-styles.js';
import './nf-modal-offer-content.css';


class NfModalOfferContent extends Component {
  

  handleImageChange = (e) => {
    
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      const campaignForm = this.props.campaignForm;
      const newContact = {
        ...campaignForm,
        file: file,
        imagePreviewUrl: reader.result
      };
      this.props.dispatch(addOffer(newContact))
    }

    reader.readAsDataURL(file)
  }

  handleChangeFor = (propertyName) => (event) => {
    
    const campaignForm = this.props.campaignForm;
    const newContact = {
      ...campaignForm,
      [propertyName]: event.target.value
    };
    this.props.dispatch(addOffer(newContact))
  }


  render() {

    const campaignForm = this.props.campaignForm;

    return (
      <div>
        <h4> Create Offer </h4>
        <hr />

        <NfInput type={'date'} value={campaignForm.date} label={'Campaign start date'}
                param={this.handleChangeFor('date')}/>

        <NfInput type={'time'} value={campaignForm.time} label={'Campaign start time'}
                param={this.handleChangeFor('time')}/>

        <p className="gl-bold modal-offer-content-label">Campaign length</p>
        <select className="modal-dropdown-wrapper">
          <option>Choose...</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>

        <NfTextarea type={'text'} value={campaignForm.caption} label={'image caption'}
                param={this.handleChangeFor('caption')}/>


        <NfTextarea type={'text'} value={campaignForm.message} label={'Additional message'}
          param={this.handleChangeFor('message')}/>

        <input type="file" target="file-input" name="pic" accept="image/*" onChange={(e) => this.handleImageChange(e)} />
          
          { campaignForm.imagePreviewUrl ?
            <div className="modal-offer-img-preview-wrapper">
              <img className="modal-offer-img-preview" width={'150px'} height={'150px'} src={campaignForm.imagePreviewUrl} />
            </div>
            :
            <p>Please select an Image for Preview</p>
          }
        <div className="modal-button-wrapper">
          <input className="gl-button-wrapper" type="submit" onClick={() => this.props.dispatch(showSummary())} value="Next"/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.offerModal;

export default connect(mapStateToProps)(NfModalOfferContent);