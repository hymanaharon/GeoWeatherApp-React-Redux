import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import geoReducer from './geoReducer';

export default combineReducers({
  geoData: geoReducer,
  weatherData: weatherReducer
})
