import {bookingsMocks} from '../mock-data';


const requestBookingDispatcher = () => {
    return {
      type: REQUEST_BOOKINGS
    }
};

const receiveBookingsDispatcher = (items) => {
    return {
      type: RECEIVE_BOOKINGS,
      items: items
    }
};

const addBookingDispatcher = (item) => {
    return {
      type: ADD_BOOKING,
      item
    }
};

const removeBookingDispatcher = () => {
    return {
      type: REMOVE_BOOKING
    }
};

function shouldGetBookings(state) {
    return !state.bookings.items.length;
}

export const addToBookings = (item) => {
  return (dispatch) => {
    //ajax
    dispatch(setToBeingEdited());
    dispatch(addBookingDispatcher(item));
  };
};

export const setToBeingEdited = (item) => {
  return {
    type: BEING_EDITED,
    item: item
  }
};

export const getBookings = (date) => {
  return (dispatch, getState) => {
      if(shouldGetBookings(getState()))
        dispatch(receiveBookingsDispatcher(bookingsMocks));
  };

};


export const REQUEST_BOOKINGS = 'REQUEST_BOOKINGS';
export const BEING_EDITED = 'BEING_EDITED';
export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const ADD_BOOKING = 'ADD_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';

