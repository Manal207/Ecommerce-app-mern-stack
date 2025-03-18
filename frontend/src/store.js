import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/authReducer';
import { productListReducer } from './reducers/productReducers';
import { userLoginReducer } from './reducers/userReducers';
import { cartReducer } from './reducers/cartReducers';
import { orderCreateReducer } from './reducers/orderReducers';
import { paymentProcessReducer, paymentIntentReducer } from './reducers/paymentReducers';
import { productCategoryReducer } from './reducers/productReducers';
import { productDetailReducer } from './reducers/productReducers';
import { 
  productAddReducer,
  productUpdateReducer,
  productDeleteReducer 
} from './reducers/productReducers'; // Ensure correct imports



const reducer = combineReducers({
  auth: authReducer,
  productList: productListReducer,
  productCategory: productCategoryReducer,
  productDetail: productDetailReducer, // Ensure this matches what you use in useSelector

  productAdd: productAddReducer, // Add the add product reducer
  productUpdate: productUpdateReducer, // Add the update product reducer
  productDelete: productDeleteReducer, // Add the delete product reducer
  
  userLogin: userLoginReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  paymentProcess: paymentProcessReducer,
  paymentIntent: paymentIntentReducer,




  // Add other reducers here
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;




// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk'; // Import thunk as default export

// import { composeWithDevTools } from 'redux-devtools-extension';
// import { userLoginReducer } from './reducers/userReducers';


// const reducer = combineReducers({
//   userLogin: userLoginReducer,
//   // Add other reducers here
// });

// const userInfoFromStorage = localStorage.getItem('userInfo')
//   ? JSON.parse(localStorage.getItem('userInfo'))
//   : null;

// const initialState = {
//   userLogin: { userInfo: userInfoFromStorage },
// };

// const middleware = [thunk];

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );


// export default store;


// // import { createStore, combineReducers, applyMiddleware } from 'redux';
// // import { thunk } from 'redux-thunk';

// // import { composeWithDevTools } from 'redux-devtools-extension';
// // import { userLoginReducer } from './reducers/userReducers';

// // const reducer = combineReducers({
// //   userLogin: userLoginReducer,
// //   // Add other reducers here
// // });

// // const userInfoFromStorage = localStorage.getItem('userInfo')
// //   ? JSON.parse(localStorage.getItem('userInfo'))
// //   : null;

// // const initialState = {
// //   userLogin: { userInfo: userInfoFromStorage },
// // };

// // const middleware = [thunk];

// // const store = createStore(
// //   reducer,
// //   initialState,
// //   composeWithDevTools(applyMiddleware(...middleware))
// // );

// // export default store;
