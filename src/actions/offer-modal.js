
export const addOffer = (newOffer) => {
  return {
    type: 'ADD_OFFER',
    items: newOffer
  }
};

export const showSummary = () => {
  return {
    type: 'SHOW_SUMMARY'
  }
};

export const hideSummary = () => {
  return {
    type: 'HIDE_SUMMARY'
  }
};

export const emptyOffer = () => {
  return {
    type: 'EMPTY_OFFER'
  }
};


export const ADD_OFFER = 'ADD_OFFER';
export const SHOW_SUMMARY = 'SHOW_SUMMARY';
export const HIDE_SUMMARY = 'HIDE_SUMMARY';
export const EMPTY_OFFER = 'EMPTY_OFFER';
