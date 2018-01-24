import {featuredMocks} from '../mock-data';

const mockFeatured = featuredMocks;

function canMove(state, amount, size) {
  return state.featured.index + amount + size <= state.featured.items.length && state.featured.index + amount >= 0;
}

export const requestFeatured = () => {
  return {
    type: 'REQUEST_POSTS'
  }
};

export const receiveFeatured = data => {
  return {
    type: 'RECEIVE_POSTS',
    items: data
  }
};

export const requestNext = amount =>  {
    return {
      type: 'REQUEST_NEXT',
      amount: amount
    }
};

export const requestMore = (amount, size = 4) => (dispatch, getState) => {
  if (canMove(getState(), amount, size))
    return dispatch(requestNext(amount));
};

export const fetchFeatured = () => (dispatch) => {
  dispatch(requestFeatured());
  return dispatch(receiveFeatured(mockFeatured));
};

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REQUEST_NEXT = 'REQUEST_NEXT';
