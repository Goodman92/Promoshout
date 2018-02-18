import GraphTimeController from '../components/graph-controller/graph-time-controller';

const receiveOrdersDispatcher = (items) => {
  return {
    type: RECEIVE_ORDERS,
    items: items
  }
};

const changeModeDispatcher = (mode) => {
  return {
    type: CHANGE_MODE,
    mode: mode
  }
};

const requestOrdersDispatcher = () => {
  return {
    type: REQUEST_ORDERS,
  }
};


const moveOnTimeDispatcher = (date) => {
  return {
    type: MOVE_ON_TIME,
    date: date
  }
};


const fetchOrders = (state, extra) => {
  // AJAX
  return dispatch => {
    dispatch(receiveOrdersDispatcher());
  }
};

export const changeMode = (mode) => {
  return (dispatch, getState) => {
    // if we are fetching what to do
    const {orders} = getState();
    dispatch(changeModeDispatcher(mode));
    dispatch(requestOrdersDispatcher());
    dispatch(fetchOrders(orders, {mode}));
  }
};

export const moveOnTime = (date) => {
  return (dispatch, getState) => {
    const {orders} = getState();
    dispatch(requestOrdersDispatcher());
    dispatch(moveOnTimeDispatcher(date));
    date = GraphTimeController.parseFromMoment(date);
    dispatch(fetchOrders(orders, {date}));
  }
};

export const CHANGE_MODE = 'CHANGE_MODE';
export const MOVE_ON_TIME = 'MOVE_ON_TIME';
export const REQUEST_ORDERS = 'REQUEST_ORDERS';
export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';