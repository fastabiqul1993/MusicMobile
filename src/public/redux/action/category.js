import axios from 'axios';

export const getAllCategory = () => {
  return {
    type: 'GET_ALL_CATEGORY',
    payload: axios.get(`https://kepet-goreng.herokuapp.com/category`),
  };
};
