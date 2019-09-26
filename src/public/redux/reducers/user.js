import {AsyncStorage} from 'react-native';

const init = {
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
  isLogin: false,
  user: {},
};

const user = (state = init, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'LOGIN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false,
      };
    case 'LOGIN_FULFILLED':
      AsyncStorage.setItem('id', action.payload.data.response.id);
      AsyncStorage.setItem('name', action.payload.data.response.name);
      AsyncStorage.setItem('role', action.payload.data.response.role);
      AsyncStorage.setItem(
        'access_token',
        action.payload.data.response.access_token,
      );

      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfilled: true,
        isLogin: true,
        user: action.payload.data.response,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLogin: action.payload.isLogin,
        user: action.payload.user,
      };
    case 'REGISTER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'REGISTER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false,
      };
    case 'REGISTER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfilled: true,
      };
    default:
      return state;
  }
};

export default user;
