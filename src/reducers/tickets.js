import { RECEIVE_TICKETS, REQUEST_TICKETS, DELETE_TICKET, ADD_TICKET, ADD_TICKET_MESSAGE, RECEIVE_MORE_TICKETS, CHANGE_PAGE } from '../actions/tickets';
import _ from 'lodash';

const initialState = {
  index: 0,
  page: 0,
  lastPage: 10,
  size: 4,
  fetching: false,
  items: []
};

const tickets = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TICKETS:
      return {
        ...state,
        fetching: true
      };
    case RECEIVE_TICKETS:
      return {
        ...state,
        fetching: false,
        items: action.items
      };
    case RECEIVE_MORE_TICKETS:
      return {
        ...state,
        fetching: false,
        items: _.concat(...state.items, action.items)
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.amount + state.page
      };
    case DELETE_TICKET:
      const sought = _.find(state.items, {id: action.id});

      return Object.assign({}, state, {
        items: _.remove(state.items.slice(), (item) => item.id !== sought.id)
      });
    case ADD_TICKET:
      return {
        ...state, 
        items: [...state.items, action.items] 
      }
    case ADD_TICKET_MESSAGE:
        return {
          ...state,
          items:
            state.items.slice().map((item) => {
              if (item.id === action.items.parentID)
                return Object.assign({}, item, { messages: [...item.messages.slice(), action.items] }); 
              return item;
            })
        }
    default:
      return state;
  }
};

export default tickets