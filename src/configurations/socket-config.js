const socketEvents = ['opened', 'closed', 'message'];

const accumulated = socketEvents.reduce((acc, item) => {
  return Object.assign(acc, {[item]: item});
}, {});

const chatSocketAddressFn = (id) => {
  return 'ws://localhost:8000/ws/connections/:id/'.replace(':id', id);
};


export const socketMessages = accumulated;
export const chatSocketAddress = chatSocketAddressFn;


