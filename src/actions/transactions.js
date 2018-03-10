import {historyMocks} from '../mock-data';
import _ from 'lodash';

const requestTransactionsDispatcher = () => {
  return {
    type: REQUEST_TRANSACTIONS
  }
};

const receiveTransactionsDispatcher = (page, items) => {
  return {
    type: RECEIVE_TRANSACTIONS, page,
    items: items,
    receivedAt: Date.now()
  }
};

const pageChangedDispatcher = (page) => {
  return {
    type: TRANSACTION_PAGE_CHANGED, page
  }
};

const shouldFetchTransaction = (items, page) => {
  return !items[page];
};

export const requestPage = (newPage) => {
  return (dispatch, getState) => {
    const {transactions} = getState().transactions;
    if (newPage >= 1 && newPage <= transactions.lastPage) {
      dispatch(pageChangedDispatcher(newPage));
      dispatch(requestTransactions(newPage));
    }
  }
};

export const requestTransactions = (page) => {
  return (dispatch, getState) => {
    const {transactions} = getState().transactions;
    if (shouldFetchTransaction(transactions, page)) {
      dispatch(requestTransactionsDispatcher());
      dispatch(receiveTransactionsDispatcher(page, _.shuffle(historyMocks.slice().splice(page, 10))));
    }
  }
};


export const TRANSACTION_PAGE_CHANGED = 'TRANSACTION_PAGE_CHANGED';
export const REQUEST_TRANSACTIONS = 'REQUEST_TRANSACTIONS';
export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';
export const CLEAR_TRANSACTIONS = 'CLEAR_TRANSACTIONS';
