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
];

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

export const fetchFeatured = () => (dispatch /*, getState*/) => {
  dispatch(requestFeatured());

  return setTimeout(() => {
    dispatch(receiveFeatured(mockFeatured));
  });

};

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';