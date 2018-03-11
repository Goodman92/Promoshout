import { RECEIVE_TICKETS, REQUEST_TICKETS, DELETE_TICKET, ADD_TICKET, ADD_TICKET_MESSAGE, RECEIVE_MORE_TICKETS } from '../actions/tickets';
import _ from 'lodash';

const initialState = {
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
        items: action.items
      }
    case DELETE_TICKET:
      const sought = _.find(state.items, {id: action.id});

      return Object.assign({}, state, {
        items: _.remove(state.items.slice(), (item) => item.id !== sought.id)
      });
    case ADD_TICKET:
      return {
        ...state, 
        items: state.items.concat([action.items])
      }
    case ADD_TICKET_MESSAGE:
        return {
          items:
            state.items.slice().map((item) => {
              if (item.id === action.items.parentID)
                return Object.assign({}, item, { messages: _.concat(item.messages.slice(), [action.items])});
              return item;
            })
        }

    default:
      return state;
  }
};

export default tickets