import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import CartReducer from './CartReducer';

const rootReducer = combineReducers({ 
    books: bookReducer,
    cart: CartReducer
})

export default rootReducer;