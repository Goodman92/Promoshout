import {influencerMocks} from '../mock-data';

const mocks = influencerMocks;


function requestInfluencers(page) {
  return {
    type: REQUEST_INFLUENCERS,
    page: page
  }
}

function receiveInfluencers(page, items) {
  return {
    type: RECEIVE_INFLUENCERS, page,
    items: items,
    receivedAt: Date.now()
  }
}

export function invalidateInfluencers(page) {
  return {
    type: INVALIDATE_INFLUENCERS, page
  }
}

function fetchInfluencers(page = 1) {
  return dispatch => {
    dispatch(requestInfluencers(page));
    //AJAX
    dispatch(receiveInfluencers(page, mocks[page]));
  }
}

export function pageChanged(page) {
  return {
    type:PAGE_CHANGED, page
  }
}

function shouldFetchInfluencers(state, page) {
  const influencers = state.influencers[page];
  if (!influencers)
    return true;
  else if (influencers.isFetching)
    return false;
  else
    return influencers.didInvalidate;
}

export function fetchInfluencersIfNeeded(page) {
  return (dispatch, getState) => {
    if (shouldFetchInfluencers(getState(), page))
      return dispatch(fetchInfluencers(page));
    return Promise.resolve();
  }
}

export const PAGE_CHANGED = 'PAGE_CHANGED';
export const REQUEST_INFLUENCERS = 'REQUEST_INFLUENCERS';
export const RECEIVE_INFLUENCERS = 'RECEIVE_INFLUENCERS';
export const INVALIDATE_INFLUENCERS = 'INVALIDATE_INFLUENCERS';