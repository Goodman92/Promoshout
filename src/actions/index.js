import {featuredMocks} from '../mock-data';

const mockFeatured = featuredMocks;


const requestFeatured = () => {
  return {
    type: 'REQUEST_POSTS'
  }
};

const receiveFeatured = data => {
  return {
    type: 'RECEIVE_POSTS',
    items: data
  }
};

const restartIndex = amount =>  {
    return {
      type: 'RESTART_INDEX',
      amount: amount
    }
};

const requestNext = amount =>  {
    return {
      type: 'REQUEST_NEXT',
      amount: amount
    }
};

const changePage = amount =>  {
    return {
      type: 'CHANGE_PAGE',
      amount: amount
    }
};


export const requestPrevious = () => (dispatch, getState) => {

  const {featured} = getState();

  if(featured.index > 0)
    dispatch(requestNext(-1));
  else {

    const {featured} = getState();

    if(featured.page === 0)
      return;

    dispatch(changePage(-1));   
    dispatch(receiveFeatured(mockFeatured));   
    dispatch(restartIndex((featured.items.length / featured.size) - 1));    
  }

};

export const requestMore = () => (dispatch, getState) => {
  
  const {featured} = getState();

  if( (featured.items.length / featured.size) - 1 > featured.index) {
    dispatch(requestNext(1));
  } else {
    dispatch(receiveFeatured(mockFeatured));   
    dispatch(restartIndex(0));   
    dispatch(changePage(1));   
  }
};

export const fetchFeatured = () => (dispatch, getState) => {
  
  const {featured} = getState();

  if(!featured.items.length) {
    dispatch(requestFeatured());
    dispatch(receiveFeatured(mockFeatured));
  }

};

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REQUEST_NEXT = 'REQUEST_NEXT';
export const RESTART_INDEX = 'RESTART_INDEX';
export const CHANGE_PAGE = 'CHANGE_PAGE';
