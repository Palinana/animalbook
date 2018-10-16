const db = require('./db');
const Animal = db.models.animal;

const animals = [{
  name: 'Taylor',
  animal: 'Dog',
  state: 'WA',
  gender: 'Male',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'https://images.unsplash.com/photo-1532753876631-2d5cf129df39?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1dc0897be3b71a7486b2aad2778e66c2&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
  DOB: '2015-02-13',
}, {
  name: 'Reggie',
  animal: 'Chameleon',
  state: 'CA',
  gender: 'Male',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'https://images.unsplash.com/photo-1515632816436-da217f0aef30?ixlib=rb-0.3.5&s=110b78647e78626642ef69970487baf5&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
  DOB: '2012-05-27',
}, {
  name: 'Christian',
  animal: 'Turtle',
  state: 'MO',
  gender: 'Male',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'https://images.unsplash.com/photo-1483221097671-a95cca65490b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=400c490c37fb09c6a869a9f51d0b9b8a&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
  DOB: '2008-12-23',
}, {
  name: 'Jessie',
  animal: 'Cat',
  state: 'LI',
  gender: 'Female',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'https://images.unsplash.com/photo-1491833485966-73cfb9ccea53?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=46d77b84b6a50bf258f30d18ed26338d&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
  DOB: '2018-01-02',
}, {
  name: 'Pandora',
  animal: 'Snake',
  state: 'TX',
  gender: 'Female',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'https://images.unsplash.com/photo-1506298520202-270c44f2793a?ixlib=rb-0.3.5&s=7a072d01d8a4a5306d79eaefcdd63d08&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
  DOB: '2013-09-21',
}, {
  name: 'Tiffany',
  animal: 'Fox',
  state: 'NM',
  gender: 'Female',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'https://i.pinimg.com/564x/a2/cf/6f/a2cf6fc71b95e06cd0f8edd91c314574.jpg',
  DOB: '2013-09-21',
}, {
    name: 'Stiven',
    animal: 'Frog',
    state: 'WY',
    gender: 'Female',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: 'https://images.unsplash.com/photo-1509478571772-7cd058f8de4e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=113a7b7cd1a5fd8ac4ecd610332aa669&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
    DOB: '2018-01-02',
}];

const seed = async () => {
  try {
    await db.sync({ force: true });
    const animls = await Promise.all(animals.map(animal => Animal.create(animal)));
    console.log('Seeding complete');
  } catch (err) {
    console.error('Seeding failed:', err);
  }
  db.close();
};

seed();