const SHOW_LOGIN = 'SHOW_LOGIN';
const LOGIN_ON_YET = 'LOGIN_ON_YET';
const LOGIN_HIDE = 'LOGIN_HIDE';

export const showLogin = () =>  {
    return {
      type: SHOW_LOGIN
    }
};

export const loginOnYet = () =>  {
    return {
      type: LOGIN_ON_YET
    }
};

export const loginHide = () =>  {
    return {
      type: LOGIN_HIDE
    }
};

const login_popup = (state = {show: false}, action) => {
  switch (action.type) {
    case SHOW_LOGIN:
      return {show: !state.show};
    case LOGIN_ON_YET:
      return {show: true};
    case LOGIN_HIDE:
      return {show: false};
    default:
      return state;
  }
};

export default login_popup;