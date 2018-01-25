import {STORE_FILTERS, REMOVE_FILTER, CLEAR_ALL} from '../actions/filters';

const initial = {
  q: {value: ''},
  category: {value: ''},
  age: {value:''},
  location: {value:''},
  price: {value_min: '', value_max:'', type: 'range'},
  followers: {value_min: '', value_max:'', type: 'range'},
  rate: {value_min: '', value_max:'', type: 'range'},
};

const filters = (state = initial, action) => {
  switch (action.type) {
    case STORE_FILTERS:
      return Object.assign({}, state, action.filters);
    case REMOVE_FILTER:
      return Object.assign({}, state, {[action.key]: initial[action.key]});
    case CLEAR_ALL:
      return initial;
    default:
      return state;
  }
};

export default filters;