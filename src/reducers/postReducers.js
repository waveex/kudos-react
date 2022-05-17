import { ADD_HEART } from '../actions/types';

const initialState = [
  {
    postId: 1,
    authorId: 5,
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    date: '3 dni temu',
    description:
      'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    heart: 0,
  },
  {
    postId: 2,
    authorId: 4,
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    date: '3 dni temu',
    description:
      'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    heart: 0,
  },
  {
    postId: 3,
    authorId: 1,
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    date: '3 dni temu',
    description:
      'Wielkie dzięki @Barbara Klimowicz za współpracę przy ostatnim projekcie. Dzięki twojej pomocy poradziłam sobie z badaniami i analizą! Mam nadzieję że jeszcze wiele takich projektów przed nami.',
    heart: 0,
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_HEART: {
      // eslint-disable-next-line no-plusplus, no-param-reassign
      state.forEach(post => post.id === action.id && ++post.heart);
      return [...state];
    }

    default:
      return state;
  }
};