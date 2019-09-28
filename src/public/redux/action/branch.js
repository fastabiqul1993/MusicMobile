import axios from 'axios';

export const getAllBranch = () => {
  return {
    type: 'GET_ALL_BRANCH',
    payload: axios.get(`https://kepet-goreng.herokuapp.com/branch`),
  };
};
