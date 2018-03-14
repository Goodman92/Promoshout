import { ticketsMocks, newTicketsMocks } from '../mock-data';

const mockTickets = ticketsMocks;


const requestTickets = () => {
  return {
    type: 'REQUEST_TICKETS'
  }
};

const receiveTickets = data => {
  return {
    type: 'RECEIVE_TICKETS',
    items: data
  }
};

const receiveMoreTickets = data => {
  return {
    type: 'RECEIVE_MORE_TICKETS',
    items: data
  }
};

const changePage = num => {
  return {
    type: 'CHANGE_PAGE',
    amount: num
  }
}

export const deleteTicket = (idToDelete) => {
  return {
    type: 'DELETE_TICKET',
    id: idToDelete
  }
};

export const addTicket = (newTicket) => {
  return {
    type: 'ADD_TICKET',
    items: newTicket
  }
};

export const addTicketMessage = (newMessage) => {
  return {
    type: 'ADD_TICKET_MESSAGE',
    items: newMessage
  }
};

export const fetchTickets = () => (dispatch, getState) => {
  dispatch(requestTickets());
  dispatch(receiveTickets(mockTickets));
};

export const requestMore = () => (dispatch, getState) => {
  
  if (pageExist(getState())) {
    dispatch(changePage(1));
  } else {
    if(getState().tickets.page !== getState().tickets.lastPage) {
      dispatch(receiveMoreTickets(newTicketsMocks));
      dispatch(changePage(1));  
    }
  }
};

export const requestPrevious = () => (dispatch, getState) => {
  if (getState().tickets.page !== 0)
    dispatch(changePage(-1));
};


/* Helper functions */

const pageExist = (state) => {
  if((state.tickets.page * state.tickets.size) + state.tickets.size < state.tickets.items.length)
    return true;
}

/********************/

export const REQUEST_TICKETS = 'REQUEST_TICKETS';
export const RECEIVE_TICKETS = 'RECEIVE_TICKETS';
export const DELETE_TICKET = 'DELETE_TICKET';
export const ADD_TICKET = 'ADD_TICKET';
export const ADD_TICKET_MESSAGE = 'ADD_TICKET_MESSAGE';
export const RECEIVE_MORE_TICKETS = 'RECEIVE_MORE_TICKETS';
export const CHANGE_PAGE = 'CHANGE_PAGE';
