import { CHANGE_LONGCOUNT, UPDATE_MAYA } from '../actions/index';
import MayaDate from '../utils/MayaDate';
import * as convert from '../utils/convert';

const today = new Date();
const initialState = convert.toMaya(today, 584286);
initialState.calcTzolkin();
initialState.calcHaab();
initialState.calcLordOfNight();

export default function(state = initialState, action) {
  let newMayaDate;
  switch(action.type) {
    case CHANGE_LONGCOUNT:
      const newLongCount = state.getLongCount();
      newLongCount[action.index] = action.value;
      newMayaDate = new MayaDate(newLongCount);
      newMayaDate.calcTzolkin();
      newMayaDate.calcHaab();
      newMayaDate.calcLordOfNight();
      return newMayaDate;
    case UPDATE_MAYA:
      newMayaDate = convert.toMaya(action.gregorianDate, action.constant);
      newMayaDate.calcTzolkin();
      newMayaDate.calcHaab();
      newMayaDate.calcLordOfNight();
      return newMayaDate;
    default:
      return state;
  }
}