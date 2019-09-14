import { SET_PUBLISH_DATA } from '../actions/publish';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PUBLISH_DATA:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
