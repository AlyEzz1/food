import { combineReducers } from 'redux'

import authReducer from './authReducer'
import  categoryReducer from './categoryReducer'
import subcategoryReducer from './subcategoryReducer'
import  productsReducer from './productsReducer'
export default combineReducers({
    authReducer,
    allCategory: categoryReducer,
    subCategory: subcategoryReducer,
    allproducts: productsReducer,
})
 