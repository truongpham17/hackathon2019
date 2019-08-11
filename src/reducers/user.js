import { GET_HELLO_REQUEST, getHelloRequest } from '../actions';

const INITIAL_STATE = {
  content: 'Initial content',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_HELLO_REQUEST:
      return { ...state, content: action.payload };
    default:
      return { ...state };
  }
};
