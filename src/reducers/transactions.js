import {combineReducers} from 'redux'
import {TRANSACTION_PAGE_CHANGED, REQUEST_TRANSACTIONS, RECEIVE_TRANSACTIONS} from '../actions/transactions';

const initialState = {
  lastPage: 10,
};

const page = (state = 1, action) => {
  switch (action.type) {
    case TRANSACTION_PAGE_CHANGED:
      return action.page;
    default:
      return state;
  }
};

const transaction = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TRANSACTIONS:
      return {
        fetching: false,
        items: action.items
      };
    default:
      return state;
  }
};

const transactions = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TRANSACTIONS:
      return Object.assign({}, state, {
        fetching: true
      });
    case RECEIVE_TRANSACTIONS:
      return Object.assign({}, state, {
        fetching: false,
        [action.page]: transaction(state[action.page], action)
      });
    default:
      return state;
  }
};

const transactionReducer = combineReducers({page, transactions});
export default transactionReducer;