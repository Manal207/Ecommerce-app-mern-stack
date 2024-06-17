import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/authReducer';
import { productListReducer } from './reducers/productReducers';
import { userLoginReducer } from './reducers/userReducers';
import { cartReducer } from './reducers/cartReducers';


const reducer = combineReducers({
  auth: authReducer,
  productList: productListReducer,
  userLogin: userLoginReducer,
  cart: cartReducer,


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
