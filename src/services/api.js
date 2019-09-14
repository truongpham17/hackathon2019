/* eslint-disable no-return-await */
import axios from 'axios';

import { API_URL } from '../constants/api';
import store from '../store';

export const query = async ({
  method = 'GET',
  endpoint = '/',
  data = null,
  headers = {},
  params = {},
  // form = {},
}) => {
  console.log(API_URL + endpoint);
  console.log(`Bearer ${store.getState().user.token}`);
  return await axios(
    {
      method,
      url: API_URL + endpoint,
      data,
      params,
      headers: {
        ...headers,
        Authorization: `Bearer ${store.getState().user.token}`,
        'Content-Type': 'application/json',
      },
      // : headers,
    }
    // { form }
  );
};
