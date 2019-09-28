import axios from 'axios';

export const getWishlist = (id, access_token) => {
  return {
    type: 'GET_WISHLIST',
    payload: axios.get(`https://kepet-goreng.herokuapp.com/wishlist/${id}`, {
      headers: {header_key: '4N3K4-MUS1K', access_token},
    }),
  };
};

export const postWishlist = (ProductId, UserId, access_token) => {
  return {
    type: 'POST_WISHLIST',
    payload: axios.post(
      `https://kepet-goreng.herokuapp.com/wishlist`,
      {UserId, ProductId},
      {
        headers: {header_key: '4N3K4-MUS1K', access_token},
      },
    ),
  };
};

export const deleteWishlist = (id, access_token) => {
  return {
    type: 'DELETE_WISHLIST',
    payload: axios.delete(`https://kepet-goreng.herokuapp.com/wishlist/${id}`, {
      headers: {header_key: '4N3K4-MUS1K', access_token},
    }),
  };
};
