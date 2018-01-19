import {STORE_FILTERS, REMOVE_FILTER, CLEAR_ALL} from '../actions/filters';

const initial = {
  q: {value: ''},
  category: {value: ''}
};

const filters = (state = initial, action) => {
  switch (action.type) {
    case STORE_FILTERS:
      return Object.assign({}, state, action.filters);
    case REMOVE_FILTER:
      return Object.assign({}, state, {[action.key]: {value: ''}});
    case CLEAR_ALL:
      return initial;
    default:
      return state;
  }
};

export default filters;