import moment from 'moment';
import {CHANGE_MODE,MOVE_ON_TIME, REQUEST_ORDERS, RECEIVE_ORDERS} from '../actions/orders';

const initialState = {
  mode: 'm',
  units: 6,
  orders: [],
  revenue: [],
  date: moment(),
  fetching: false
};

const orders = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return Object.assign({}, state, {mode: action.mode});
    case MOVE_ON_TIME:
      return Object.assign({}, state, {date: action.date});
    case REQUEST_ORDERS:
      return Object.assign({}, state, {fetching: true});
    case RECEIVE_ORDERS:
    default:
      return state;
  }
};

export default orders;