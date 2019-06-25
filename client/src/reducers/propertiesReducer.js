import _ from 'lodash'
import{
  CREATE_PROPERTY,
  FETCH_PROPERTIES,
}from '../actions/types'


export default (state={}, action)=>{
  switch(action.type){
    case FETCH_PROPERTIES:
      return {...state, ..._.mapKeys(action.payload, 'id')}
    case CREATE_PROPERTY:
    return {...state, [action.payload.id]:action.payload}
    default:
      return state;
  }
}
