import {RECEIVE_POSTS, REQUEST_POSTS, REQUEST_NEXT} from '../actions/index';

const initialState = {
  fetching: false,
  index: 0,
  size: 4,
  items: []
};

const featured = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_NEXT:
      return {
        ...state,
        index: action.amount + state.index
      };
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