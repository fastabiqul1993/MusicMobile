const init = {
  wishlist: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const wishlist = (state = init, action) => {
  switch (action.type) {
    case 'GET_WISHLIST_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_WISHLIST_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false,
      };
    case 'GET_WISHLIST_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfilled: true,
        wishlist: action.payload.data.response.rows,
      };
    case 'POST_WISHLIST_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'POST_WISHLIST_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false,
      };
    case 'POST_WISHLIST_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFulfilled: true,
      };
    case 'DELETE_WISHLIST_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'DELETE_WISHLIST_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
        isFulfilled: false,
      };
    case 'DELETE_WISHLIST_FULFILLED':
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

export default wishlist;
