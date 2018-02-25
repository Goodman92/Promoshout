import moment from 'moment';
import {offersMocks} from '../mock-data';


const nextPageDispatcher = () => {
  return {
    type:NEXT_PAGE
  }
};

const refreshOrdersDispatcher = (items) => {
  return {
    type: REFRESH_OFFERS,
    items
  }
};

const requestOffersDispatcher = () => {
  return {
    type: REQUEST_OFFERS
  }
};

const receiveOffersDispatcher = (items) => {
  return {
    type: RECEIVE_OFFERS,
    items
  }
};

export const selectOffer = (value, id) => {
  return {
    type: SELECT_OFFER,
    value, id
  }
};

const deleteOffersDispatcher = () => {
  return {
    type: DELETE_OFFERS
  }
};

const markSeenDispatcher = () => {
  return {
    type: MARK_SEEN
  }
};

function hasOffers(offers) {
  return offers.items.length;
}

export const nextPage = () => {
  return (dispatch, getState) => {
    dispatch(nextPageDispatcher);
  };
};

export const deleteOffers = () => {
  return (dispatch, getState) => {
    const {offers} = getState();
    //AJAX
    dispatch(deleteOffersDispatcher());
  };

};

export const markSeen = () => {
  return (dispatch, getState) => {
    const {offers} = getState();
    //AJAX
    dispatch(markSeenDispatcher());
  };

};

export const requestOffers = (page = null) => {
  return (dispatch, getState) => {
    const {offers} = getState();
    if (!hasOffers(offers)) {
      dispatch(requestOffersDispatcher());
      dispatch(receiveOffersDispatcher(offersMocks));
    }
  };
};

export const refreshOffers = () => {
  return (dispatch) => {
    dispatch(requestOffersDispatcher());
    // AJAX
    const mock = offersMocks;
    mock.unshift({
      id: Math.random(),
      author: 'Random guy' + Math.random(),
      date: moment(),
      msg: 'Random message ' + Math.random(),
      read: false
    });

    dispatch(refreshOrdersDispatcher(mock));
  }
};


export const RECEIVE_OFFERS = 'RECEIVE_OFFERS';
export const REQUEST_OFFERS = 'REQUEST_OFFERS';
export const SELECT_OFFER = 'SELECT_OFFER';
export const DELETE_OFFERS = 'DELETE_OFFERS';
export const REFRESH_OFFERS = 'REFRESH_OFFERS';
export const MARK_SEEN = 'MARK_SEEN';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';