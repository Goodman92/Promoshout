import {STORE_FILTERS} from '../actions/index';


const filters = (state = {}, action) => {
  switch (action.type) {
    case STORE_FILTERS:
      return {
        ...state,
        index: action.amount + state.index
      };
    default:
      return state;
  }
};

export default filters;