import {
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
} from '../constants/productConstants';

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_ADD_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
} from '../constants/productConstants';

// export const productListReducer = (state = { products: [] }, action) => {
//   switch (action.type) {
//     case PRODUCT_LIST_REQUEST:
//       return { loading: true, products: [] };
//     case PRODUCT_LIST_SUCCESS:
//       return { loading: false, products: action.payload };
//     case PRODUCT_LIST_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

export const productAddReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PRODUCT_ADD_REQUEST':
      return { loading: true };
    case 'PRODUCT_ADD_SUCCESS':
      return { loading: false, product: action.payload };
    case 'PRODUCT_ADD_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PRODUCT_UPDATE_REQUEST':
      return { loading: true };
    case 'PRODUCT_UPDATE_SUCCESS':
      return { loading: false, product: action.payload };
    case 'PRODUCT_UPDATE_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PRODUCT_DELETE_REQUEST':
      return { loading: true };
    case 'PRODUCT_DELETE_SUCCESS':
      return { loading: false, success: true };
    case 'PRODUCT_DELETE_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


  export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case 'PRODUCT_LIST_REQUEST':
        return { loading: true, products: [] };
      case 'PRODUCT_LIST_SUCCESS':
        return { loading: false, products: action.payload };
      case 'PRODUCT_LIST_FAIL':
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const productDetailReducer = (state = { product: {} }, action) => {
    switch (action.type) {
      case 'PRODUCT_DETAIL_REQUEST':
        return { loading: true, product: {} };
      case 'PRODUCT_DETAIL_SUCCESS':
        return { loading: false, product: action.payload };
      case 'PRODUCT_DETAIL_FAIL':
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const productCategoryReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case 'PRODUCT_CATEGORY_REQUEST':
        return { loading: true, products: [] };
      case 'PRODUCT_CATEGORY_SUCCESS':
        return { loading: false, products: action.payload };
      case 'PRODUCT_CATEGORY_FAIL':
        return { loading: false, error: action.payload };    
      default:
        return state;
    }
  };



  