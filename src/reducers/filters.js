import {STORE_FILTERS, REMOVE_FILTER, CLEAR_ALL} from '../actions/filters';

const initial = {
  q: {value: '', label: 'text'},
  category: {value: '', label: 'category'},
  age: {value: '', label: 'age'},
  location: {value: '', label: 'location'},
  price: {value_min: '', value_max: '', type: 'range', label: 'price'},
  followers: {value_min: '', value_max: '', type: 'range', label: 'followers'},
  rate: {value_min: '', value_max: '', type: 'range', label: 'rate'},
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