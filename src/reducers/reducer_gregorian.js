import { CHANGE_GREGORIAN, TOGGLE_GREG_ERA, UPDATE_WESTERN, UPDATE_GREGORIAN } from '../actions/index';
import * as convert from '../utils/convert';

const initialState = new Date();

export default function(state = initialState, action) {
  let newDate;
  switch(action.type) {
    case CHANGE_GREGORIAN:
      const dateArgs = [state.getFullYear(), state.getMonth(), state.getDate()];
      if (action.index === 0 && action.era === false) dateArgs[0] = (action.value - 1) * -1;
      else dateArgs[action.index] = action.value;
      newDate = new Date(dateArgs[0], dateArgs[1], dateArgs[2])
      newDate.setFullYear(dateArgs[0]);
      return newDate;
    case TOGGLE_GREG_ERA:
      const newYear = (state.getFullYear() -1) * -1;
      newDate = new Date(newYear, state.getMonth(), state.getDate());
      newDate.setFullYear(newYear);
      return newDate;
    case UPDATE_WESTERN:
      newDate = convert.mayaToGreg(action.mayaDate, action.constant);
      return newDate;
    case UPDATE_GREGORIAN:
      newDate = convert.julianToGreg(action.julianDate);
      return newDate;
    default:
      return state;
  }
}