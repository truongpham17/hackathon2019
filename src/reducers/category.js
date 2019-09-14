import {
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_DETAIL_SUCCESS,
} from '../actions/category';

const INITIAL_STATE = {
  list: [
    { name: 'Agriculture', id: 1 },
    { name: 'Agriculture', id: 2 },
    { name: 'Agriculture', id: 3 },
    { name: 'Agriculture', id: 4 },
    { name: 'Agriculture', id: 5 },
    { name: 'Agriculture', id: 6 },
    { name: 'Agriculture', id: 7 },
  ],
  currentCategory: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORY_SUCCESS:
      return { ...state, list: action.payload };
    case GET_CATEGORY_DETAIL_SUCCESS:
      return {
        ...state,
        currentCategory: action.payload,
      };
    default:
      return { ...state };
  }
};
