import { combineReducers } from "redux";
import { ProductsReducer, selectedProductsReducer, manageProductsReducer } from "./productReducer";
const reducers = combineReducers({
  allProducts: ProductsReducer,
  product: selectedProductsReducer,
  manageProducts: manageProductsReducer,
});
export default reducers;
