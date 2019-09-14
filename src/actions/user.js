import { query } from '../services/api';
import { METHODS } from '../constants/api';

export const LOGIN_REQUEST = 'login-request';
export const LOGIN_SUCCESS = 'login-success';
export const LOGIN_FAILURE = 'login-failure';

export const SIGNUP_REQUEST = 'signup-request';
export const SIGNUP_SUCCESS = 'signup-success';
export const SIGNUP_FAILURE = 'signup-failure';

export function login(data = { phone: '', password: '' }, callback) {
  return async dispatch => {
    const { isSeller } = data;
    const endpoint = isSeller ? '/sellers/login' : '/buyers/login';
    try {
      dispatch({
        type: LOGIN_REQUEST,
      });
      const result = await query({
        method: METHODS.post,
        data,
        endpoint,
      });
      if (result.status === 200) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: result.data,
        });
        callback.success();
        console.log(result.data);
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_FAILURE,
      });
    }
  };
}

export function signUp(data, callback) {
  return async dispatch => {
    try {
      dispatch({ type: SIGNUP_REQUEST });
      const form = new FormData();
      form.append('image', {
        name: 'image.jpg',
        uri: data.image,
        type: 'image/jpg',
      });
      const endpoint = data.type === 'Seller' ? '/sellers' : '/buyers';
      const result = await query({
        method: METHODS.post,
        data,
        endpoint,
        // form,
      });
      if (result.status === 201) {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: result.data,
        });
        callback.success();
        console.log(result.data);
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: SIGNUP_FAILURE,
      });
    }
  };
}
