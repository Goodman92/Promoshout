import {combineReducers} from 'redux';
import {REQUEST_INFLUENCERS, RECEIVE_INFLUENCERS, INVALIDATE_INFLUENCERS, PAGE_CHANGED} from '../actions/influencers';

let initialState = {
  page: 1,
  isFetching: false,
  didInvalidate: false,
  lastUpdated: null,
  previousPageUrl: null,
  nextPageUrl: null,
  items: []
};

function page(state = 1, action) {
  switch (action.type) {
    case PAGE_CHANGED:
      return action.page;
    default:
      return state;
  }
}

function influencers(state = initialState, action) {
  switch (action.type) {
    case INVALIDATE_INFLUENCERS:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_INFLUENCERS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_INFLUENCERS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        ...action.items
      });

    default:
      return state;

  }
}

function postsByInfluencers(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_INFLUENCERS:
    case RECEIVE_INFLUENCERS:
    case REQUEST_INFLUENCERS:
      return Object.assign({}, state, {
        [action.page]: influencers(state[action.page], action)
      });
    default:
      return state;
  }
}

const reducer = combineReducers({
  page,
  postsByInfluencers
});

export default reducer;