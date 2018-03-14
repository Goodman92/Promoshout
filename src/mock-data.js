import moment from 'moment';
import uuidv4 from 'uuid/v4';


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
    following: '1',
    desc: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus dolor, rutrum eget eros eu, bibendum vulputate leo. Suspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/1.jpg'
  },
  {
    key: 2,
    name: '@chitywok',
    price: 130,
    followers: '5M',
    following: '2',
    desc: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus dolor, rutrum eget eros eu, bibendum vulputate leo. Suspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/2.jpg'
  },
  {
    key: 3,
    name: '@keewwl',
    price: 100,
    followers: '32k',
    following: '3',
    desc: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus dolor, rutrum eget eros eu, bibendum vulputate leo. Suspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/3.jpg'
  },
  {
    key: 4,
    name: '@John',
    price: 1311,
    followers: '1.3M',
    following: '4',
    desc: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus dolor, rutrum eget eros eu, bibendum vulputate leo. Suspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/4.jpg'
  },
  {
    key: 5,
    name: '@Lad',
    price: 1337,
    followers: '50k',
    following: '5',
    desc: `
      rutrum eget eros eu, bibendum vulputate leo. Suspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/4.jpg'
  },
  {
    key: 6,
    name: '@sickmeit',
    price: 14,
    followers: '10k',
    following: '6',
    desc: `
      Lorem ipsum dolor sit amet, consectetur aequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/4.jpg'
  },
  {
    key: 7,
    name: '@test',
    price: 5,
    followers: '5000',
    following: '7',
    desc: `
    uspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/4.jpg'
  },
    {
    key: 8,
    name: '@dedeeee',
    price: 5,
    followers: '5000',
    following: '8',
    desc: `
    uspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/4.jpg'
  },
    {
    key: 9,
    name: '@asd',
    price: 5,
    followers: '5000',
    following: '9',
    desc: `
    uspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/4.jpg'
  },
    {
    key: 10,
    name: '@qwe',
    price: 5,
    followers: '5000',
    following: '10',
    desc: `
    uspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/4.jpg'
  },
    {
    key: 11,
    name: '@dsa',
    price: 5,
    followers: '5000',
    following: '11',
    desc: `
    uspendisse consequat massa id diam mattis porttitor. Duis ligula magn`,
    image: '../../../resources/images/random/4.jpg'
  },
    {
    key: 12,
    followers: '5000',
    name: '@test',
    price: 5,
    following: '12',
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

/* mock data for bookings */
const mockBookings = Array.from(Array(15).keys(), (_, i) => {
  return {
    start: moment().add(i + 2, 'hours').toDate(),
    end: moment().add(i + 4, 'hours').toDate(),
    id: i+1,
    title: 'nationalisti',
    permanent: true
  }
});


/* mock data for open offers */


const mockOffers = () => Array.from(Array(15).keys(), (_, i) => {
  return {
    id: i+1,
    author: 'Mush mouth ' + Math.random(),
    date : moment(),
    msg: 'This is short message from client',
    read: i < 4,
    status: ((i) => {
        if (i % 5 === 0)
          return 'declined';
        if(i % 4 === 0)
          return 'pending';
        if(i % 3 === 0)
          return 'open';
        return 'completed';
    })(i)
  }
});

/* mock for offer detail */

const mockOfferDetail = {
  id: Math.floor(Math.random() * 100),
  user: 'SHRG',
  created: '2017-01-01',
  msg: "It is a long established fact that a reader will be distracted by the\ " +
  "readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it \h" +
  "as a more-or-less normal distribution",
  caption: "Life with three dogs and a little puppy moves pretty fast! Lucky for us, Google Clips\i" +
  "s helping capture moments with our dogs that we might",
  price: '3.5',
  length: '5',
  requestedTime: '2017-01-01',
  status: Math.floor(Math.random() * 2 + 1) == 1 ? 'pending' : 'open',
  answer: 'Wazzo wazzo wazzo!'
};

/* mock data for tickets */

const mockTickets = [
  {
    id: 1,
    date: '2018-01-01',
    firstMessage: 'first messages 1',
    subject: 'Report user',
    messages: [{message: "some text", id: 11, senderId: 2, date: '1018.3.2', fromSupport: false}]
  },
  {
    id: 2,
    date: '2018-02-12',
    firstMessage: 'first messages 2',
    subject: 'Other',
    messages: [
     {message: "my second message", id: 21, senderId: 2, date: '1018.3.2', fromSupport: false},
     {message: "my third message", id: 22, senderId: 2, date: '1018.4.2', fromSupport: false},
     {message: "message from support", id: 23, senderId: 2, date: '1018.5.2', fromSupport: true}
    ]
  },
  {
    id: 3,
    date: '2018-05-10',
    firstMessage: 'first messages 3',
    subject: 'Bug Report',
    messages: [{message: "putsikatsi", id: 31, senderId: 2, date: '1018.3.2', fromSupport: false},
               {message: "wasso wasso wasso", id: 32, senderId: 2, date: '1018.3.2', fromSupport: true}
              ]
  },
  {
    id: 4,
    date: '2018-11-10',
    firstMessage: 'first messages 4',
    subject: 'Other',
    messages: []
  }
];

const newMockTickets = [
  {
    id: 55,
    date: '2018-01-01',
    firstMessage: 'new messages ' + Math.floor((Math.random() * 1000) + 1),
    subject: 'Report user',
    messages: [{message: "some text", id: 51, senderId: 34, date: '1018.3.2', fromSupport: false}]
  },
  {
    id: 66,
    date: '2018-02-12',
    firstMessage: 'new messages '+ Math.floor((Math.random() * 1000) + 1),
    subject: 'Other',
    messages: [
     {message: "my second message", id: 61, senderId: 345, date: '1018.3.2', fromSupport: false},
     {message: "my third message", id: 62, senderId: 345, date: '1018.4.2', fromSupport: false},
     {message: "message from support", id: 63, senderId: 345, date: '1018.5.2', fromSupport: true}
    ]
  },
  {
    id: 77,
    date: '2018-05-10',
    firstMessage: 'new messages ' +Math.floor((Math.random() * 1000) + 1),
    subject: 'Bug Report',
    messages: [{message: "putsikatsi", id: 71, senderId: 353, date: '1018.3.2', fromSupport: false},
               {message: "wasso wasso wasso", id: 72, senderId: 345, date: '1018.3.2', fromSupport: true}
              ]
  },
  {
    id: 88,
    date: '2018-11-10',
    firstMessage: 'new messages '+Math.floor((Math.random() * 1000) + 1),
    subject: 'Other',
    messages: []
  },
];
const mockHistory = [];

for(let i = 0; i<100; i++) {
  mockHistory.push({
    id: i,
    date: moment().add(i + 2, 'weeks'),
    method: i % 2 === 0 ? 'Paypal' : 'Credit card',
    type: i % 2 === 0 ? 'Deposit' : 'Withdrawal',
    status: i % 2 === 0 ? 'Processed' : 'Pending',
    amount: i * 10
  })
}


export const bookingsMocks = mockBookings;
export const featuredMocks = mockFeatured;
export const influencerMocks = influencerMock;
export const feedMocks = mockFeed;
export const offersMocks = mockOffers;
export const offerDetailMock = mockOfferDetail;
export const ticketsMocks = mockTickets;
export const newTicketsMocks = newMockTickets;
export const historyMocks = mockHistory;
