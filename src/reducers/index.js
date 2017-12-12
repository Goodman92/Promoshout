import {RECEIVE_POSTS, REQUEST_POSTS} from '../actions/index';

const initialState = {
  fetching: false,
  items: []
};

const featured = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        fetching: true
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        fetching: false,
        items: action.items
      };
    default:
      return state;
  }
};

export default featured;