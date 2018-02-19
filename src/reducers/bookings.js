import moment from 'moment';
import {REQUEST_BOOKINGS, RECEIVE_BOOKINGS, ADD_BOOKING, REMOVE_BOOKING, BEING_EDITED} from '../actions/bookings';

const initialState = {
  date: moment(),
  beingEdited: null,
  items: [],
  fetching: false
};

const bookings = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_BOOKINGS:
    case RECEIVE_BOOKINGS:
      return Object.assign({}, state, {
        items: action.items
      });
    case ADD_BOOKING:
      return Object.assign({}, state, {
          items: state.items.slice().concat([action.item])
      });
    case BEING_EDITED:
      return Object.assign({}, state, {beingEdited: action.item});
    case REMOVE_BOOKING:
    default:
      return state;
  }
};

export default bookings;