import { query } from '../services/api';
import { METHODS } from '../constants/api';

export const GET_CATEGORY_REQUEST = 'get-category-request';

export const GET_CATEGORY_FAILURE = 'get-category-failure';

export const GET_CATEGORY_SUCCESS = 'get-category-success';

export const GET_CATEGORY__DETAIL_REQUEST = 'get-category-detail-request';

export const GET_CATEGORY_DETAIL_FAILURE = 'get-category-detail-failure';

export const GET_CATEGORY_DETAIL_SUCCESS = 'get-category-detail-success';

export function getCategory() {
  return async dispatch => {
    try {
      dispatch({
        type: GET_CATEGORY_REQUEST,
      });
      const data = await query({ endpoint: '/categories' });
      if (data.status === 200) {
        dispatch({
          type: GET_CATEGORY_SUCCESS,
          payload: data.data,
        });
      } else {
        dispatch({
          type: GET_CATEGORY_FAILURE,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_CATEGORY_FAILURE,
      });
    }
  };
}

export function getCategoryDetail(id) {
  return async dispatch => {
    try {
      dispatch({
        type: GET_CATEGORY__DETAIL_REQUEST,
      });
      const data = await query({ endpoint: `/categories/${id}` });
      if (data.status === 200) {
        dispatch({
          type: GET_CATEGORY_DETAIL_SUCCESS,
          payload: data.data,
        });
      } else {
        dispatch({
          type: GET_CATEGORY_DETAIL_FAILURE,
        });
      }
    } catch (error) {
      dispatch({
        type: GET_CATEGORY_DETAIL_FAILURE,
      });
    }
  };
}
