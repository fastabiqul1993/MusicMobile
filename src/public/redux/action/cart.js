import axios from 'axios';

export const getCart = (id, access_token) => {
  return {
    type: 'GET_CART',
    payload: axios.get(`http://localhost:3000/cart/${id}`, {
      headers: {header_key: '4N3K4-MUS1K', access_token},
    }),
  };
};

export const postCart = (ProductId, access_token, UserId) => {
  return {
    type: 'POST_CART',
    payload: axios.post(
      `http://localhost:3000/cart`,
      {UserId, ProductId},
      {
        headers: {header_key: '4N3K4-MUS1K', access_token},
      },
    ),
  };
};

export const patchCart = (ProductId, qty, access_token) => {
  return {
    type: 'PATCH_CART',
    payload: axios.patch(
      `http://localhost:3000/cart`,
      {
        UserId: auth.id,
        ProductId,
        qty,
      },
      {
        headers: {header_key: '4N3K4-MUS1K', access_token},
      },
    ),
  };
};

export const deleteCart = (ProductId, access_token) => {
  return {
    type: 'DELETE_CART',
    payload: axios.delete(
      `http://localhost:3000/cart`,
      {
        UserId: auth.id,
        ProductId,
      },
      {
        headers: {header_key: '4N3K4-MUS1K', access_token},
      },
    ),
  };
};
