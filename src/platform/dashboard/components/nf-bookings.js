import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import {getBookings, setToBeingEdited, addToBookings} from '../../../actions/bookings';

import BigCalendar from 'react-big-calendar';
import NfOrderPopup from './nf-order-popup';
import moment from 'moment';

import {orderPopUpStyles} from '../../../components/modal/nf-modal-styles.js';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));


class NfBookings extends Component {

  componentDidMount = () => {
    this.props.dispatch(getBookings());
  };

  closeModal = () => {
    this.props.dispatch(setToBeingEdited())
  };

  saveBooking = (item) => {
    this.props.dispatch(addToBookings({...this.props.beingEdited, ...item}));
  };

  addBeingEditedToEvents= () => {
      const {items, beingEdited} = this.props;
      return items.slice().concat([beingEdited]);
  };

  onSelectSlot = (data) => {
    const item = {start: data.start, end: data.end};
    this.props.dispatch(setToBeingEdited(item));
  };

  onSelectEvent = (data) => {
    console.log("onSelectEvent!!!");
  };


  render() {
    const events = this.addBeingEditedToEvents();

    return (
        <div style={{height: '600px'}}>
          <BigCalendar
              selectable
              events={events}
              toolbar={false}
              defaultView="week"
              scrollToTime={new Date(1970, 1, 1, 6)}
              defaultDate={moment().toDate()}
              onSelectEvent={this.onSelectEvent}
              onSelectSlot={this.onSelectSlot}/>
          <Modal
              isOpen={this.props.beingEdited ? true : false}
              style={orderPopUpStyles}
              onRequestClose={this.closeModal}
              contentLabel="Modal"
              ariaHideApp={false}>
            <NfOrderPopup {...this.props.beingEdited} onCancel={this.closeModal} onSubmit={this.saveBooking}/>
          </Modal>
        </div>
    );
  }
}


const mapStateToProps = (state) => {
  const {date, items, beingEdited} = state.bookings;
  return {date, items, beingEdited};
};

export default connect(mapStateToProps)(NfBookings);
