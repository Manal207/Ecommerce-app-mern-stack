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



  