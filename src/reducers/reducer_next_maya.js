import MayaDate from '../utils/MayaDate';
import { nextDate } from '../utils/distance';

export default function(state = null, action) {
  let newMayaDate;
  switch(action.type) {
    case CALCULATE_NEXT:
      const newLongCount = state.getLongCount();
      newLongCount[action.index] = action.value;
      newMayaDate = new MayaDate(newLongCount);
      newMayaDate.calcTzolkin();
      newMayaDate.calcHaab();
      newMayaDate.calcLordOfNight();
      return newMayaDate;
    default:
      return state;
  }
}