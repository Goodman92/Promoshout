import moment from 'moment';
import _ from 'lodash';
import {
  REQUEST_OFFERS,
  RECEIVE_OFFERS,
  SELECT_OFFER,
  REFRESH_OFFERS,
  DELETE_OFFERS,
  MARK_SEEN
} from '../actions/offers';

const initialState = {
  date: moment(),
  page: 1,
  lastPage: 10,
  fetching: false,
  items: []
};

// Split this
const offers = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_OFFERS:
      return Object.assign({}, state, {
        fetching: true
      });
    case RECEIVE_OFFERS:
      return Object.assign({}, state, {
        items: state.items.splice().concat(action.items.map((item) => {
          return {
            ...item,
            selected: false
          }
        })),
        fetching: false
      });

    case SELECT_OFFER:
      return Object.assign({}, state, {
        items: state.items.map((item) => {
          if (item.id === action.id)
            return Object.assign({}, item, {selected: action.value});
          return item;
        }),
      });

    case REFRESH_OFFERS:
      const serialized = _.reduce(state.items, function (obj, param) {
        obj[param.id] = param;
        return obj;
      }, {});

      return Object.assign({}, state, {
        items: action.items.map((item) => {
          return {
            ...item,
            selected: !!(serialized[item.id] || {}).selected
          };
        }),
      });

    case DELETE_OFFERS:
      const ids = _.map(_.filter(state.items, {selected: true}), 'id');
      return Object.assign({}, state, {
        items: _.filter(state.items, (item) => {
          return !_.includes(ids, item.id);
        }),
      });

    case MARK_SEEN:
      const selectedIds = _.map(_.filter(state.items, {selected: true}), 'id');
      return Object.assign({}, state, {
        items: _.map(state.items, (item) => {
          if(_.includes(selectedIds, item.id))
            return Object.assign({}, item, {selected: false, read: false});
          return item;
        }),
      });

    default:
      return state;
  }
};

export default offers;