import _ from 'lodash';
import {combineReducers} from 'redux'

import {
  REQUEST_CONNECTIONS,
  RECEIVE_CONNECTIONS,
  CONNECTION_OPENED,
  CONNECTION_CLOSED,
  CONNECTION_MESSAGE,
  CONNECTION_TOGGLED,
  CONNECTION_SHOW,
  UNSHIFT_CONNECTION_FIRST
} from '../actions/sockets';


const chatNormalizer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CONNECTIONS:
      return {
        ...action.connections.reduce((accumulated, item) => {
          return Object.assign(accumulated, {[item.id]: item});
        }, {})
      };
    case CONNECTION_TOGGLED: {
      const item = state[action.id];
      return {...state, [action.id]: {...item, open: !item.open, active: !item.active}};
    }
    case CONNECTION_SHOW: {
      const item = state[action.id];
      return {...state, [action.id]: {...item, open: !item.open, active: true}};
    }
    default:
      return state;
  }
};

const chat = (state = {}, action) => {
  switch (action.type) {
    case CONNECTION_OPENED:
      return {...state, open: true};
    case CONNECTION_CLOSED:
      return {...state, open: false};
    case CONNECTION_MESSAGE:
      console.log("Reducer");
      console.log(action.payload);
    case CONNECTION_SHOW:
      return {...state, connections: chatNormalizer(state.connections, action)};
    case CONNECTION_TOGGLED:
      return {...state, connections: chatNormalizer(state.connections, action)};
    case REQUEST_CONNECTIONS:
      return {...state, fetching: true};
    case RECEIVE_CONNECTIONS:
      return {...state, fetching: false, connections: chatNormalizer(state.connections, action)};
    default:
      return state;
  }
};

const chatsById = (state = [], action) => {
  switch (action.type) {
    case UNSHIFT_CONNECTION_FIRST:
      return [action.id].concat(_.without(state, action.id));
    case RECEIVE_CONNECTIONS:
      return action.connections.map((item) => item.id);
    default:
      return state;
  }
};

const getChatsByIds = (state) => {
  return state.chatsById.map((id) => state.chat.connections[id]);
};

export const chatDenormalizer = (state = [], action) => {
  const denormalized = getChatsByIds(state);

  switch (action.type) {
    case 'ALL':
      return denormalized;
    case 'ACTIVE':
      return denormalized.filter((item) => item.active);
    default:
      return denormalized;
  }
};

const connections = combineReducers({chat, chatsById});

export default connections;
