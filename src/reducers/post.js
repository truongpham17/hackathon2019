import { SET_PUBLISH_DATA } from '../actions/publish';
import {
  GET_POST_SUCCESS,
  GET_POST_DETAIL_SUCCESS,
  GET_POST_TYPE_SUCCESS,
  GET_REQUEST_REQUEST,
  GET_REQUEST_SUCCESS,
  GET_SMART_POST_SUCCESS,
} from '../actions/post';

const INITIAL_STATE = {
  posts: [],
  currentPost: {},
  requests: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POST_SUCCESS:
      return { ...state, posts: action.payload };
    case GET_POST_TYPE_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_POST_DETAIL_SUCCESS:
      return {
        ...state,
        currentPost: action.payload,
      };
    case GET_REQUEST_SUCCESS:
      return {
        ...state,
        requests: action.payload,
      };
    case GET_SMART_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return { ...state };
  }
};
