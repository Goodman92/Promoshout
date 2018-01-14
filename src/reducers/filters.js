import {STORE_FILTERS} from '../actions/filters';

const filters = (state = {}, action) => {
  switch (action.type) {
    case STORE_FILTERS:
      return Object.assign({}, state, action.filters);
    default:
      return state;
  }
};

export default filters;