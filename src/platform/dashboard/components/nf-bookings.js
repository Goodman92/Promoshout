import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import {getBookings, editBooking, addToBookings, removeBooking} from '../../../actions/bookings';

import BigCalendar from 'react-big-calendar';
import NfOrderPopup from './nf-order-popup';
import moment from 'moment';

import {orderPopUpStyles} from '../../../components/modal/nf-modal-styles.js';
import 'react-big-calendar/lib/css/react-big-calendar.css';


BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));


class NfBookings extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount = () => {
    this.props.dispatch(getBookings());
  };

  closeModal = () => {
    this.setState({beingModified: null, isBeingAdded: false});
  };

  onRemove = (item) => {
    if (!this.state.isBeingAdded)
      this.props.dispatch(removeBooking(item));
    this.closeModal();
  };

  saveBooking = (item) => {
    if (this.state.isBeingAdded)
      this.props.dispatch(addToBookings(item));
    else
      this.props.dispatch(editBooking(item));
    this.closeModal();
  };

  addBeingAddedToEvents = () => {
    if (this.state.isBeingAdded)
      return this.props.items.concat([this.state.beingModified]);
    return this.props.items;
  };

  onSelectSlot = (data) => {
    this.setState({beingModified: {...data}, isBeingAdded: true});
  };

  onSelectEvent = (data) => {
    if(!data.permanent)
      this.setState({beingModified: {...data}});
  };


  render() {
    const events = this.addBeingAddedToEvents();

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
              isOpen={!!this.state.beingModified}
              style={orderPopUpStyles}
              onRequestClose={this.closeModal}
              ariaHideApp={false}>
            <NfOrderPopup {...this.state.beingModified}
                          onRemove={this.onRemove}
                          onSubmit={this.saveBooking}/>
          </Modal>
        </div>
    );
  }
}


const mapStateToProps = (state) => {
  const {date, items} = state.bookings;
  return {date, items};
};

export default connect(mapStateToProps)(NfBookings);
