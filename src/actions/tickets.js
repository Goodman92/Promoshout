import {ticketsMocks} from '../mock-data';

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

export const deleteTicket = data => {
	console.log("@ actions: " + data);
};

export const fetchTickets = () => (dispatch, getState) => {
  dispatch(requestTickets());
  dispatch(receiveTickets(mockTickets));
};

export const REQUEST_TICKETS = 'REQUEST_TICKETS';
export const RECEIVE_TICKETS = 'RECEIVE_TICKETS';
export const DELETE_TICKET = 'DELETE_TICKET';
