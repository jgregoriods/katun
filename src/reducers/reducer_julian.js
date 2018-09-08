import * as convert from '../utils/convert';

const initialState = new Date(1992, 4, 15);

export default function(state = initialState, action) {
  let newDate;
  switch(action.type) {
    case 'CHANGE_JULIAN':
      const dateArgs = [state.getFullYear(), state.getMonth(), state.getDate()];
      if (action.index === 0 && action.era === false) dateArgs[0] = (action.value - 1) * -1;
      else dateArgs[action.index] = action.value;
      newDate = new Date(dateArgs[0], dateArgs[1], dateArgs[2])
      newDate.setFullYear(dateArgs[0]);
      return newDate;
    case 'TOGGLE_JUL_ERA':
      const newYear = (state.getFullYear() -1) * -1;
      newDate = new Date(newYear, state.getMonth(), state.getDate());
      newDate.setFullYear(newYear);
      return newDate;
    case 'UPDATE_WESTERN':
      newDate = convert.toJulian(convert.mayaToGreg(action.mayaDate, action.constant));
      return newDate;
    case 'UPDATE_JULIAN':
      newDate = convert.toJulian(action.gregorianDate);
      return newDate;
    default:
      return state;
  }
}