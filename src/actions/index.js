
import axios from 'axios';


export const FETCH_POSTS = 'fetch_Posts';
export const FETCH_POST = 'fetch_Post';
export const CREATE_POST = 'create_Post';
export const DELETE_POST = 'delete_Post';
export const FUCK_POSTS = 'fuck_Posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const NEW_URL = 'https://www.foaas.com';
const API_KEY = '?key=0489jhaw';
const SUBTITLE = 'Mike';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}


export function create_Post(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, values)
   .then(() => callback());
  return {
    type: CREATE_POST,
    payload: request
  };

}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };

}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
  .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}

export function fuckPosts(message) {
  const request = axios.get(`${NEW_URL}/awesome/${SUBTITLE}/`);

  return {
    type: FUCK_POSTS,
    payload: request
  };
}
