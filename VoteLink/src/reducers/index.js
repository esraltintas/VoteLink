import { combineReducers } from 'redux';
import links from './links'
import options from './options'

export default combineReducers({
  links,
  options
})