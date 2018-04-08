import WebSockHop from "websockhop";
import {socketMessages, chatSocketAddress} from '../configurations/socket-config';
import {connectionMocks} from '../mock-data';


const initializeChatSockets = (dispatch) => {
  const address = chatSocketAddress('1');
  const socket = new WebSockHop(address);

  Object.keys(socketMessages).forEach((event) => {
    socket.on(event, (payload) => {
      console.log("PWS socket on: " + event + " payload: " + payload);
      const type = 'connection_:type'.replace(':type', event);
      dispatch({type, payload});
    });
  });
};

const receiveConnectionsDispatcher = (connections) => {
  return {
    type: RECEIVE_CONNECTIONS,
    connections
  }
};

const requestConnectionsDispatcher = () => {
  return {
    type: REQUEST_CONNECTIONS
  }
};

const toggleConnectionDispatcher = (id) => {
  return {
    type: CONNECTION_TOGGLED,
    id: id
  }
};

const toggleConnectionOpenDispatcher = (id) => {
  return {
    type: CONNECTION_SHOW,
    id: id
  }
};


const receive = () => {
  return (dispatch, getState) => {
    dispatch(requestConnectionsDispatcher());
    const user = getState().user || 1;
    dispatch(receiveConnectionsDispatcher(connectionMocks));
  };
};

export const CONNECTION_OPENED = 'connection_opened';
export const CONNECTION_CLOSED = 'connection_closed';
export const CONNECTION_MESSAGE = 'connection_message';
export const CONNECTION_TOGGLED = 'connection_togled';
export const CONNECTION_SHOW = 'connection_show';

export const REQUEST_CONNECTIONS = 'connection_request_connections';
export const RECEIVE_CONNECTIONS = 'connection_receive_connections';

export const chatSocketInitializer = initializeChatSockets;
export const receiveConnections = receive;
export const toggleConnection = toggleConnectionDispatcher;
export const toggleConnectionOpen = toggleConnectionOpenDispatcher;