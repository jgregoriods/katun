import MayaDate from '../utils/MayaDate';
import * as convert from '../utils/convert';

const initialState = new MayaDate([9, 8, 9, 13, 0]);
initialState.calcTzolkin();
initialState.calcHaab();
initialState.calcLordOfNight();

export default function(state = initialState, action) {
  let newMayaDate;
  switch(action.type) {
    case 'CHANGE_LONGCOUNT':
      const newLongCount = state.getLongCount();
      newLongCount[action.index] = action.value;
      newMayaDate = new MayaDate(newLongCount);
      newMayaDate.calcTzolkin();
      newMayaDate.calcHaab();
      newMayaDate.calcLordOfNight();
      return newMayaDate;
    case 'UPDATE_MAYA':
      newMayaDate = convert.toMaya(action.gregorianDate, action.constant);
      newMayaDate.calcTzolkin();
      newMayaDate.calcHaab();
      newMayaDate.calcLordOfNight();
      return newMayaDate;
    default:
      return state;
  }
}