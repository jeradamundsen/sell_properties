import properties from '../apis/properties'
import history from '../history'
import {SIGN_IN,
   SIGN_OUT,
   CREATE_PROPERTY,
   FETCH_PROPERTIES,
   FETCH_PROPERTY,
   EDIT_PROPERTY,
   DELETE_PROPERTY
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

  history.push('/properties/geosuggest')
}
export const fetchProperties = () => async dispatch => {
  const response = await properties.get('/properties')

  dispatch({type: FETCH_PROPERTIES, payload: response.data})
}
export const fetchProperty=(id)=> async dispatch=>{
  const response = await properties.get(`/properties/${id}`)
  dispatch({type: FETCH_PROPERTY, payload: response.data})
}
export const editProperty=(id, formValues)=> async dispatch=>{
  const response = await properties.patch(`/properties/${id}`, formValues)
  dispatch({type: EDIT_PROPERTY, payload: response.data})
  history.push('/')
}
export const deleteProperty =(id)=> async dispatch=>{
  await properties.delete(`/properties/${id}`)
  dispatch({type: DELETE_PROPERTY, payload: id})
  history.push('/')
}
