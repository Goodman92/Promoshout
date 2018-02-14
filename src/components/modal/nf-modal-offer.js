import React, {Component} from 'react';
import Modal from 'react-modal';
import {Tooltip} from 'react-tippy';
import 'react-tippy/dist/tippy.css'
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
        campaignLength: '',
        date: '',
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
              <div className="modal-logo-desktop-wrapper">
                <span className="modal-logo-first-part">Promo</span><span
                  className="modal-logo-last-part">shout</span>
              </div>

            <h4> Create Offer </h4>
            <hr />
            <NfInput type={'text'} value={this.state.campaignForm.campaignName} label={'Campaign Name'}
                    param={this.handleChangeFor('campaignName')}/>
            <NfInput type={'number'} value={this.state.campaignForm.campaignLength} label={'Campaign Length (hours)'}
                    param={this.handleChangeFor('campaignLength')}/>
            <NfInput type={'date'} value={this.state.campaignForm.date} label={'Date / Deadline ??'}
                    param={this.handleChangeFor('date')}/>

            <div className="testsomething">

              <NfTextarea type={'text'} value={this.state.campaignForm.description} label={'Description'}
                          param={this.handleChangeFor('description')}/>

{/*              <div style={{'textAlign': 'right'}}>
                <Tooltip
                  title="Welcome to React"
                  position="top"
                  trigger="mouseenter"
                  theme="dark"
                  arrow="true"
                >
                  <i className="fa fa-question-circle" style={{'color': '#4c4c4c'}} aria-hidden="true"></i>
                </Tooltip>
              </div>*/}
            </div>
            
            <p>Price = ? </p>
            <input type="file" name="pic" accept="image/*" />
          </div>


            <div className="modal-button-wrapper">
              <input className="gl-button-wrapper" type="submit" value="Send"/>
            </div>


        </Modal>
    );
  }
}

export default NfModalOffer;
