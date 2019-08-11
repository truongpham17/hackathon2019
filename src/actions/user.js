export const GET_HELLO_REQUEST = 'get-hello-request';
export const GET_HELLO_SUCCESS = 'get-hello-success';
export const GET_HELLO_FAILURE = 'get-hello-failure';

export function getHelloRequest() {
  return {
    type: GET_HELLO_REQUEST,
    payload: 'Hello my friend',
  };
}
