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

export const deleteTicket = (idToDelete) => {
  return {
    type: 'DELETE_TICKET',
    id: idToDelete
  }
};

export const addTicket = (newTicket) => {
  // AJAX
  return {
    type: 'ADD_TICKET',
    items: newTicket
  }
};

export const addTicketMessage = (newMessage) => {
  // AJAX
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
  
  dispatch(receiveMoreTickets(newTicketsMocks));
  
  console.log("lads");
};

export const REQUEST_TICKETS = 'REQUEST_TICKETS';
export const RECEIVE_TICKETS = 'RECEIVE_TICKETS';
export const DELETE_TICKET = 'DELETE_TICKET';
export const ADD_TICKET = 'ADD_TICKET';
export const ADD_TICKET_MESSAGE = 'ADD_TICKET_MESSAGE';
export const RECEIVE_MORE_TICKETS = 'RECEIVE_MORE_TICKETS';
