import { FETCH_POSTS, FETCH_POST, DELETE_POST, FUCK_POSTS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action ) {
  switch (action.type) {
    case FUCK_POSTS:
    return (state, action.payload);

    case DELETE_POST:
    return _.omit(state, action.payload);

    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state };
      // newSTate[post.id] = post;
      // return newState;

      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');

        // { 4: post }  array - object use lodash
    default:
    return state;
  }
}
