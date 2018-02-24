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

const editBookingDispatch = (item) => {
  return {
    type: EDIT_BOOKING,
    item
  }
};

const removeBookingDispatcher = (item) => {
  return {
    type: REMOVE_BOOKING,
    item
  }
};

function shouldGetBookings(state) {
  return !state.bookings.items.length;
}


export const editBooking = (item) => {
  return (dispatch) => {
    // AJAX
    dispatch(editBookingDispatch(item));
  }
};

export const addToBookings = (item) => {
  return (dispatch) => {
    // testing purposes
    item.id = Math.random();
    //ajax
    dispatch(addBookingDispatcher(item));
  };
};

export const removeBooking = (item) => {
  return (dispatch) => {
    //AJAX, SUCCESS
    dispatch(removeBookingDispatcher(item));
  };
};


export const getBookings = (date) => {
  return (dispatch, getState) => {
    if (shouldGetBookings(getState())) {
      dispatch(requestBookingDispatcher());
      dispatch(receiveBookingsDispatcher(bookingsMocks));
    }
  };
};


export const REQUEST_BOOKINGS = 'REQUEST_BOOKINGS';
export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const EDIT_BOOKING = 'EDIT_BOOKING';
export const ADD_BOOKING = 'ADD_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';

