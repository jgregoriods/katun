import { combineReducers } from 'redux';
import MayaReducer from './reducer_maya';
import ConstantReducer from './reducer_constant';
import GregorianReducer from './reducer_gregorian';
import JulianReducer from './reducer_julian';
import DistanceReducer from './reducer_distance';

const rootReducer = combineReducers({
  mayaDate: MayaReducer,
  constant: ConstantReducer,
  gregorianDate: GregorianReducer,
  julianDate: JulianReducer,
  distanceNumber: DistanceReducer
});

export default rootReducer;