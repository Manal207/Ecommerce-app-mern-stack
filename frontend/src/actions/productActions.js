import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_CATEGORY_REQUEST,
  PRODUCT_CATEGORY_SUCCESS,
  PRODUCT_CATEGORY_FAIL,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get('/api/products');

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const listProductsByCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_CATEGORY_REQUEST });

    const { data } = await axios.get(`/api/products/category/${category}`);

    dispatch({
      type: PRODUCT_CATEGORY_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_CATEGORY_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};



// import axios from 'axios';
// import {
//   PRODUCT_LIST_REQUEST,
//   PRODUCT_LIST_SUCCESS,
//   PRODUCT_LIST_FAIL,
// } from '../constants/productConstants';

// export const listProducts = () => async (dispatch) => {
//   try {
//     dispatch({ type: PRODUCT_LIST_REQUEST });

//     const { data } = await axios.get('/api/products');

//     dispatch({
//       type: PRODUCT_LIST_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_LIST_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };


// import axios from 'axios';

// export const listProducts = () => async (dispatch) => {
//   try {
//     dispatch({ type: 'PRODUCT_LIST_REQUEST' });

//     const { data } = await axios.get('/api/products');

//     dispatch({
//       type: 'PRODUCT_LIST_SUCCESS',
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: 'PRODUCT_LIST_FAIL',
//       payload: error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };
