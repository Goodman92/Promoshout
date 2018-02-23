import {featuredMocks} from '../mock-data';

const mockFeatured = featuredMocks;


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

export const requestPrevious = () => (dispatch, getState) => {

  const {featured} = getState();

  if(featured.index > 0)
    dispatch(requestNext(-1));

};

export const requestMore = () => (dispatch, getState) => {
  
  const {featured} = getState();

  if( (featured.items.length / featured.size) - 1 > featured.index) {
    dispatch(requestNext(1));
  } else {
    // AJAX (random featured)
    console.log("adding more data...");
    dispatch(receiveFeatured(mockFeatured));   
    dispatch(requestNext(1)); 
  }
};

export const fetchFeatured = () => (dispatch, getState) => {
  
  if(getState().featured.items.length == 0) {
    // AJAX (paid featured)
    dispatch(requestFeatured());
    dispatch(receiveFeatured(mockFeatured));
  }

};

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REQUEST_NEXT = 'REQUEST_NEXT';
