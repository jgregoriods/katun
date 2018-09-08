import MayaDate from '../utils/MayaDate';

const initialState = new MayaDate([9, 8, 9, 13, 0]);
initialState.calcTzolkin();
initialState.calcHaab();
initialState.calcLordOfNight();

export default function(state = initialState, action) {
  switch(action.type) {
    case 'LONGCOUNT_CHANGED':
      const newLongCount = state.getLongCount();
      newLongCount[action.index] = action.value;
      const newMayaDate = new MayaDate(newLongCount);
      newMayaDate.calcTzolkin();
      newMayaDate.calcHaab();
      newMayaDate.calcLordOfNight();
      return newMayaDate;
  }
  return state;
}