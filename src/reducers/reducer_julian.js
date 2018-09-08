export default function(state = {
  day: 15,
  month: 4,
  year: 1992,
  era: 'CE'
}, action) {
  switch(action.type) {
    case 'JULIAN_CHANGED':
      const newJulian = Object.assign({}, state);
      newJulian[action.index] = action.value;
      return newJulian;
  }
  return state;
}