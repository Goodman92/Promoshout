import {RECEIVE_POSTS, REQUEST_POSTS, REQUEST_NEXT} from '../actions/index';

const initialState = {
  right:0,
  left: 0
};

const slider = (state = initialState, action) => {
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

export default slider;