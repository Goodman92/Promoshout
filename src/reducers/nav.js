const COLLAPSE_NAV = 'COLLAPSE_NAV';

export const collapseNav = () =>  {
    return {
      type: COLLAPSE_NAV
    }
};

const nav = (state = {collapsed: false}, action) => {
  switch (action.type) {
    case COLLAPSE_NAV:
      return {collapsed: !state.collapsed};
    default:
      return state;
  }
};

export default nav;