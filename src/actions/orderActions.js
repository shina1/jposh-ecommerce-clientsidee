import axios from "axios";
import { CART_CLEAR_ITEMS } from "../constants/cartConstant";
import { ORDER_ANALYSIS_FAIL, ORDER_ANALYSIS_REQUEST, ORDER_ANALYSIS_SUCCESS, ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_DELETE_FAIL, ORDER_DELETE_REQUEST, ORDER_DELETE_SUCCESS, ORDER_DELIVER_FAIL, ORDER_DELIVER_REQUEST, ORDER_DELIVER_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_LIST_FAIL, ORDER_LIST_MY_FAIL, ORDER_LIST_MY_REQUEST, ORDER_LIST_MY_SUCCESS, ORDER_LIST_NEW_FAIL, ORDER_LIST_NEW_REQUEST, ORDER_LIST_NEW_SUCCESS, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS } from "../constants/orderConstants";
import { LOCAL_BASE_URL, PRODUCTION_BASE_URL } from "../utils/requestMethods";



import { logout } from "./userActions";


// create order

export const createOrder = (order) => async(dispatch, getState) =>{
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST,
        })
        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const {data} = await axios.post(`${PRODUCTION_BASE_URL}order/`, order, config)
        
        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data,
        })
        dispatch({
            type: CART_CLEAR_ITEMS,
            payload: data,
        })
        localStorage.removeItem('cartItems')
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message

        if(message === 'Not authorized, token failed') {
            dispatch(logout())
        } 

        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: message
        })
    }
}

// get single order details
export const getOrderDetails = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_DETAILS_REQUEST,
        })
        const {
            userLogin : {
                userInfo
            }
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            },
        }

        const { data } = await axios.get(`${PRODUCTION_BASE_URL}order/${id}`, config)

        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: message,
    })
    }
}


// pay order
export const payOrder = (orderId, paymentResult) => async(dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_PAY_REQUEST
        })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }
        // https://ancient-beach-60604.herokuapp.com/api/v1/order/${orderId}/pay
        const { data } = await axios.put(`${PRODUCTION_BASE_URL}order/${orderId}/pay`, paymentResult, config)

        console.log(data)

        dispatch({
            type: ORDER_PAY_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: ORDER_PAY_FAIL,
      payload: message,
    })
    }
}


// deliver order
export const deliverOrder = (orderId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_DELIVER_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.put(
        `${PRODUCTION_BASE_URL}order/${orderId}/deliver`,
        {},
        config
      )
  
      dispatch({
        type: ORDER_DELIVER_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: ORDER_DELIVER_FAIL,
        payload: message,
      })
    }
  }


  // list order of a user
  export const listMyOrders = (userID) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_LIST_MY_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`${PRODUCTION_BASE_URL}order/userorder/${userID}`, config)
     console.log('this are your list of orders',data);
      dispatch({
        type: ORDER_LIST_MY_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: ORDER_LIST_MY_FAIL,
        payload: message,
      })
    }
  }

  // list all orders
  export const listOrders = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_LIST_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`${PRODUCTION_BASE_URL}order/findall`, config)
  
      dispatch({
        type: ORDER_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: ORDER_LIST_FAIL,
        payload: message,
      })
    }
  }

   // list all orders
   export const listNewOrders = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_LIST_NEW_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`${PRODUCTION_BASE_URL}order/findall?new=true`, config)
  
      dispatch({
        type: ORDER_LIST_NEW_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: ORDER_LIST_NEW_FAIL,
        payload: message,
      })
    }
  }
  


  // get sales analysis
  export const getAnalysis = () => async(dispatch, getState) =>{
    try {
      dispatch({type: ORDER_ANALYSIS_REQUEST})

      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
      const { data } = await axios.get(`${PRODUCTION_BASE_URL}order/income`, config);

      dispatch({
        type: ORDER_ANALYSIS_SUCCESS,
        payload: data
      });

    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: ORDER_ANALYSIS_FAIL,
        payload: message,
      })
    }
  }

  // delete an order
  
  export const deleteOrder = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_DELETE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      await axios.delete(`${PRODUCTION_BASE_URL}order/delete/${id}`, config)
  
      dispatch({
        type: ORDER_DELETE_SUCCESS,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: ORDER_DELETE_FAIL,
        payload: message,
      })
    }
  }
