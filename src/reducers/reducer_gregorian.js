export default function(state = {
  day: 7,
  month: 10,
  year: 1988,
  era: 'CE'
}, action) {
  switch(action.type) {
    case 'GREGORIAN_CHANGED':
      const newGregorian = Object.assign({}, state);
      newGregorian[action.index] = action.value;
      return newGregorian;
  }
  return state;
}