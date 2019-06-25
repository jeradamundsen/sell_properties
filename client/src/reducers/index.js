import {combineReducers} from 'redux'
import authReducer from './authReducer'
import { reducer as formReducer } from 'redux-form'
import propertiesReducer from './propertiesReducer'

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  properties: propertiesReducer
})
