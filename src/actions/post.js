import { query } from '../services/api';
import { METHODS } from '../constants/api';

export const GET_POST_REQUEST = 'get-post-request';
export const GET_POST_SUCCESS = 'get-post-success';
export const GET_POST_FAILURE = 'get-post-failure';

export const GET_POST_DETAIL_REQUEST = 'get-post-detail-request';
export const GET_POST_DETAIL_SUCCESS = 'get-post-detail-success';
export const GET_POST_DETAIL_FAILURE = 'get-post-detail-failure';

export const GET_POST_TYPE_REQUEST = 'get-post-type-request';
export const GET_POST_TYPE_SUCCESS = 'get-post-type-success';
export const GET_POST_TYPE_FAILURE = 'get-post-type-failure';

export const CREATE_REQUEST_REQUEST = 'create-request-request';
export const CREATE_REQUEST_SUCCESS = 'create-request-success';
export const CREATE_REQUEST_FAILURE = 'create-request-failure';

export const GET_REQUEST_REQUEST = 'get-request-request';
export const GET_REQUEST_SUCCESS = 'get-request-success';
export const GET_REQUEST_FAILURE = 'get-request-failure';

export const GET_SMART_POST_REQUEST = 'get-smart-post-request';
export const GET_SMART_POST_SUCCESS = 'get-smart-post-success';
export const GET_SMART_POST_FAILURE = 'get-smart-post-failure';

export function getPosts() {
  return async dispatch => {
    try {
      dispatch({ type: GET_POST_REQUEST });
      const data = await query({ endpoint: '/posts/me' });
      if (data.status === 200) {
        dispatch({
          type: GET_POST_SUCCESS,
          payload: data.data,
        });
      } else {
        dispatch({
          type: GET_POST_FAILURE,
        });
      }
    } catch (error) {
      dispatch({ type: GET_POST_FAILURE });
    }
  };
}

export function getPostDetail(id) {
  return async dispatch => {
    try {
      dispatch({ type: GET_POST_DETAIL_REQUEST });
      const result = await query({ endpoint: `/posts/${id}` });
      if (result.status === 200) {
        dispatch({
          type: GET_POST_DETAIL_SUCCESS,
          payload: result.data,
        });
      } else {
        dispatch({
          type: GET_POST_DETAIL_FAILURE,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_POST_DETAIL_FAILURE,
      });
    }
  };
}

export function getPostByType(type) {
  return async dispatch => {
    try {
      dispatch({
        type: GET_POST_TYPE_REQUEST,
      });
      const result = await query({ endpoint: `/posts/type/${type}` });
      if (result.status === 200) {
        dispatch({
          type: GET_POST_TYPE_SUCCESS,
          payload: result.data,
        });
      } else {
        dispatch({
          type: GET_POST_TYPE_FAILURE,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_POST_TYPE_FAILURE,
      });
    }
  };
}

export function createRequest(data) {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_REQUEST_REQUEST,
      });
      const result = await query({
        endpoint: '/requests',
        method: METHODS.post,
        data,
      });
      if (result.status === 201) {
        dispatch({
          type: CREATE_REQUEST_SUCCESS,
          payload: result.data,
        });
      } else {
        dispatch({
          type: CREATE_REQUEST_FAILURE,
        });
      }
    } catch (error) {
      dispatch({
        type: CREATE_REQUEST_FAILURE,
      });
    }
  };
}

export function getRequest() {
  return async dispatch => {
    try {
      dispatch({
        type: GET_REQUEST_REQUEST,
      });
      const result = await query({ endpoint: '/requests/me' });
      if (result.status === 200) {
        dispatch({
          type: GET_REQUEST_SUCCESS,
          payload: result.data,
        });
      } else {
        dispatch({
          type: GET_REQUEST_FAILURE,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_REQUEST_FAILURE,
      });
    }
  };
}

export function getSmartPost(data, callback) {
  return async dispatch => {
    console.log(data);
    try {
      dispatch({ type: GET_SMART_POST_REQUEST });
      const result = await query({
        method: METHODS.post,
        data,
        endpoint: '/posts/smart',
      });
      if (result.status === 200) {
        dispatch({
          type: GET_SMART_POST_SUCCESS,
          payload: result.data,
        });
        if (result.data.length === 0) {
          callback.failure();
        } else {
          callback.success();
        }
      } else {
        dispatch({
          type: GET_SMART_POST_FAILURE,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_SMART_POST_FAILURE,
      });
    }
  };
}
