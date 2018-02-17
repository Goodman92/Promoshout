import {feedMocks} from '../mock-data';

const showLessDispatcher = () => {
  return {
    type: SHOW_LESS
  }
};

const showMoreDispatcher = () => {
  return {
    type: SHOW_MORE
  }
};

export const receiveFeeds = (items) => {
  return {
    type: RECEIVE_FEEDS,
    items: items
  }
};


const hasPage = (feed, page) => {
  const feedSize = feed.items.length;
  return feedSize > (page * feed.pageSize);
};

const shouldGetMoreFeeds = (state, page) => {
  const {feed} = state;

  if (!page && !feed.items.length)
    return true;
  return hasPage(feed, page);
};

const getFeeds = () => {
  return dispatch => {
    dispatch(receiveFeeds(feedMocks));
  }
};

export const showLess = () => {
  return (dispatch, getState) => {
    const page = getState().feed.page;
    dispatch(showLessDispatcher());
    if (shouldGetMoreFeeds(getState(), page + 1))
      dispatch(getFeeds())

  };
};

export const showMore = () => {
  return (dispatch, getState) => {
    const page = getState().feed.page;
    dispatch(showMoreDispatcher());
    if (shouldGetMoreFeeds(getState(), page - 1))
      dispatch(getFeeds())

  };
};

export const requestFeeds = () => {
  return (dispatch, getState) => {
    if (shouldGetMoreFeeds(getState())) {
      dispatch(getFeeds())
    }
  };
};


export const SHOW_MORE = 'SHOW_MORE';
export const SHOW_LESS = 'SHOW_LESS';
export const RECEIVE_FEEDS = 'RECEIVE_FEEDS';
export const REQUEST_FEEDS = 'REQUEST_FEEDS';
