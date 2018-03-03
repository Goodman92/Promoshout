import { RECEIVE_TICKETS, REQUEST_TICKETS, DELETE_TICKET } from '../actions/tickets';

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
    case DELETE_TICKET:
      return {
        ...state,
        fetching: false,
        items: action.items
      };
    default:
      return state;
  }
};

export default tickets;