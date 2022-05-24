import { ADD_POST } from './types';
export const addPost = personId => ({
    type: ADD_POST,
    personId,
  });