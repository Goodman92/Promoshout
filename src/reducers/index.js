import {RECEIVE_POSTS, REQUEST_POSTS, REQUEST_NEXT, RESTART_INDEX, CHANGE_PAGE} from '../actions/index';

const initialState = {
  fetching: false,
  index: 0,
  page: 0,
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
    case RESTART_INDEX:
      return {
        ...state,
        fetching: false,
        index: action.amount
      };
    case CHANGE_PAGE:
      return {
        ...state,
        fetching: false,
        page: action.amount + state.page
      };
    default:
      return state;
  }
};

export default featured;