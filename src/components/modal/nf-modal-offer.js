import React, {Component} from 'react';
import Modal from 'react-modal';
import {Tooltip} from 'react-tippy';
import 'react-tippy/dist/tippy.css'
import {NfInput, NfTextarea} from '../../components/utility/nf-utility';
import NfModalOfferContent from './nf-modal-offer-content';
import NfModalOfferSummary from './nf-modal-offer-summary';
import customStyles from './nf-modal-styles.js';
import './nf-modal-offer.css';


class NfModalOffer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showError: false,
      errorMessage: '',
      showSummary: false,
      campaignForm: {
        caption: '',
        message: '',
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

  render() {
    return (
        <Modal
            isOpen={this.props.isModalOpen}
            onRequestClose={this.props.closeModal}
            style={customStyles}
            contentLabel="Modal"
            ariaHideApp={false}>

        <div className="modal-content-wrapper">

          <div className="modal-logo-desktop-wrapper">
            <span className="modal-logo-first-part">Promo</span><span
              className="modal-logo-last-part">shout</span>
          </div>

          { this.state.showSummary ?
            
            <NfModalOfferSummary data={this.state.campaignForm} />
            :
            <div>
              <div>
                <h4> Create Offer </h4>
                <hr />
      
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
    
                <NfTextarea type={'text'} value={this.state.campaignForm.caption} label={'Post caption'}
                        param={this.handleChangeFor('caption')}/>
    
                <input type="file" name="pic" accept="image/*" />

                <NfTextarea type={'text'} value={this.state.campaignForm.message} label={'Additional message'}
                      param={this.handleChangeFor('message')}/>
              
              </div>
              <div className="modal-button-wrapper">
                <input className="gl-button-wrapper" onClick={() => this.setState({showSummary: true})} type="submit" value="Next"/>
              </div>
            </div>
          }

          </div>

        </Modal>
    );
  }
}

export default NfModalOffer;
