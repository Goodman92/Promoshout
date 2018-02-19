import moment from 'moment';


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
/* mock data for featured */
const mockFeatured = [
  {
    key: 1,
    name: '@test',
    price: 1337,
    followers: '50k',
    following: '122',
    desc: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus dolor, rutrum eget eros eu, bibendum vulputate leo. Suspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/1.jpg'
  },
  {
    key: 2,
    name: '@chitywok',
    price: 130,
    followers: '5M',
    following: '15k',
    desc: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus dolor, rutrum eget eros eu, bibendum vulputate leo. Suspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/2.jpg'
  },
  {
    key: 3,
    name: '@keewwl',
    price: 100,
    followers: '32k',
    following: '12k',
    desc: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus dolor, rutrum eget eros eu, bibendum vulputate leo. Suspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/3.jpg'
  },
  {
    key: 4,
    name: '@John',
    price: 1311,
    followers: '1.3M',
    following: '142',
    desc: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus dolor, rutrum eget eros eu, bibendum vulputate leo. Suspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/4.jpg'
  },
  {
    key: 5,
    name: '@Lad',
    price: 1337,
    followers: '50k',
    following: '1k',
    desc: `
      rutrum eget eros eu, bibendum vulputate leo. Suspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/4.jpg'
  },
  {
    key: 6,
    name: '@sickmeit',
    price: 14,
    followers: '10k',
    following: '1k',
    desc: `
      Lorem ipsum dolor sit amet, consectetur aequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/4.jpg'
  },
  {
    key: 7,
    name: '@test',
    price: 5,
    followers: '5000',
    following: '1k',
    desc: `
    uspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/4.jpg'
  },
];

/* mock data for feed */
const mockFeed = [
  {
    sender: 'Monica Smith',
    date: '2018-01-01',
    type: 'offer',
    image: '../../../resources/images/random/1.jpg'
  },
  {
    sender: 'John Doe',
    date: '2018-02-12',
    type: 'offer',
    image: '../../../resources/images/random/2.jpg'
  },
  {
    sender: 'Shougar',
    date: '2018-05-10',
    type: 'offer',
    image: '../../../resources/images/random/3.jpg'
  },
  {
    sender: 'BigBoy',
    date: '2017-12-10',
    type: 'offer',
    image: '../../../resources/images/random/4.jpg'
  },
  {
    sender: 'Fiona Moonala',
    date: '2018-01-01',
    type: 'offer',
    image: '../../../resources/images/random/4.jpg'
  },
  {
    sender: 'Monica Smith',
    date: '2018-01-01',
    type: 'offer',
    image: '../../../resources/images/random/4.jpg'
  },
  {
    sender: 'Monica Smith',
    date: '2018-01-01',
    type: 'offer',
    image: '../../../resources/images/random/4.jpg'
  },
];

const mockBookings = Array.from(Array(15).keys(), (_, i) => {
  return {
    start: moment().add(i + 2, 'hours').toDate(),
    end: moment().add(i + 4, 'hours').toDate()
  }
});

export const bookingsMocks = mockBookings;
export const featuredMocks = mockFeatured;
export const influencerMocks = influencerMock;
export const feedMocks = mockFeed;
