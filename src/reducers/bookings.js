import moment from 'moment';
import _ from 'lodash';
import {REQUEST_BOOKINGS, RECEIVE_BOOKINGS, ADD_BOOKING, EDIT_BOOKING, REMOVE_BOOKING} from '../actions/bookings';

const initialState = {
  date: moment(),
  items: [],
  fetching: false
};

const bookings = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_BOOKINGS:
      return Object.assign({}, state, {
        fetching: true
      });
    case RECEIVE_BOOKINGS:
      return Object.assign({}, state, {
        items: action.items,
        fetching: false
      });
    case ADD_BOOKING:
      return Object.assign({}, state, {
        items: state.items.slice().concat([action.item])
      });
    case EDIT_BOOKING:
      return Object.assign({}, state, {
        items: state.items.map((item) => {
          if (item.id === action.item.id)
            return Object.assign({}, item, action.item);
          return item;
        })
      });
    case REMOVE_BOOKING:
      const sought = _.find(state.items, {id: action.item.id});
      return Object.assign({}, state, {
        items: _.remove(state.items.slice(), (item) => item.id !== sought.id)
      });
    default:
      return state;
  }
};

export default bookings;