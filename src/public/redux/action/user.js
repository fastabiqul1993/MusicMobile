import axios from 'axios';

export const login = (email, password) => {
  return {
    type: 'LOGIN',
    payload: axios.post(`https://kepet-goreng.herokuapp.com/user/login`, {
      email,
      password,
    }),
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
    payload: {isLogin: false, user: {}},
  };
};

export const register = (name, email, password) => {
  return {
    type: 'REGISTER',
    payload: axios.post(`https://kepet-goreng.herokuapp.com/user/register`, {
      name,
      email,
      password,
    }),
  };
};
