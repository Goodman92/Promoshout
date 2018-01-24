/* mock data for influencers */
let influencerMock = {};

Array.from(Array(10).keys(), (_, i) => {
  let mock = [
    {
      category: 'Cars' + i,
      username: 'Showcar' + i,
      last_online: '2018-01-16',
      charge: 300,
      followers: 120495,
      published: 3000,
      description: 'Best times during 10AM'
    },
    {
      category: 'Design',
      username: 'Designer123',
      last_online: '2018-01-16 20:44',
      charge: 100,
      followers: 33,
      published: 500,
      description: 'My target audience is bicycles'
    },
    {
      category: 'Free time',
      username: 'leiZureguY',
      last_online: '2016-10-10',
      charge: 50,
      followers: 1200,
      published: 50,
      description: 'Guaranteed +100% ROI'
    },
    {
      category: 'Music' + i,
      username: 'bigPumpz' + i,
      last_online: '2016-10-10',
      charge: 300,
      followers: 120495,
      published: 3000,
      description: 'Dem music' + i
    }
  ];
  for (let i = 0; i < 2; i++)
    mock = mock.concat(mock);
  influencerMock[i + 1] = {
    nextPageUrl: 'sivu ' + i,
    previousPageUrl: 'sivu ' + i,
    total: 1000,
    items: mock
  };
  return null;
});
console.log(influencerMock);
/* mock data for featured */
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

export const featuredMocks = mockFeatured;
export const influencerMocks = influencerMock;