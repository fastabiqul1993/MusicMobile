import {combineReducers} from 'redux';

import user from './user';
import category from './category';
import branch from './branch';
import product from './product';
import cart from './cart';
import wishlist from './wishlist';

const rootReducer = combineReducers({
  user,
  category,
  branch,
  product,
  cart,
  wishlist,
});

export default rootReducer;
