import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  SIGNUP_SUCCESS,
} from '../actions';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...action.payload };
    case SIGNUP_SUCCESS:
      return { ...action.payload };
    default:
      return { ...state };
  }
};
