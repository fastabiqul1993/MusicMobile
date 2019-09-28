import axios from 'axios';

export const getAllProduct = id => {
  return {
    type: 'GET_ALL_PRODUCT',
    payload: axios.get(`https://kepet-goreng.herokuapp.com/product`, {
      params: {
        CategoryId: id,
      },
    }),
  };
};

export const getProduct = id => {
  return {
    type: 'GET_PRODUCT',
    payload: axios.get(`https://kepet-goreng.herokuapp.com/product/${id}`),
  };
};

export const getProductName = () => {
  return {
    type: 'GET_PRODUCT_NAME',
    payload: axios.get(`https://kepet-goreng.herokuapp.com/product/search`),
  };
};

export const postProduct = formData => {
  return {
    type: 'POST_PRODUCT',
    payload: axios.post(
      `https://kepet-goreng.herokuapp.com/product/`,
      formData,
      {
        headers: {header_key: '4N3K4-MUS1K', access_token: auth.access_token},
      },
    ),
  };
};

export const updateProduct = (
  id,
  name,
  qty,
  price,
  CategoryId,
  BranchId,
  description,
) => {
  return {
    type: 'UPDATE_PRODUCT',
    payload: axios.patch(`https://kepet-goreng.herokuapp.com/product/${id}`, {
      name,
      qty,
      price,
      CategoryId,
      BranchId,
      description,
    }),
  };
};

export const deleteProduct = id => {
  return {
    type: 'DELETE_PRODUCT',
    payload: axios.delete(`https://kepet-goreng.herokuapp.com/product/${id}`, {
      headers: {header_key: '4N3K4-MUS1K', access_token: auth.access_token},
    }),
  };
};
