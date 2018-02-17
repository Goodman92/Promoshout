import {SHOW_MORE, SHOW_LESS, RECEIVE_FEEDS, REQUEST_FEEDS} from '../actions/feed';

const initialState = {
    page: 1,
    fetching: false,
    lastPage: null,
    items: [],
    pageSize: 3
};


const feed = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MORE:
      return Object.assign({}, {...state, page: state.page + 1});
    case SHOW_LESS:
      return Object.assign({}, {...state, page: state.page - 1});
    case RECEIVE_FEEDS:
      return Object.assign({}, {...state, fetching: false, items: state.items.slice().concat(action.items)});
    case REQUEST_FEEDS:
      return Object.assign({}, {...state, fetching: true});
    default:
      return state;
  }
};

export default feed;