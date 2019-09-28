import axios from 'axios';

export const getCart = (id, access_token) => {
  return {
    type: 'GET_CART',
    payload: axios.get(`https://kepet-goreng.herokuapp.com/cart/${id}`, {
      headers: {header_key: '4N3K4-MUS1K', access_token},
    }),
  };
};

export const postCart = (ProductId, access_token, UserId) => {
  return {
    type: 'POST_CART',
    payload: axios.post(
      `https://kepet-goreng.herokuapp.com/cart`,
      {UserId, ProductId},
      {
        headers: {header_key: '4N3K4-MUS1K', access_token},
      },
    ),
  };
};

export const patchCart = (ProductId, qty, UserId, access_token) => {
  return {
    type: 'PATCH_CART',
    payload: axios.put(
      `https://kepet-goreng.herokuapp.com/cart`,
      {
        UserId,
        ProductId,
        qty,
      },
      {
        headers: {header_key: '4N3K4-MUS1K', access_token},
      },
    ),
  };
};

export const deleteCart = (UserId, ProductId, access_token) => {
  return {
    type: 'DELETE_CART',
    payload: axios.delete(
      `https://kepet-goreng.herokuapp.com/cart`,
      {
        UserId,
        ProductId,
      },
      {
        headers: {header_key: '4N3K4-MUS1K', access_token},
      },
    ),
  };
};
