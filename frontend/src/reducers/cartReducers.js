
// export const cartReducer = (state = { cartItems: [] }, action) => {
//     switch (action.type) {
//       case 'CART_REQUEST':
//         return { loading: true, cartItems: [] };
//       case 'GET_CART':
//         return { loading: false, cartItems: action.payload };
//       case 'ADD_TO_CART':
//         return { loading: false, cartItems: action.payload };
//       case 'REMOVE_FROM_CART':
//         return { loading: false, cartItems: action.payload };
//       case 'CART_ERROR':
//         return { loading: false, error: action.payload };
//       default:
//         return state;
//     }
// };

// reducers/cartReducer.js

  
  export const cartReducer = (state = { cartItems: { items: [] } }, action) => {
    switch (action.type) {
      case 'CART_REQUEST':
        return { loading: true, cartItems: { items: [] } };
      case 'GET_CART':
        return { loading: false, cartItems: action.payload || { items: [] } };
      case 'ADD_TO_CART':
        return { loading: false, cartItems: action.payload || { items: [] } };
      case 'REMOVE_FROM_CART':
        return { loading: false, cartItems: action.payload || { items: [] } };
      case 'CART_ERROR':
        return { loading: false, error: action.payload, cartItems: { items: [] } };
      default:
        return state;
    }
  };
  