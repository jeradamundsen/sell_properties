import properties from '../apis/properties'
import history from '../history'
import {SIGN_IN,
   SIGN_OUT,
   CREATE_PROPERTY
 } from './types'

export const signIn = (userId)=>{
  return{
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = ()=>{
  return{
    type: SIGN_OUT
  }
}

export const propertyCreate =formValues => async (dispatch, getState)=>{
  const {userId}= getState().auth
  const response = await properties.post('/properties', {...formValues, userId})
  dispatch({
    type: CREATE_PROPERTY,
    payload: response.data
  })

  history.push('/')
}
