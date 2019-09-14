import { query } from '../services/api';
import { METHODS } from '../constants/api';

export const SET_PUBLISH_DATA = 'set-publish-data';

export const PUBLISH_POST_REQUEST = 'publish-post-request';
export const PUBLISH_POST_SUCCESS = 'publish-post-success';
export const PUBLISH_POST_FAILURE = 'publish-post-failure';

export function setPublicData(data) {
  return {
    type: SET_PUBLISH_DATA,
    payload: data,
  };
}

export function publishPost(data, callback) {
  return async dispatch => {
    try {
      dispatch({ type: PUBLISH_POST_REQUEST });
      console.log(data);
      const result = await query({
        endpoint: '/posts',
        data,
        method: METHODS.post,
      });
      if (result.status === 201) {
        dispatch({
          type: PUBLISH_POST_SUCCESS,
          payload: result.data,
        });
        callback.success();
      } else {
        dispatch({
          type: PUBLISH_POST_FAILURE,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: PUBLISH_POST_FAILURE,
      });
    }
  };
}
