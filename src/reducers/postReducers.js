
const initialState = [
  {
    postId: 1,
    authorId: 1,
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    date: '2022-05-26T17:11:55+08:00',
    postDescription:
      'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    likes: 23,
    kudos: {
      kudosId: 4,
      personId: 5,
    },
    groupId: 1
  },
  {
    postId: 2,
    authorId: 2,
    avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
    date: '2022-05-25T17:11:55+08:00',
    postDescription:
      'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    likes: 2,
    kudos: {
      kudosId: 1,
      personId: 4,
    },
    groupId: 3
  },
  {
    postId: 3,
    authorId: 3,
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
    date: '2022-05-23T17:11:55+08:00',
    postDescription:
      'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    likes: 1,
    kudos: {
      kudosId: 2,
      personId: 1,
    },
    groupId: 2
  },
  {
    postId: 4,
    authorId: 4,
    avatar: 'https://randomuser.me/api/portraits/men/59.jpg',
    date: '2022-03-26T17:11:55+08:00',
    postDescription:
      'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    likes: 1,
    kudos: {
      kudosId: 2,
      personId: 1,
    },
    groupId: 1
  },
  {
    postId: 6,
    authorId: 6,
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    date: '2022-01-26T17:11:55+08:00',
    postDescription:
      'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    likes: 1,
    kudos: {
      kudosId: 2,
      personId: 1,
    },
    groupId: 1
  },
  {
    postId: 7,
    authorId: 7,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    date: '2021-05-26T17:11:55+08:00',
    postDescription:
      'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    likes: 1,
    kudos: {
      kudosId: 2,
      personId: 1,
    },
    groupId: 1
  },
];

export default (state = initialState) => {
      return state;
  };