import React,{useReducer} from 'react';
import AlertContext from './AlertContext'
import AlertReducer from './AlertReducer'
import * as types from '../types'

const AlertState = (props) =>{
    const initialState = null

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    //Set alert
    const setAlert = (msg, type) => {
        dispatch({
            type: types.SET_ALERT,
            payload: {msg, type}
        })
        setTimeout(() => dispatch({type: types.REMOVE_ALERT}), 5000)
      }

    return <AlertContext.Provider 
    value={{
        alert: state,
        setAlert
    }}>
        {props.children}
    </AlertContext.Provider>

}

export default AlertState;