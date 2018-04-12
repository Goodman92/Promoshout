
import { ADD_OFFER, SHOW_SUMMARY, HIDE_SUMMARY, EMPTY_OFFER } from '../actions/offer-modal';
import _ from 'lodash';

const initialState = {
  showError: false,
  errorMessage: '',
  showSummary: false,
  campaignForm: {
    caption: '',
    message: '',
    campaignLength: '',
    date: '',
    time: '',
    file: '',
    imagePreviewUrl: ''
  }
};

const offerModal = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OFFER:
			return Object.assign({}, state, {
        campaignForm: action.items
      });
    case SHOW_SUMMARY:
      return Object.assign({}, state, {
        showSummary: true
      });
    case HIDE_SUMMARY:
      return Object.assign({}, state, {
        showSummary: false
      });
    case EMPTY_OFFER:
      return Object.assign({}, state, {
        showSummary: false,
        campaignForm: {
          caption: '',
          message: '',
          campaignLength: '',
          date: '',
          time: '',
          file: '',
          imagePreviewUrl: ''
        }
      });
    default:
      return state;
  }
};

export default offerModal