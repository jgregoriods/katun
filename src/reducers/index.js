import { combineReducers } from 'redux';
import MayaReducer from './reducer_maya';

const rootReducer = combineReducers({
  mayaDate: MayaReducer
});

export default rootReducer;