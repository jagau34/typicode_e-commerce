import { combineReducers } from "redux";
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';

const reducers = combineReducers({productsReducer, cartReducer}); 
export default reducers;