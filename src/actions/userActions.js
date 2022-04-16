import axios from "axios";
import { USER_DETAILS_REQUEST, USER_DETAILS_RESET, USER_LIST_RESET, USER_LOGIN_FAIL,USER_LOGIN_REQUEST,
USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants";
import {ORDER_LIST_MY_RESET} from "../constants/orderConstants"



export const  login = (email, password) => async(dispatch)=> {
    try {
        const config = {
            headers : {
                "Content-Type" : "application/json",
            },
        }
        dispatch({
            type: USER_LOGIN_REQUEST,
        })
       

        const { data } = await axios.post('http://localhost:2600/api/v1/auth/login', {email, password}, config)

        console.log(data)
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
        // console.log(error)
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')

    dispatch({type: USER_LOGOUT})
    dispatch({type: USER_DETAILS_RESET})
    dispatch({type: ORDER_LIST_MY_RESET})
    dispatch({type: USER_LIST_RESET})

    document.location.href = '/'
}

export const register = (name, email, password) => async(dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,
        })
        const config  = {
            headers: {
                "Content-Type" : "application/json",
            }
        }
        const {data} = await axios.post('http://localhost:2600/api/v1/auth/register', {name, email, password}, config) 

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        })
       
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
          })
        localStorage.setItem('userInfo', JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}