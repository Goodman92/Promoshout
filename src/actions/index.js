const mockFeatured = [
  {
    key: 1,
    desc: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus dolor, rutrum eget eros eu, bibendum vulputate leo. Suspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/1.jpg'
  },
  {
    key: 2,
    desc: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus dolor, rutrum eget eros eu, bibendum vulputate leo. Suspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/2.jpg'
  },
  {
    key: 3,
    desc: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus dolor, rutrum eget eros eu, bibendum vulputate leo. Suspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/3.jpg'
  },
  {
    key: 4,
    desc: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus dolor, rutrum eget eros eu, bibendum vulputate leo. Suspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/4.jpg'
  },
  {
    key: 5,
    desc: `
      rutrum eget eros eu, bibendum vulputate leo. Suspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/4.jpg'
  },
  {
    key: 6,
    desc: `
      Lorem ipsum dolor sit amet, consectetur aequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/4.jpg'
  },
  {
    key: 7,
    desc: `
    uspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/4.jpg'
  },
];

function canMove(state, amount, size) {
  return state.index + amount + size <= state.items.length && state.index + amount >= 0;
}

export const requestFeatured = () => {
  return {
    type: 'REQUEST_POSTS'
  }
};

export const receiveFeatured = data => {
  return {
    type: 'RECEIVE_POSTS',
    items: data
  }
};

export const requestNext = amount =>  {
    return {
      type: 'REQUEST_NEXT',
      amount: amount
    }
};

export const requestMore = (amount, size = 4) => (dispatch, getState) => {
  if (canMove(getState(), amount, size))
    return dispatch(requestNext(amount));
};

export const fetchFeatured = () => (dispatch) => {
  dispatch(requestFeatured());

  return setTimeout(() => {
    dispatch(receiveFeatured(mockFeatured));
  });

};

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REQUEST_NEXT = 'REQUEST_NEXT';
