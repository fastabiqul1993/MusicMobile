import axios from 'axios';

export const getWishlist = id => {
  return {
    type: 'GET_WISHLIST',
    payload: axios.get(`http://localhost:3000/wishlist/${id}`, {
      // headers: {header_key: '4N3K4-MUS1K', access_token: auth.access_token},
    }),
  };
};

export const postWishlist = ProductId => {
  return {
    type: 'POST_WISHLIST',
    payload: axios.post(
      `http://localhost:3000/wishlist`,
      {UserId: auth.id, ProductId},
      // {
      //   headers: {header_key: '4N3K4-MUS1K', access_token: auth.access_token},
      // },
    ),
  };
};

export const deleteWishlist = ProductId => {
  return {
    type: 'DELETE_WISHLIST',
    payload: axios
      .delete
      // `http://localhost:3000/wishlist`,
      // {
      //   UserId: auth.id,
      //   ProductId,
      // },
      // {
      //   headers: {header_key: '4N3K4-MUS1K', access_token: auth.access_token},
      // },
      (),
  };
};
